import m from 'mithril';
import HomeController from "../controllers/home.controller";
import MainHeadComponent from "../components/main-head.view";
import SidebarMenuComponent from '../components/sidebar-menu.view';


export default class CardapioView {
    constructor(vnode){
        this.text = "Lorem ipsum magna elit velit est felis turpis tristique placerat, bibendum ad mauris netus senectus leo quam elementum, pharetra lacinia ut tellus ante id rhoncus volutpat. nullam vel porttitor aliquet ac justo platea enim taciti magna integer quisque id, aptent ante molestie bibendum sagittis consequat litora lorem at leo elit, magna ac porttitor pharetra luctus porttitor nulla malesuada elit justo commodo. interdum ad nibh donec hac primis venenatis tellus, facilisis blandit mauris donec dapibus maecenas ultrices etiam, turpis magna porta lobortis dolor tempor. pulvinar mollis morbi pulvinar venenatis amet bibendum, lacinia in velit potenti ut, orci semper aenean venenatis nam. ";
        this.recursosList = [ 
            {"id": "1", "nome": "Exemplo de Service", "descricao": "Exemplo de um service", "route": "service"}
        ]
        this.controller = new HomeController();
    }
    view(){
        return m(".wrapper", [
           //m(MainHeadComponent),
           m(SidebarMenuComponent),
           m(".content", [
               m(".container-fluid", [
                   m(".row", [
                       m(".col-lg-6", [
                           m("h1", "Teste"),
                           m(".card", [
                               m(".card-image", [
                                   m(".load-wraper", [ m(".activity") ])
                               ])
                           ]),
                           m(".card", [
                               m(".card-image", [
                                   m(".load-wraper", [ m(".activity") ])
                               ]),
                               m(".card-content", [
                                   m(".card-avatar", [
                                       m(".load-wraper.circular", [ m(".activity") ])
                                   ]),
                                   m(".card-avatar-text", [
                                       m(".load-wraper", [ m("activity")])
                                   ])
                               ])

                           ])
                       ])
                   ])
               ])
           ])
        ]);
        /*
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
        */
    }
}