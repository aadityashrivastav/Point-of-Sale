document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    const cart = document.getElementById("cart");
    const total = document.getElementById("total");
    const checkoutBtn = document.getElementById("checkout-btn");
    const addProductBtn = document.getElementById("addProductBtn");
  
    // Function to add product to cart
    function addToCart(product) {
      const li = document.createElement("li");
      li.textContent = `${product.name} - $${product.price.toFixed(2)} x ${product.quantity}`;
      cart.appendChild(li);
      updateTotal(product.price * product.quantity);
    }
  
    // Function to update total
    function updateTotal(price) {
      total.textContent = (+total.textContent + price).toFixed(2);
    }
  
    // Add product button click event
    addProductBtn.addEventListener("click", () => {
      const productNameInput = document.getElementById("productName");
      const productPriceInput = document.getElementById("productPrice");
      const productQuantityInput = document.getElementById("productQuantity");
  
      const productName = productNameInput.value;
      const productPrice = parseFloat(productPriceInput.value);
      const productQuantity = parseInt(productQuantityInput.value);
  
      if (productName && !isNaN(productPrice) && !isNaN(productQuantity) && productPrice > 0 && productQuantity > 0) {
        const product = {
          name: productName,
          price: productPrice,
          quantity: productQuantity
        };
        addToCart(product);
        productNameInput.value = '';
        productPriceInput.value = '';
        productQuantityInput.value = '';
      } else {
        alert("Please enter valid product details.");
      }
    });
  
    checkoutBtn.addEventListener("click", () => {
      alert(`Total: $${total.textContent}`);
    });
  });
  