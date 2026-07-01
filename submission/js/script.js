
const services = [
    { name: "Nails" },
    { name: "Eyelashes" },
    { name: "Hair Styling" },
    { name: "Massage" },
    { name: "Waxing" },
    { name: "Pedicure & Manicure" }
];
const serviceList = document.getElementById("serviceList");

services.forEach(function(service) {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = service.name;

    serviceList.appendChild(card);
});
const wishInput = document.getElementById("wishInput");
const addButton = document.getElementById("addButton");
const wishList = document.getElementById("wishList");

const savedWishlist = localStorage.getItem("wishlist");

if (savedWishlist) {
    wishList.innerHTML = savedWishlist;
}

addButton.addEventListener("click", function () {
    const value = wishInput.value;

    if (value === "") {
        alert("Please enter a service");
        return;
    }

    const li = document.createElement("li");
    li.textContent = value;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.style.marginLeft = "10px";
    removeBtn.className = "btn";
    removeBtn.addEventListener("click", function () {
        li.remove();
        localStorage.setItem("wishlist", wishList.innerHTML);
    });

    li.appendChild(removeBtn);
    wishList.appendChild(li);
    localStorage.setItem("wishlist", wishList.innerHTML);

    wishInput.value = "";
});
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const message = document.getElementById("message").value;

    if (name === "" || contact === "" || message === "") {
        formMsg.textContent = "Please fill in all fields.";
        formMsg.style.color = "red";
        return;
    }

    formMsg.textContent = "Message sent successfully!";
    formMsg.style.color = "green";

    contactForm.reset();
});
const serviceFilter = document.getElementById("serviceFilter");
const serviceCards = document.querySelectorAll("#serviceList .card");

serviceFilter.addEventListener("keyup", function () {
    const value = serviceFilter.value.toLowerCase();

    const cards = document.querySelectorAll("#serviceList .card");

    cards.forEach(function (card) {
        const text = card.textContent.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});
const hero = document.querySelector(".hero");
const bannerCaption = document.getElementById("bannerCaption");

hero.addEventListener("click", function () {
    bannerCaption.classList.toggle("show-caption");
});