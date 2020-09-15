(function(b) {
    var g, d = b(window),
        h = b("body");
    b(function() {
        b("[data-bg-img]").each(function() {
            var a = b(this);
            a.css("background-image", "url(" + a.data("bg-img") + ")").removeAttr("data-bg-img").addClass("bg--img")
        });
        b("[data-parallax-bg-img]").each(function() {
            var a = b(this);
            a.parallax({
                imageSrc: a.data("parallax-bg-img")
            }).addClass("bg--img")
        });
        var a = b(".AnimateScrollLink"),
            c = b(".AnimateScroll"),
            e = function() {
                var a = b(this).attr("href");
                b(a).animatescroll({
                    padding: 65,
                    easing: "easeInOutExpo",
                    scrollSpeed: 2E3
                });
                return !1
            };
        a.on("click", e);
        c.on("click", "a", e);
        a = b(".CounterUp");
        "function" === typeof b.fn.counterUp && a.counterUp({
            delay: 10,
            time: 1E3
        });
        var l = b("#headerNav");
        l.find(".nav").on("click", "a", function() {
            l.collapse("hide")
        });
    });
    d.on("load scroll", function() {
        g = d.scrollTop()
    }).on("load scroll", function() {
        1 < g ? h.addClass("scrolled") : h.removeClass("scrolled")
    }).on("load", k).on("resize", function() {
        setTimeout(function() {
            k()
        }, 800)
    }).on("load resize", function() {
        b(".about--progress-items").find(".progress-bar").each(function() {
            var a = b(this);
            a.css("width", 0);
            a.waypoint(function() {
                a.css("width", a.data("progress") + "%")
            }, {
                triggerOnce: !0,
                offset: "bottom-in-view"
            })
        })
    })
})(jQuery);