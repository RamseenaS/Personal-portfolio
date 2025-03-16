$(document).ready(function () {
    // Smooth Scroll
    $("header ul li a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800
            );
        }
    });

    // Project Clickable Box
    $(".project-box").on("click", function () {
        var link = $(this).attr("data-link");
        if (link) {
            window.open(link, "_blank");
        }
    });

    // Mobile Navigation Toggle
    $(".menu-toggle").on("click", function () {
        $(".nav-links").slideToggle();
    });
});
