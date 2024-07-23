let test = [10];
let i
let adicionItem;
let categoria;
let frutas, latici, cong, doce, carBranc;

alert("Seja bem-vindo ao mercado");


    for( i = 0 ; i < 10; i++){
    alert("Monte sua lista com 10 itens principais");
    test[i] = prompt()
    }

    

    do {
        alert("Deseja adicionar mais um item? (1- sim ou 2- nao)")
        resp = prompt()

        alert("Qual item ? ")
        adicionItem = prompt()

        alert("Qual categoria ela pertence? ")
        console.log("1- Frutas")
        console.log("2- Laticinios")
        console.log("3- Congelados")
        console.log("4- Doces")
        console.log("5- Carne branca")
        categoria = prompt()

        switch (categoria) {
            case 1:
                Fruta()
                alert("Você o adicionou o item : " + adicionItem + " Em frutas")
               
                break;

            case 2:
                alert("Você o adicionou o item : " + adicionItem + " Em Laticinios")
                Laticinios()
                break;

            case 3:
                alert("Você o adicionou o item : " + adicionItem + " Em Congelados")
                Congelados ()
                break;

            case 4:
                alert("Você o adicionou o item : " + adicionItem + " Em Doces")
                Doces ()
                break;

            case 5:
                alert("Você o adicionou o item: " + adicionItem + " Carne branca")
                Carne_Branca()
                break;

            default:
                alert("Não pertence nenhuma categoria")
                break;
        }



    } while (resp != 2)



console.log("Lista de compras: " + test[i] + " , ");
console.log("Frutas :" + frutas);
console.log("Laticinios :"+ latici);
console.log("Congelados :" + cong);
console.log("Doces :" + doce);
console.log("Carne branca :"+ carBranc);



function Fruta (){
   
}


function Laticinios(){}
function Congelados (){}
function Doces (){}
function Carne_Branca(){}