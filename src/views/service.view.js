import m from 'mithril';
import HomeController from '../controllers/home.controller';
import BaseService from '../services/base.service';

export default class ServiceView {
    constructor(){
        this.service = new BaseService();
        this.pokemonList = [];    
        this.exibir = false;
        this.controller = new HomeController();
    }

    async oninit() {
        this.pokemonList = await (this.service).buscarTodosCards().then(resposta => resposta.cards);
        this.exibir = (this.pokemonList).length >= 0;
    }
    
    view() {
        return m(".col-12", {"class": this.exibir ? "d-block" : "d-none"}, [
            m(".row", [
                m("h1", "Exemplo de Service"),
                m("hr"),
                m("p", "Usando o service e o webservice Pokemon Trade Card Game API"),
                m("table", {"class": "table table-striper table-hover caption-top"}, [
                    m("caption", "Lista de Cards Pokémon"),
                    m("thead", [
                        m("tr", [
                            m("th", [m("td", [ m("span", "ID") ])]),
                            m("th", [m("td", [ m("span", "Name") ])]),
                            m("th", [m("td", [ m("span", "Set Code") ])])
                        ])                           
                    ]),
                    m("tbody", [
                        (this.pokemonList).map(item => {
                            return m("tr", [
                                 m("td", [ m("span", item.id) ]),
                                 m("td", [ m("span", item.name) ]),
                                 m("td", [ m("span", item.setCode) ])
                             ])
                         })
                    ])
                ]),
                m("button.btn.btn-primary", {onclick: () => {this.controller.redirecionar("home")} }, [ m("span", "Voltar")]),
            ])
        ])
    }
}