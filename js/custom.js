  /* Add here all your JS customizations */
  $('.loginForm').on('submit', function (e) {
    e.preventDefault();
    console.log("in Ajax Function");
    var data = JSON.stringify({
      "email": $('#email').val(),
      "password": $('#password').val()
    });
    $.ajax({
      type: "POST",
      url: "http://tachetechnologies.com/webcreo/api/v1/login",
      data: data,
      success: function (res) {
        if (res.status == 'failed') {
          $('#msg').html(res.msg).css("display", "block");
          console.log(res);
        } else {
          if(res.result.role == 1) {
            console.log(res);
            window.location.href = "/admin_dashboard/index.html";
          }else if(res.result.role == 3) {
            console.log(res);
            window.location.href = "/emp_dashboard/index.html";
          }else {
            console.log(res);
            window.location.href = "/manager_dashboard/index.html";
          }
        }
      },
      error: function (err) {
        var errStatus = JSON.stringify(err);
        console.log(errStatus);
      }
    });
    return false;
  });
