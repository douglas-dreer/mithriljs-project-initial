import m from "mithril";
export default class HomeController {
    constructor(){
        this.texto = "Oi, bem vindo ao Projeto MithrilJS Bootstrap";
    }

    saudacao() {
        alert(this.texto);
    }

    sobreProjeto() {
        m.route.set("/sobre");
    }
}
