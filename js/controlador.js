import firebase from "firebase/app";
import "firebase/auth";

function registro(){
    var email = "uncorreo@demo.com";
    var password = "123456";
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
        console.log("Registro Exitoso");
    }).catch((error)=>{
        console.log("Registro fallido");
    });
}


function registrar(){
    var name = document.getElementById('inName').value;
    var lastname =document.getElementById('inLastName').value;
    var age = document.getElementById('inAge').value;
    var email = document.getElementById('inEmail').value;

    document.getElementById('message').innerHTML = "Bienvenido " + name + " " + lastname + " tu edad es" + age + ", y tu correo es " + email;
}

