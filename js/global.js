// =============================
// Global JS – Navbar / Hamburger
// =============================

// Toggle mobile navigation menu
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    if (nav) {
        nav.classList.toggle("open");
    }
}

// =============================
// Highlight Active Page in Navbar
// =============================

document.addEventListener("DOMContentLoaded", () => {
    // Get the current page file name (e.g., "index.html", "about.html")
    let currentPage = window.location.pathname.split("/").pop();

    // If served from root like "http://site.com/", treat as index.html
    if (currentPage === "") {
        currentPage = "index.html";
    }

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});
