userRole = {
  init: function() {
    this.initVariables();
    this.initEvents();
  },

  initVariables: function() {},

  initEvents: function() {
    $(".admin-control").on("click", () => {
      window.location.href = "html/dashboard.html";
      sessionStorage.setItem('userRole', 'admin');
    });

    $(".user-control").on("click", () => {
      window.location.href = "html/dashboard.html";
      sessionStorage.setItem('userRole', 'user');
    });
  }
};

$(document).ready(function() {
  userRole.init();
});
