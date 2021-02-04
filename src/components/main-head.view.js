import m from "mithril";

export default class MainHeadView {
  constructor(vnode){}

  view() {

    return m("nav.main-header.navbar.navbar-expand.navbar-white.navbar-light", [
      //Left navbar links
      m("ul.navbar-nav", [
        m("li.nav-item", [ 
          m("a.nav-link", {"href": "#", "data-widget": "pushmenu", "role": "button" }, [
            m("i.fas.fa-bars")
          ])
        ]),
        m("li.nav-item.d-none.d-sm-inline-block", [
          m("a.nav-link", {"href": "#"}, [ m("span", "Home") ])
        ]),
        m("li.nav-item d-none d-sm-inline-block", [
          m("a.nav-link", {"href": "#"}, [ m("span", "Contact") ])
        ])
      ]),
      //Form Search
      m("form.form-inline.ml-3", [
        m(".input-group.input-group-sm", [
          m("input[type='search'].form-control.form-control-navbar.", {"placehlder": "Search", "aria-label": "Search"}),
          m(".input-group-append", [
            m("button[type='submit'].btn.btn-navbar", [m("i.fas.fa-search")])
          ])
        ])
      ]),
      m("ul.navbar-nav.ml-auto", [
        m("li.nav-item.dropdown", [
          m("a.nav-link", {"data-toggle": "dropdown", "href": "#"}, [
            m("i.far.fa-comments"),
            m("span.badge.badge-danger.navbar-badge", "3")
          ]),         
          m(".dropdown-menu.dropdown-menu-lg.dropdown-menu-right", [
            m("a.dropdown-item", {"href":"#"}, [
              m(".media", [
                m("img.img-size-50.mr-3.img-circle", {"alt": "Image User", "src": "img/user1-128x128.jpg"}),
                m(".media-body", [
                  m("h3.dropdown-item-title", "Brad Diesel", [ 
                    m("span.float-right.text-sm.text-danger", [ m("i.fas.fa-star") ])
                  ]),
                  m("p.text-sm"),
                  m("p.text-sm.text-muted", [ m("i.far.fa-clock.mr-1"), "4 Horas atrás"])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }    
}

/*
 <div class="media">
              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">Call me whenever you can...</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            */