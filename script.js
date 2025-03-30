// Mengambil elemen-elemen dari DOM
const cartItemsList = document.getElementById('cart-items');
const totalPriceElem = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout');
let cart = [];

// Fungsi untuk menambahkan item ke keranjang
function addToCart(itemName, itemPrice) {
  const cartItem = { name: itemName, price: itemPrice };
  cart.push(cartItem);
  updateCart();
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
  cartItemsList.innerHTML = ''; // Clear sebelumnya
  let totalPrice = 0;

  // Menambahkan item keranjang ke list
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Rp ${item.price}`;
    cartItemsList.appendChild(li);
    totalPrice += item.price;
  });

  // Update total harga
  totalPriceElem.textContent = totalPrice;
}

// Menambahkan event listener ke setiap tombol 'Tambahkan ke Keranjang'
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const itemName = this.getAttribute('data-item');
    const itemPrice = parseInt(this.getAttribute('data-price'));
    addToCart(itemName, itemPrice);
  });
});

// Menangani aksi checkout
checkoutButton.addEventListener('click', () => {
  if (cart.length > 0) {
    alert('Terima kasih telah memesan di T-Shirt Store kami!'); 
    cart = []; // Reset keranjang
    updateCart();
  } else {
    alert('Keranjang Anda kosong!');
  }
});
