import m from "mithril";

export default class SidebarMenuComponent {
    constructor(vnode){}

    view(){
        return m("aside.main-sidebar.sidebar-dark-primary.elevation-4", [
            m("a.brand-link", {"href": "#"}, [
                m("img.brand-image.img-circle.elevation-3", {"src": "dist/img/AdminLTELogo.png", "alt": "AdminLTE Logo", "style": "opacity: .8"}),
                m("span.brand-text.font-weight-light", "AdminLTE 3")
            ]),
            m(".sidebar", [
                m(".user-panel.mt-3.pb-3.mb-3.d-flex", [
                    m(".image", [
                        m("img.img-circle.elevation-2", {"alt": "User Image", "src": "dist/img/user2-160x160.jpg"})
                    ]),
                    m(".info", [
                        m("a.d-block", {"href": "#"}, "Alexandre Pierce")
                    ])
                ])
            ]),
            m(".mt-2", [
                m("ul.nav.nav-pills.nav-sidebar.flex-column", {"data-widget": "treeview", "role": "menu"}, [
                    m("li.nav-item.has-treeview.menu-open", [
                        m("a.nav-link.active", {"href": "#"}, [
                            m("i.nav-icon.fas.fa-tachometer-alt"),
                            m("p", "Started Pages", [ m("i.right.fas.fa-angle-left")])
                        ])
                    ]),
                    m("ul.nav.nav-treeview", [
                        m("li.nav-item", [
                            m("a.nav-link.active", {"href": "#"}, [
                                m("i.far.fa-circle.nav-icon"),
                                m("p", "Active Page")
                            ])
                        ])
                    ])
                ])
            ])
        ])
    }
}