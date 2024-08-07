$(document).ready(function () {
    var jwt = sessionStorage.getItem('JWT');
    if (jwt) {

        $('#nastavniplan').show();
        $('#Logout').show();
        $('#Prijavise').hide();

   

    }
});
window.onload = function() {
const username = sessionStorage.getItem("username");
if (username) {
document.getElementById('Username').style.display = 'block';
document.getElementById('Username').firstChild.innerHTML = username;
}
};
$(document).ready(function () {
    $('#Logout').click(function () {

        sessionStorage.removeItem('username');

        sessionStorage.removeItem('JWT');
        location.reload();

    });
});


