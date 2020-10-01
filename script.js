$(document).ready(function () {
  var navHiddenForm = $('.navbar-hidden-form');
  //on click login button, open form modal
  $('#login').click(function () {
    navHiddenForm.addClass('visible');
  });

  $(document).click(function (event) {
    //if you click on anything except the form modal itself or the login button, close the form modal
    if (!$(event.target).closest('.navbar-hidden-form, #login').length) {
      $("body").find('.navbar-hidden-form').removeClass('visible');
    }
  });

  // click each navbar link to make it active
  $(".nav-link").each(function () {
    $(this).on("click", function () {
      $('.nav-item').removeClass('active')
      $(this).parent().addClass('active')
    });
  });

})
