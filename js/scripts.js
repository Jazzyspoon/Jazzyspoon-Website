// Modern scroll behavior
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll to top on page load
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Consolidated video modal handler
$(function () {
    $(".video, .video2, .video3, .video4").click(function () {
        let theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC;
        $(theModal + " iframe").attr("src", videoSRCauto);
    });

    // Handle all video modals with a single event handler
    $(".modal").on("hidden.bs.modal", function (e) {
        $(this).find("iframe").attr("src", "");
    });
});

// Email link activation
$(document).ready(function () {
    $("#mailbutton").click(function (event) {
        window.location = "mailto:jazzyspoon@gmail.com";
    });
});

// Navbar collapse on mobile
$(".navbar-nav>li").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just '#' or empty
        if (href === '#' || href.length <= 1) {
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for iframes
document.addEventListener('DOMContentLoaded', function() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        iframe.style.opacity = '0';
        iframe.style.transition = 'opacity 0.3s ease';
    });
});