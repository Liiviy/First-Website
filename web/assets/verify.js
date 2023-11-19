function verifyId(){
    let password = document.forms["cadastro"]["passworduser"].value;
    let cpfVerify = document.forms["cadastro"]["cpf"].value;
    let name = document.forms["cadastro"]["nome"].value;
    let cellphone = document.forms["cadastro"]["telefone"].value
    let information = document.forms["cadastro"]["telefone"]["nome"]["cpf"]["passworduser"].value;

        if(information = ""){
            window.alert("Verify your informations") ; 
            return false;
        }
        if (password == "" ||password == "+" || password == "-" || password == "." || password == "," || password == "(" || password == ")" || password == "{" || password == "}" || password == "¨" || password == "´") {
            window.alert("Please verify your password.\nThe password could not contain any of these characthers.\n, . ( ) + - : ; ~ ´ ^ [ ] { } ¨ ") ;
            return false;
        }
        if (cpfVerify == ""){
            window.alert("Verify your ID") ; 
            return false;
        }
        if (name == ""){
            window.alert("Verify Your name") ; 
            return false;
        }
        if (cellphone == ""){
            window.alert("Verify your number") ; 
            return false;
        }
    }