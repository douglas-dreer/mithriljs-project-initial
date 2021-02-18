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