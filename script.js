let page = 1;
let allShops = [];

function loadMore() {
  fetch("data/shops_" + page + ".json")
    .then(res => res.json())
    .then(data => {
      allShops = allShops.concat(data);
      showShops(allShops);
      page++;
    })
    .catch(() => alert("Aur shop nahi hai"));
}

function showShops(list) {
  let box = document.getElementById("shopList");
  box.innerHTML = "";
  list.forEach(shop => {
    box.innerHTML += `
      <div class="shop">
        <b>${shop.name}</b><br>
        ${shop.address}<br>
        Mobile: ${shop.mobile}<br>
        <button>Call</button>
        <button>WhatsApp</button>
      </div>
    `;
  });
}

document.getElementById("search").addEventListener("keyup", function () {
  let text = this.value.toLowerCase();
  let filtered = allShops.filter(s =>
    s.name.toLowerCase().includes(text)
  );
  showShops(filtered);
});

loadMore();