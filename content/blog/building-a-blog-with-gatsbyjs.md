---
tags:
- javascript
- static website
- react
- gatsby
title: Building a blog with Gatsbyjs and Forestry.io
date: 2022-01-04T08:00:00.000+00:00
image: "/src/images/gatsby-icon.png"

---
![Gatsby Logo](/src/images/gatsby-icon.png)

This website was my second rodeo building a website with Gatsby.js. My first use of gatsby was for my page dedicated to my work as a composer, which can be found here: [https://www.timsandberg.com/](https://www.timsandberg.com/ "https://www.timsandberg.com/").

You might notice that this website is a lot more stripped down. Like, a LOT more stripped down. My composer site is meant to be cinematic, so it's pretty extra.

This website, by contrast, is meant to be a shining example of simplicity. It comes after years of observing other programmer's personal sites and blogs, and how great it can be when there are minimal bells and whistles, and just good, to-the-point content.

# Why Gatsbyjs?

To keep this brief, I'll just link to this sexy marketing page [https://www.gatsbyjs.com/why-gatsby/](https://www.gatsbyjs.com/why-gatsby/ "https://www.gatsbyjs.com/why-gatsby/"). In particular I've been drawn to gatsby for the following reasons

* Graphql interface for all content in site keeps data organized and easy to sort, filter, and query.
* Automated image processing and progressive image loading.
* The freedom to build and style the site just as you would an SPA in reactjs. I inevitably want to build some widget or other for the UI (although I'm trying to keep a lid on that for this site), so it's great to have the react build pipeline set up and ready to go. This was always what made me abandon Jekyll sites in the past.
* Really easy to hook into some great free CMS systems, I'll be discussing how I use [https://forestry.io/](https://forestry.io/ "Forestry") for this site.
* It's blazing fast! Not only is building a site in gatsby very like building an SPA with `create-react-app` but it feels like an SPA to the user as well with really snappy navigation.

I will admit it's probably the most DIY and configuration-heavy framework. That being said there are some great pre-made [gatsby starters](https://www.gatsbyjs.com/starters/ "Gatsby Starters") that can be customized or at least tinkered with so you can see how things are done.

Without further ado...

# Basic set up

![Screenshot of gatsby-default-starter home page](https://www.gatsbyjs.com/static/3833f4ebd008c83959677433b5672679/5803e/d1c71f638d7d35fc92aadba5fa13990c.webp "Gatsby default starter screenshot")Using the [gatsby-default-starter](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-default "Gatsby default starter") is a great place to start. It takes care of a lot of the boiler plate and makes it clear where to fill in your own values. Set your site name and metaData in `gatsby-config.js`.

The key pieces of boiler plate here that I really like are the layout component and the SEO component are already set up for you. More info on those here:

* [https://www.gatsbyjs.com/docs/how-to/routing/layout-components/](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/ "https://www.gatsbyjs.com/docs/how-to/routing/layout-components/")
* [https://www.gatsbyjs.com/docs/how-to/adding-common-features/seo/](https://www.gatsbyjs.com/docs/how-to/adding-common-features/seo/ "https://www.gatsbyjs.com/docs/how-to/adding-common-features/seo/")

They've conveniently put all of their styles in single style.css which is easy to rip out. This gets imported in the `layout.js` component. My process here was something like:

* `yarn add sass react-bootstrap bootstrap`
* Add the sass plugin to `gatsby-config.js`:

```javascript
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Timmehs`,
    description: `Website of software engineer Tim Sandberg`,
    author: `Tim Sandberg`,
    siteUrl: `https://timmehs.github.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`, // <--- plugins go here
    ...
  ]
}
```

* Change `style.css` to `style.scss`
* Override bootstrap defaults and import bootstrap

```sass
/** 
 * Bootstrap Overrides
 * https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss
 */

$link-color: #d14f4f;

$font-size-root: 18px;

/**
 * Bootstrap
 * */
@import "~bootstrap/scss/bootstrap.scss";
```

I use the prebuilt bootstrap components from [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/ "https://react-bootstrap.github.io/") wherever possible, for navbars and such to avoid what would be an avalanche of classNames in my react code. For example, my 36-line header component:
```javascript
import * as React from "react"
import { Link } from "gatsby"
import { Container, Nav, Navbar } from "react-bootstrap"

const links = [
  { text: "blog", to: "/blog" },
  { text: "projects", to: "/projects" },
  { text: "work", to: "/work" },
]

const Header = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container fluid>
      <Navbar.Brand to="/" as={Link}>
        Timmehs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {links.map(({ text, to }) => (
            <Link
              key={`header-link-${to}`}
              className="nav-link"
              activeClassName="active"
              to={to}
            >
              {text}
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
```
# Building content types