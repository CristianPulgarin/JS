const boton = document.getElementById('boton');



const a=document.getElementById('a');
const b=document.getElementById('b');
const resultado=document.getElementById('resultado');

boton.addEventListener('click',clickear)

function clickear(){

    
        if(a.value > b.value){
            resultado.innerText="El mayor es a";
        }
        else if(b.value>a.value){
            resultado.innerText="El mayor es b";
        }
        else{
        resultado.innerText="Son numeros iguales";
        }
        

}


const pass = prompt("Ingrese la contraseña");


while(pass!="hola"){
    pass=prompt("Ingrese de nuevo la contraseña")
    }




const input=document.getElementById('campo');
const texto= document.getElementById('resultado');

input.addEventListener('keyup', () => {
    texto.innerText=input.value;
})


texto.addEventListener('copy',() => {
    alert("Copiaste el texto")
})