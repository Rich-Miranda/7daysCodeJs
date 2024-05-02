
const cont = 0;

let comp = Math.floor(Math.random() * 10)

for(let i =0 ; i < 2; i++){
    alert("Qual numero quer advinhar ? ")
    let jg = prompt();
    if (jg != comp) {
        alert("Tentativa " + (i+1))
        

    } else {
        alert("Acertou")
    
    }
    
}

alert("Numero sorteado foi " + comp)