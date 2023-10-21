/* add event listeners here */
(function ($) {
    "use strict";

    $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass("start-style").addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass("start-style");
            }
        });
    });

    //Animation

    $(document).ready(function () {
        $("body.hero-anime").removeClass("hero-anime");
    });

    //Menu On Hover

    $("body").on("mouseenter mouseleave", ".nav-item", function (e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest(".nav-item");
            _d.addClass("show");
            setTimeout(function () {
                _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
            }, 1);
        }
    });

    //Switch light/dark

    $("#switch").on("click", function () {
        if ($("body").hasClass("dark")) {
            $("body").removeClass("dark");
            $("#switch").removeClass("switched");
        } else {
            $("body").addClass("dark");
            $("#switch").addClass("switched");
        }
    });
})(jQuery);

//   form data sending to discord using webhooks

$("#contact-form").submit(function (e) {
    e.preventDefault();
    var data = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val(),
    };
    // console.log(data);
    var msg = `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;
    console.log(msg);
    var discordUrl =
        "https://discord.com/api/webhooks/1164479973877354508/Q-wGZb34MkGodGbMsZaRIEgYK8BsJBotMhHVplF8n7z9I_4RxqAMB7Hk9aYUHD8pzuLF";

    $.ajax({
        type: "POST",
        url: discordUrl,
        data: JSON.stringify({ content: msg }),
        contentType: "application/json",
        success: function () {
            alert("Message Sent");
            $("#contact-form")[0].reset();
        },
        error: function () {
            alert("Message Failed");
        },
    });
});
