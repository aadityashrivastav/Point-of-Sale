document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    const cart = document.getElementById("cart");
    const total = document.getElementById("total");
    const checkoutBtn = document.getElementById("checkout-btn");
  
    const products = [
      { name: "Product 1", price: 10 },
      { name: "Product 2", price: 20 },
      { name: "Product 3", price: 30 }
    ];
  
    products.forEach(product => {
      const li = document.createElement("li");
      li.textContent = `${product.name} - $${product.price}`;
      li.addEventListener("click", () => addToCart(product));
      productList.appendChild(li);
    });
  
    function addToCart(product) {
      const li = document.createElement("li");
      li.textContent = `${product.name} - $${product.price}`;
      cart.appendChild(li);
      updateTotal(product.price);
    }
  
    function updateTotal(price) {
      total.textContent = (+total.textContent + price).toFixed(2);
    }
  
    checkoutBtn.addEventListener("click", () => {
      alert(`Total: $${total.textContent}`);
    });
  });
  