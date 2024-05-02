let opc;

do {
    console.log("1- Desenvolvedor Back-end? ");
    console.log("2- Desenvolvedor Front-end? ");
    console.log("3- Desenvolvedor FullStack? ");
    console.log("4- Sair");
    opc = prompt("R: ")
    switch (opc) {
        case "1":
            alert("Selecionou Desenvolvedor Back-end");
            BackEnd()
            break;

        case "2":
            alert("Selecionou Desenvolvedor Front-end");
            FrontEnd()
            break;

        case "3":
            alert("Selecionou Desenvolvedor FullStack");
            FullStack()
            break;

        case "4":
            alert("Selecionou Sair");

            break;
        default:
            alert("Apenas umas da opções acima");
            break;

    }
} while (opc != 4)
alert("Obrigado por participar ");

function BackEnd() {
    console.log("Que se especializar em qual area do Back-end");
    console.log("1- C/C#");
    console.log("2-JAVA");
    console.log("3-Python");
    let teclBack = prompt("R: ");

    if (teclBack == "1") {
        alert("Vai se especializar em C/C#");
        alert("Uma pequena historia de C/C#");
        alert("A protagonista da história surge no início dos anos 1970. Criada por Dennis Ritchie nos Bell Labs, a linguagem C tinha como objetivo o desenvolvimento de sistemas operacional Unix. Seu poder e eficiência conquistaram espaço em diversas áreas ");
    } else if (teclBack == "2") {
        alert("Vai se especializar em JAVA");
        alert("Uma pequena historia de JAVA");
        alert("Java é uma linguagem de programação consolidada, mas sua jornada começou de forma inusitada. Vamos viajar no tempo para descobrir suas origens: Início dos anos 1990: Na Sun Microsystems, James Gosling liderou a criação do Java, inicialmente pensado para dispositivos eletrônicos de consumo, como televisões e set-top boxes."
            + "Foco inesperado: A indústria de TV a cabo da época não estava preparada para a tecnologia avançada do Java.1995: A Web entra em cena: Com a ascensão da World Wide Web, o Java encontrou um novo lar perfeito. Sua capacidade de interatividade e multimedia brilhou nesse cenário"
            + " Diferencial revolucionário: Ao contrário de outras linguagens, o Java permitia que programas rodassem em diferentes sistemas operacionais graças à Máquina Virtual Java (JVM). Popularidade crescente: A facilidade de uso, segurança e portabilidade fizeram do Java um sucesso, tornando-se indispensável para o desenvolvimento web e expandindo para outras áreas.");

    } else {
        alert("Vai se especializar em PYTHON");
        alert("Uma pequena historia de python");
        alert("Python: Uma Linguagem de Programação Versátil e Poderosa O Python se destaca como uma linguagem de programação de alto nível," +
            "interpretada e de propósito geral. Sua simplicidade a torna amigável para iniciantes, enquanto sua versatilidade a torna adequada para diversos projetos,"
            + " desde o desenvolvimento web até a análise de dados e machine learning.");
    }
}

function FrontEnd() {
    console.log("Que se especializar em qual area do Front-end");
    console.log("1- React ");
    console.log("2- Vue");
    console.log("3- Angular");
    let teclFront = prompt("R: ");
    if (teclFront == "1") {
        alert("Vai se especializar em React");
        alert("Uma pequena historia de React");
        alert("React é uma biblioteca JavaScript criada pelo Facebook em 2013 para a construção de interfaces web interativas.o React surgiu como uma necessidade interna do Facebook para gerenciar as interfaces dinâmicas de sua plataforma.O Facebook percebeu o potencial do React e o disponibilizou como código aberto, tornando-o acessível a toda a comunidade de desenvolvimento web. ");
    } else if (teclFront == "2") {
        alert("Vai se especializar em Vue");
        alert("Uma pequena historia de Vue");
        alert("Vue.js (ou simplesmente Vue) é um framework JavaScript para desenvolvimento de interfaces web.  Ex-funcionário da Google, Evan You idealizou o Vue em 2014, buscando uma biblioteca leve e flexível para desenvolvimento de interfaces. O Vue pegou emprestado conceitos do AngularJS, outro framework popular na época, mas com foco em simplicidade e facilidade de aprendizado.A comunidade rapidamente abraçou o Vue.js pela curva de aprendizado suave, código limpo e capacidade de integração com projetos existentes.");

    } else {
        alert("Vai se especializar em Angular");
        alert("Uma pequena historia de Angular");
        alert("Angular é um framework JavaScript de código aberto popular para o desenvolvimento de aplicações web dinâmicas e de SPA (Single Page Application).Criado pela Google, o AngularJS revolucionou a forma de se construir interfaces web interativas.Com o crescimento da complexidade das aplicações web, o AngularJS começou a apresentar limitações.Uma reescrita completa do framework, projetado para ser mais performático, modular e escalável.");
    }
}

function FullStack() {
    let teclFull;
   
    console.log("Que se especializar em qual area do FullStack");
    console.log("1- Frontend");
    console.log("2- Backend");
    console.log("3- DATA BANK");
    teclFull = prompt("R: ");

    switch (teclFull) {

        case "1":
            alert("Selecionado Front-end")
            alert("Resumo sobre a area")
            alert("Imagine um site ou aplicativo: tudo o que você vê e interage, desde botões e menus até animações e interfaces dinâmicas, é obra do desenvolvedor front-end. Essa área é crucial para criar interfaces atraentes, intuitivas e que proporcionem uma ótima experiência para o usuário.")
            Tecnologia()
            break;

        case "2":
            alert("Selecionado Back-end")
            alert("Resumo sobre a area")
            alert("o back-end trabalha incansavelmente nos bastidores. É aqui que a mágica acontece: a lógica da aplicação reside, os dados são armazenados e processados, e as conexões com o mundo externo se concretizam.")
            Tecnologia()
            break;

        case "3":
            alert("Selecionado DATA BANK")
            alert("Resumo sobre a area")
            alert("Imagine um armário gigante que guarda tudo o que a sua aplicação precisa: dados de usuários, produtos, pedidos... Essa é a função do banco de dados. É aqui que as informações são armazenadas de forma organizada e segura, prontas para serem consultadas, atualizadas e usadas pelo back-end quando necessário.")
            Tecnologia()
            break;
    }

}

function Tecnologia() {
    let resp;
    let tex;
    do {
        console.log("Quais tecnologia quer se aprofundar?");
         tex = prompt();
        console.log("Deseja mais tecnologias ? (Sim | Nao)")
         resp = prompt();

        if (resp == "Sim") {
            console.log("Quais tecnologia quer se aprofundar?");
            tex = prompt();
        }
    } while (resp != "Nao")
    alert("Vlww ")
}