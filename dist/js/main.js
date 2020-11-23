let toggleSidebar = document.querySelector(".header__toggle-sidebar");
let sidebar = document.querySelector(".header-navigation ");
let body = document.querySelector("body");

toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("header-navigation_active");
    body.classList.toggle("lock-scroll");
});

//аккордеон
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;

        var dropdownlink = this.el.find(".dropdownlink");
        dropdownlink.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            //this is the ul.submenuItems
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass("open");

        if (!e.data.multiple) {
            //show only one menu at the same time
            $el.find(".submenuItems").not($next).slideUp().parent().removeClass("open");
        }
    };

    var accordion = new Accordion($(".accordion-menu"), false);
});

//Функция для поддержки webp в css -------------------------------------------------------
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector("body").classList.add("webp");
    } else {
        document.querySelector("body").classList.add("no-webp");
    }
});
//Функция для поддержки webp в css -------------------------------------------------------
