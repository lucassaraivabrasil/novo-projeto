function login()
{
    const login = "lucas"
    const password = "131211"

    let login_informado  = document.getElementById("username").value;
    let password_informado = document.getElementById("password").value;

    if(login_informado == login && password_informado == password){

        let continuar_logado = document.getElementById("remember-me");
        
        if(continuar_logado){
            document.cookie = "logado=1";
        }

        window.location.href = "index.html";
    } else {
        alert("deu errado")
    }
}

function register()
{
    let username = document.getElementById("username").value;   
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeat_password = document.getElementById("repeat-password").value;

   if(password != repeat_password){
        alert("SENHAS DIFERENTES")
   }
}