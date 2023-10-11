window.onload = () => {
    var btn = document.getElementById("btnLogin");
    let txtEmail = document.getElementById('txtEmail');
    let txtPassword = document.querySelector("#txtPassword");
    let divAlert = document.querySelector("#alert");
    let divAlertSuccess = document.querySelector("#alertSuccess");
    btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (txtEmail.value == "" || txtPassword.value == "") {
            divAlert.innerHTML = 'Error: <br> <small>Favor de llenar los campos</small>';
            divAlert.style.display = "block";
        } else {
            if (txtPassword.value.length < 5) {
                divAlert.innerHTML = 'Error: <br> <small>La contraseña debe de tener mas de 5 letras</small>';
                divAlert.style.display = "block";
            }
            divAlertSuccess.style.display = "block";
        }
    });
    txtEmail.addEventListener('focus', (evt)=>{
        divAlert.style.display = 'none';
        divAlertSuccess.style.display = "none";
    });
    txtPassword.addEventListener('focus', (evt)=>{
        divAlert.style.display = 'none';
        divAlertSuccess.style.display = "none";
    });
}