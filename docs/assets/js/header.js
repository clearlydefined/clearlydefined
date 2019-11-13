const Header = {
  init: function () {
    this.addListeners();
    this.checkCurrentPage();
  },
  addListeners: function () {
    document.querySelector(".navbar__c__header__toggler").addEventListener("click", e => {
      this.toggleNav();
    });
  },
  checkCurrentPage: function () {
    document.querySelectorAll(".navbar__c__links__ul__li__a").forEach(el => {
      if (el.getAttribute("href") == window.location.pathname) {
        el.querySelector(".navbar__c__links__ul__li__a__div").classList.add("navbar__c__links__ul__li__a__div--active");
        el.closest(".navbar__c__links__ul__li").classList.add("navbar__c__links__ul__li--active");
      }
    });
  },
  toggleNav: function () {
    if (!document.querySelector(".navbar__c__links__ul--toggle")) {
      var el = document.querySelector(".navbar__c__links__ul");
      var new_el = el.cloneNode(true);
      el.parentNode.replaceChild(new_el, el);
      document.querySelector(".navbar__c__links__ul").classList.remove("navbar__c__links__ul--untoggle");
      document.querySelector(".navbar__c__links__ul").classList.add("navbar__c__links__ul--toggle");

    }
    else {
      document.querySelector(".navbar__c__links__ul").classList.remove("navbar__c__links__ul--toggle");
      document.querySelector(".navbar__c__links__ul").classList.add("navbar__c__links__ul--untoggle");
    }
  }
}

Header.init();