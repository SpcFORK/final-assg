var { } = new class NavNS {
  // @Setup

  Header = document.querySelector('header');

  CSS_Settings = {
    type: 'text/css',
    href: './jsEM/nav.css'
  }

  NAV_Settings = {
    type: 'text/javascript',
    href: './jsEM/nav.js'
  }

  CSS = Object.assign(document.createElement('link'), { rel: 'stylesheet' }, this.CSS_Settings)

  CSS_Cache = Object.assign(document.createElement('link'), { rel: 'prefetch' }, this.CSS_Settings)
  NAV_Cache = Object.assign(document.createElement('link'), { rel: 'prefetch' }, this.NAV_Settings)

  // ---
  // @Logo

  Logo = Object.assign(document.createElement('img'), {
    src: './img/logo.svg',
    alt: 'Logo',
  })

  // ---
  // @Links

  Nav = document.createElement('nav');
  NavList = document.createElement('ul');

  addNavLink(name, link) {
    const NavListItem = document.createElement('li');
    const NavLink = Object.assign(document.createElement('a'), {
      href: link,
      textContent: name
    })

    NavListItem.appendChild(NavLink);
    this.NavList.appendChild(NavListItem);
  }

  Nav_Home = this.addNavLink('Home', './');
  Nav_Shop = this.addNavLink('Shop', './shop.html');
  Nav_About = this.addNavLink('About', './about.html');
  Nav_Contact = this.addNavLink('Contact', './contact.html');

  // ---
  // @Render

  constructor() {
    this.Nav.appendChild(this.Logo);
    this.Nav.appendChild(this.NavList);

    document.head.append(this.CSS);
    document.head.append(this.CSS_Cache);
    document.head.append(this.NAV_Cache);

    this.Header.prepend(this.Nav);
  }

  // ---
  // @Core

  // Instance Methods go here
}