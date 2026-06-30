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