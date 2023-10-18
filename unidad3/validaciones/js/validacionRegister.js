window.onload = () => {
    var alert = document.querySelector("#alert");
    var alertSuccess = document.querySelector("#alertSuccess");
    var btn = document.querySelector("#btn");
    var txName = document.querySelector("#txName")
    var txTel = document.querySelector("#txTel")
    var txAge = document.querySelector("#txAge")
    var txPass = document.querySelector("#txPass")
    var txPassConf = document.querySelector("#txPassConf")

    
    btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        if ((txName.value == "")||(txTel.value == "")||(txAge.value == "")||(txPass.value == "")||(txPassConf.value == "")){
            alert.innerHTML = 'Error: <br> <small>Favor de llenar los campos</small>';
            alert.style.display = "block";
        }
        else {
            if (txPass.value == txPassConf.value){
                alertSuccess.innerHTML = 'Error: <br> <small>La contraseña debe de tener mas de 5 letras</small>';
                alertSuccess.style.display = "block";
            }else
            {
                alert.innerHTML = 'Error: <br> <small>Las contraseñas no coiciden</small>';
                alert.style.display = "block";
            }
        }
    })
}