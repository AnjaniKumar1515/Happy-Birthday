document.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    document.querySelectorAll(".parallax").forEach(function(img) {
        let speed = 0.5;
        let position = scrollTop * speed;
        img.style.transform = `translateY(-${position}px)`;
    });
});
