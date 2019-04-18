  /* Add here all your JS customizations */
  $('.loginForm').on('submit', function (e) {
    e.preventDefault();
    console.log("in Ajaxx Function");
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
            localStorage.setItem('email',res.result.email );
            localStorage.setItem('role',res.result.role );
            console.log(res);
           window.location.href = "/admin_dashboard/index.html";
          }else if(res.result.role == 3) {
            localStorage.setItem('email',res.result.email );
            localStorage.setItem('role',res.result.role );

            console.log(res);
            window.location.href = "/emp_dashboard/index.html";
          }else {
            localStorage.setItem('email',res.result.email );
            localStorage.setItem('role',res.result.role );
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

$('.logoutbtn').onClick(function(e){
   e.preventDefault();
   localStorage.clear();
})  
