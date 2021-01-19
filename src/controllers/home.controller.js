import m from "mithril";
import BaseService from "../services/base.service";
export default class HomeController {
    constructor(){
        this.service = new BaseService();
        this.texto = "Oi, bem vindo ao Projeto MithrilJS Bootstrap";
        this.resultados = [];
        this.exibir = false;
    }

    saudacao() {
        alert(this.texto);
    }

    redirecionar(rota) {
        console.log(rota);
        m.route.set(`/${rota}`);
    }
    
    async buscarCards() {
        this.resultados = await (this.service).buscarTodosCards().then(resposta => resposta.cards);
        this.exibir = (this.resultados).length >= 0;
        console.log(this.resultados, this.exibir, this.resultados.length)
    }

    sobreProjeto() {
        m.route.set("/sobre");
    }
}
