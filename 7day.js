let totalA = 0;
let totalS = 0;
let totalM = 0;
let totalD = 0;
let num1 = 0;
let num2 = 0;




alert("Seja bem vindo a calculadora em js");
alert("Que calculos vamos fazer hoje? ");
menu()







function menu() {
    do {
        console.log("1- Adição");
        console.log("2- Subtração");
        console.log("3- Multiplicação");
        console.log("4- Divisão");
        console.log("5- Sair");
        let resp = prompt("R: ");

        switch (resp) {
            case "1":
                alert("foi selecionado operador de Adição: ");
                OperadorAd();
                break;
            case "2":
                alert("foi selecionado operador de Subtração: ");
                OperadorSub();
                break;
            case "3":
                alert("foi selecionado operador de Multiplicação: ");
                OperadorMult();
                break;
            case "4":
                alert("foi selecionado operador de Divisão: ");
                OperadorDiv();
                break;
            case "5":
                alert("foi selecionado operador de Sair: ");

                break;

            default:
                alert("Opção invalida!! \nescolher apenas as opções acima ")
                break
        }
    } while (perg != 'N')
    alert("Até breve")
}

function OperadorAd() {


    alert("Informe valor 1 : ")
    num1 = prompt()

    alert("Informe valor 2 : ")
    num2 = prompt()
    totalA = num1 + num2;
    return totalA
}

function OperadorSub() {

    alert("Informe valor 1 : ")
    num1 = prompt()

    alert("Informe valor 2 : ")
    num2 = prompt()
    totalS = num1 - num2;
    return totalS
}

function OperadorMult() {


    alert("Informe valor 1 : ")
    num1 = prompt()

    alert("Informe valor 2 : ")
    num2 = prompt()
    totalM = num1 * num2;
    return totalM
}

function OperadorDiv() {


    var duv
    alert("Informe valor 1 : ")
    num1 = prompt()

    alert("Informe valor 2 : ")
    num2 = prompt()
    totalD = num1 / num2;

    do {
        alert("Deseja ver se o valor final é par ou impar? (1- sim / 2- nao")

        if (duv == 1) {
            if (totalD % 2 == 0) {
                alert("O resto deu Par")
            } else {
                alert("O resto deu Impar")

            }
        }
    } while (duv != 2)


    return totalD


}