userRole = {
  init: function() {
    this.initVariables();
    this.initEvents();
  },

  initVariables: function() {},

  initEvents: function() {
    $(".admin-control").on("click", () => {
      window.location.href = "html/dashboard.html";
      this.setCookie("userRole", "admin");
      sessionStorage.setItem('userRole', 'admin');
    });

    $(".user-control").on("click", () => {
      window.location.href = "html/dashboard.html";
      this.setCookie("userRole", "user");
      sessionStorage.setItem('userRole', 'user');
    });
  },

  setCookie: function(key, value) {
    let expires = new Date();
    expires.setTime(expires.getTime() + 1 * 24 * 60 * 60 * 1000);
    document.cookie = key + "=" + value + "; expires=" + expires.toGMTString() + "; path=/";
  }
};

$(document).ready(function() {
  userRole.init();
});
