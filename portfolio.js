
$(document).ready(function () {
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
});



$(".project-box").on("click", function () {
    var link = $(this).attr("data-link");
    if (link) {
        window.open(link, "_blank");
    }
});



$(".project-box").hover(
    function () {
        $(this).css("transform", "scale(1.05)");
    },
    function () {
        $(this).css("transform", "scale(1)");
    }
);
