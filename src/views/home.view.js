import m from 'mithril';
import HomeController from "../controllers/home.controller";

export default class CardapioView {
    constructor(vnode){
        this.controller = new HomeController();
    }
    view(){
        return m(".row", [
            m(".col", [
                m("h1", "Início"),
                m("hr"),
                m("button.btn.btn-primary", {
                    id: "btn-ok",
                    onclick: () => {this.controller.saudacao()}
                }, [ m("span", "Diga Oi!") ]),
                m("button.btn.btn-info", {
                    id: "btn-sobre",
                    onclick: () => {this.controller.sobreProjeto()}
                }, [ m("span", "Sobre o projeto") ])
            ])           
        ])
    }
}