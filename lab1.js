document.getElementById("clickButton").addEventListener("click", function () {
  alert("Button clicked!");
});

document
  .getElementById("dblclickButton")
  .addEventListener("dblclick", function () {
    alert("Thank you");
  });

document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.getElementById("myParagraph");

  paragraph.addEventListener("dblclick", function () {
    paragraph.textContent = "Thank you!";

    const button = document.createElement("button");
    button.textContent = "Go to Another Page";

    button.addEventListener("click", function () {
      window.location.href = "https://www.google.com";
    });

    document.body.appendChild(button);
  });
});

// Form validation
document
  .getElementById("sampleForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || age === "") {
      formMessage.textContent = "All fields are required!";
      formMessage.style.color = "red";
    } else if (parseInt(age) < 18 || parseInt(age) > 100) {
      formMessage.textContent = "Age must be between 18 and 100!";
      formMessage.style.color = "red";
    } else {
      formMessage.textContent = "Form submitted successfully!";
      formMessage.style.color = "green";
    }
  });
