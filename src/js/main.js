let toggleSidebar = document.querySelector(".header__toggle-sidebar");
let sidebar = document.querySelector(".header-navigation ");

toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("header-navigation_active");
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
