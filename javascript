Here's the complete JavaScript code:


// Product data
const products = [
    { id: 1, name: "Product 1", price: 10.99, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 9.99, image: "product2.jpg" },
    { id: 3, name: "Product 3", price: 12.99, image: "product3.jpg" },
];

// Cart data
let cart = [];

// User data
let users = [
    { username: "admin", password: "password", email: "admin@example.com" },
];

// Current user
let currentUser = null;

// Function to generate product list
function generateProductList() {
    const productList = document.getElementById("products");
    productList.innerHTML = "";
    products.forEach((product) => {
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productList.insertAdjacentHTML("beforeend", productHTML);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find((product) => product.id === parseInt(productId));
    cart.push(product);
    updateCartList();
}

// Function to update cart list
function updateCartList() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    cart.forEach((product) => {
        const cartItemHTML = `
            <li>
                <span>${product.name}</span>
                <span>$${product.price}</span>
            </li>
        `;
        cartList.insertAdjacentHTML("beforeend", cartItemHTML);
    });
}

// Function to handle login
function handleLogin(username, password) {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
        currentUser = user;
        alert("Login successful!");
        document.getElementById("login").style.display = "none";
    } else {
        alert("Invalid username or password");
    }
}

// Function to handle registration
function handleRegistration(username, email, password) {
    const existingUser = users.find((user) => user.username === username || user.email === email);
    if (existingUser) {
        alert("Username or email already exists");
    } else {
        users.push({ username, email, password });
        alert("Registration successful!");
        document.getElementById("register").style.display = "none";
    }
}

// Event listeners
document.addEventListener("DOMContentLoaded", generateProductList);
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
        const productId = event.target.dataset.id;
        addToCart(productId);
    }
});
document.getElementById("cart-button").addEventListener("click", () => {
    const cartSection = document.getElementById("cart");
    cartSection.style.display = cartSection.style.display === "block" ? "none" : "block";
});
document.getElementById("checkout-button").addEventListener("click", () => {
    alert("Checkout successful!");
    cart = [];
    updateCartList();
});
document.getElementById("login-button").addEventListener("click", () => {
    document.getElementById("login").style.display = "block";
});
document.getElementById("register-button").addEventListener("click", () => {
    document.getElementById("register").style.display = "block";
});
document.getElementById("login-submit").addEventListener("click", (event) => {
    event.preventDefault();
    const username = document.getElementById("login").querySelector("input[name='username']").value;
    const password = document.getElementById("login").querySelector("input[name='password']").value;
    handleLogin(username, password);
});
document.getElementById("register-submit").addEventListener("click", (event) => {
    event.preventDefault();
    const username = document.getElementById("register").querySelector("input[name='username']").value;
    const email = document.getElementById("register").querySelector("input[name='email']").value;
    const password = document.getElementById("register").querySelector("input[name='password']").value;
    handleRegistration(username, email, password);
});


This code adds functionality for user registration, login, and cart management. It also displays the cart and allows users to add products to it. Note that this is a basic
