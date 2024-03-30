
let form= document.querySelector("form")
console.log(document)
console.log()

function soumission (e){
    e.preventDefault()
    let name=document.getElementById("name");
    let error=document.getElementById("errorbox")
    console.log(error)
    console.log(name.value.length)
    error.innerText=""
    if(name.value.length<5){
        error.innerText="veuillez entrez un nom valide"

        return
    }
    
    let number=document.getElementById("numero")
    let error1=document.getElementById(" errorbox1")
    for( let i=0;i <number.length;i=i+1){
        let a=Number.parseInt(number[i])
    
    if(a==NaN){
        error1.innerText="veuillez entrez un numero valide"
        return; 
    }
    if(number.value.length!=8) {
        error1.innerText="veuillez entrez un numero valide"
        return
    }
     }

 }
form.addEventListener("submit",soumission )

