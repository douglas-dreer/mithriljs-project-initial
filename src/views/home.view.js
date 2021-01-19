import m from 'mithril';
import HomeController from "../controllers/home.controller";


export default class CardapioView {
    constructor(vnode){
        this.recursosList = [ 
            {"id": "1", "nome": "Exemplo de Service", "descricao": "Exemplo de um service", "route": "service"}
        ]
        this.controller = new HomeController();
    }
    view(){
        return m(".col-12", [
            m(".row", [
                m("h1", "Bem-Vindo ao MithrilJS Project Initial"),
                m("h3", "Alguns Recursos"),
                m(".col-6", [
                    m("ul", [
                        (this.recursosList).map((recurso, index) => {
                            return m(".row", [
                                m(".dl.cursor-pointer", {onclick: () => this.controller.redirecionar(recurso.route)}, [
                                    m("dt.col-sm-3", [
                                        m("span.badge.badge-pill.bg-primary", recurso.nome)
                                    ]),
                                    m("dd.col-sm-9", recurso.descricao) ])
                            ])
                        })
                    ])
                ])
            ])
        ])
    }
}