/* Add here all your JS customizations */

$("[role=menuitem]").click(function(e){
    console.log('dnkdn')
    e.preventDefault();
    localStorage.clear();
    var base_url = window.location.pathname.split('/')[0] + "/login.html"
    window.location.href = base_url;
 })  