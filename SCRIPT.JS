// Download Resume Button
function downloadCV() {
    alert("Resume download will start soon!");

    // Replace "resume.pdf" with your actual resume file
    window.open("Fullstack Data Science with Generative AI Syllabus(The iScale) (1).pdf");
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

// Page Load Animation
window.addEventListener("load", () => {
    document.querySelector(".container").style.opacity = "1";
    document.querySelector(".container").style.transform = "translateY(0)";
});