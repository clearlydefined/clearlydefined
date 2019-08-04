const Header = {
  init: function () {
    this.checkCurrentPage()
  },
  addListeners: function () {
    document.querySelector(".navbar__c__links__ul__li").addEventListener("click", e => {
      console.log("here");
      document.querySelector(".navbar__c__links__ul__li").classList.add("navbar__c__links__ul__li--active");
    })
  },
  clickItem: function (e) {

  },
  checkCurrentPage: function () {
    console.log("here");
    document.querySelectorAll(".navbar__c__links__ul__li__a").forEach(el => {
      console.log("here2", el);
      if (el.getAttribute("href") == window.location.pathname) {
        el.querySelector(".navbar__c__links__ul__li__a__div").classList.add("navbar__c__links__ul__li__a__div--active");
      }
    })
  }
}

Header.init();