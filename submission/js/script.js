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
    });

    li.appendChild(removeBtn);
    wishList.appendChild(li);

    wishInput.value = "";
});
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (name === "" || message === "") {
        formMsg.textContent = "Please fill in all fields.";
        formMsg.style.color = "red";
        return;
    }

    formMsg.textContent = "Message sent successfully!";
    formMsg.style.color = "green";

    contactForm.reset();
});