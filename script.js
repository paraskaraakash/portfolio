// Dark Mode Toggle
const toggleButton = document.getElementById("toggleMode");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = toggleButton.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".animated-text");
    const textArray = ["Hello! I'm Akash", "Welcome to My Portfolio", "Let's Build Something Amazing!"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % textArray.length;
        textElement.textContent = textArray[index];
    }, 4000); // 
});
