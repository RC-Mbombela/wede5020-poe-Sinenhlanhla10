console.log("Website loaded");
function calculatePrice() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service");
    let date = document.getElementById("date").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (phone.length !== 10) {
        alert("Phone number must be 10 digits");
        return;
    }

    if (service.value === "") {
        alert("Please select a service");
        return;
    }

    let selectedPackage =
        service.options[service.selectedIndex].text;

    let price = service.value;

    document.getElementById("result").innerHTML =
        "<h3>Enquiry Summary</h3>" +
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Package:</strong> " + selectedPackage + "</p>" +
        "<p><strong>Date Requested:</strong> " + date + "</p>" +
        "<p><strong>Estimated Cost:</strong> R" + price + "</p>" +
        "<p>Thank you. We will contact you shortly regarding availability.</p>";
}

function searchServices() {

    let input =
        document.getElementById("searchBar")
        .value
        .toLowerCase();

    let services =
        document.querySelectorAll(".service-card");

    services.forEach(service => {
        let text =
            service.innerText.toLowerCase();
        if (text.includes(input)) {
            service.style.display = "block";
        } else {
            service.style.display = "none";
        }
    });
}