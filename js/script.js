/*----------LOGIN PP--------*/

var reg = document.querySelector(".entrance");
var overlay = document.querySelector(".overlay");
var loginPP = document.querySelector(".popup-login-mod");

if(loginPP) {
    var close_loginPP = loginPP.querySelector(".close-popup");

    var form = loginPP.querySelector("form");
    var login = loginPP.querySelector("[name=login]");
    var password = loginPP.querySelector("[name=password]");
    var remember = loginPP.querySelector("[id=remember]");
    var storage = localStorage.getItem("login");

if(reg) {
reg.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("overlay-show");
    loginPP.classList.add("show-popup");
    loginPP.classList.add("popup-anime");
    if (storage) {
        login.value = storage;
        password.focus();
    }
    else {
        login.focus();
    }

});

form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
       event.preventDefault();
       loginPP.classList.add("error");
       setTimeout(function() {
           loginPP.classList.remove("error");
           loginPP.classList.remove("popup-anime");
           }, 500);
       }
       else {
        if (remember.checked) {
            localStorage.setItem("login", login.value);
       }
       }
   });


close_loginPP.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.remove("overlay-show");
    loginPP.classList.remove("show-popup");
    loginPP.classList.remove("popup-anime");
    loginPP.classList.remove("error");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (loginPP.classList.contains("show-popup")) {
            overlay.classList.remove("overlay-show");
            loginPP.classList.remove("show-popup");
            loginPP.classList.remove("error");
            }
        }
});
}
}

/*--------FEEDBACK PP--------*/

var feedback = document.querySelector(".feedback-btn");
var feedbackPP = document.querySelector(".popup-feedback-mod");

if(feedbackPP) {
var close_feedbackPP = feedbackPP.querySelector(".close-popup");
var form_feedback = feedbackPP.querySelector("form");
var login_feedback = feedbackPP.querySelector("[name=login]");
var password_feedback = feedbackPP.querySelector("[name=email]");
var text_feedback = feedbackPP.querySelector("[name=text]");


if(feedback) {
feedback.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("overlay-show");
    feedbackPP.classList.add("show-popup");
    feedbackPP.classList.add("popup-anime");
});

form_feedback.addEventListener("submit", function(event) {
    if (!login_feedback.value || !password_feedback.value || !text_feedback.value) {
        event.preventDefault();
        feedbackPP.classList.add("error");
        setTimeout(function() {
        feedbackPP.classList.remove("error");
        feedbackPP.classList.remove("popup-anime");
        }, 500);
    }
});

close_feedbackPP.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.remove("overlay-show");
    feedbackPP.classList.remove("show-popup");
    feedbackPP.classList.remove("popup-anime");
    feedbackPP.classList.remove("error");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (feedbackPP.classList.contains("show-popup")) {
            overlay.classList.remove("overlay-show");
            feedbackPP.classList.remove("show-popup");
            feedbackPP.classList.remove("popup-anime");
            feedbackPP.classList.remove("error");
            }
        }
});
}
}
/*---------MAP PP---------*/
var map = document.querySelector(".map-mini");
var mapPP = document.querySelector(".popup-map");

if(mapPP) {
var close_mapPP = mapPP.querySelector(".close-popup");

map.addEventListener("click", function(event) {
    event.preventDefault();
    mapPP.classList.add("show-popup");
    overlay.classList.add("overlay-show");
});

close_mapPP.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.remove("overlay-show");
    mapPP.classList.remove("show-popup");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (mapPP.classList.contains("show-popup")) {
            overlay.classList.remove("overlay-show");
            mapPP.classList.remove("show-popup");
            }
        }
});
}
/*---------ORDER PP--------*/

var order = document.querySelectorAll(".btn-buy"), i;
var orderPP = document.querySelector(".order-popup-mod");

if(orderPP) {
var close_orderPP = orderPP.querySelector(".close-popup");

for (i = 0; i < order.length; ++i) {
    order[i].addEventListener("click", function(event) {
    event.preventDefault();
    orderPP.classList.add("show-popup");
    overlay.classList.add("overlay-show");
    orderPP.classList.add("popup-anime");
})
};

close_orderPP.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.remove("overlay-show");
    orderPP.classList.remove("show-popup");
    orderPP.classList.remove("popup-anime");
});
}