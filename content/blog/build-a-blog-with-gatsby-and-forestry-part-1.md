---
tags:
- javascript
- blog
- gatsby
- tutorial
title: Build a blog with Gatsby, Github, and Forestry CMS (Part 1)
date: 2022-01-05T08:00:00.000+00:00
image: ''

---
This is a tutorial for anyone wishing to build a free, CMS-powered blog using Gatsbyjs, Github, and Forestry. Some benefits of this approach are:

* Free hosting on github pages.
* Lovely blog-writing experience using a CMS text editor, with integrated media library.
* Build the site layout in react and sass with built-in hot reloading.

Here is a streamlined tutorial for building and deploying a blog in GatsbyJS, leaving room for your own customization and styling.

Gatsby's documentation is fantastic and thorough, but I always find I have to cherry pick across many different documents and repository README's to figure out seemingly basic things so I thought I'd offer a tutorial of how I've gone about it.

OK, here's the game plan:

Part 1 (this post):

* Basic setup.
* Styles and bootstrap
* Site and SEO configuration
* Writing blog posts in markdown and displaying them using Gatsby's graphql data layer.
* Blogpost images using `gatsby-remark-images`
* Publish to github pages
* Other hosting options

Part 2:

* Connecting your blog with Forestry CMS
* Beyond blog-posts: CMS editors are nice! Let's use them for more than blog posts.
* Typography
* Publishing from Forestry (Github action)

# Basic setup

Gatsby makes this _pretty_ easy for you. We're going to use the gatsby-default-starter because it provides some really good boiler plate for things like Seo, Layout, and Header components.

```bash
npx gatsby new tutorial-blog https://github.com/gatsbyjs/gatsby-starter-default
```

***

_Note on gatsby starters: I've found most of the_ [_gatsby starters_](https://www.gatsbyjs.com/starters/ "https://www.gatsbyjs.com/starters/") _to be impractical for actually building on top of, but they are great to look through for examples of configuration._

***

You can now `cd` into your new directory and run `npm run develop` to see your site on [http://localhost:8000](http://localhost:8000 "http://localhost:8000").

Tada 🎉:

![](/src/images/gatsby-default-starter-sn.png)

Opening the directory in your text editor, you should see a similar structure to this:

![](/src/images/screen-shot-2022-01-05-at-10-49-53-am.png)

_Note: if you use yarn instead of npm like me, you can remove the package-lock.json file and run `yarn` to initialize a yarn.lock file. I'll be using yarn commands for the rest of the tutorial so I don't confuse myself, but of course npm works just as well._

Now lets change a bunch of stuff.

# Configuration

Here we'll just run through some initial basic config, which should serve as a little tour of important places in your gatsby project.

```javascript
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Timmehs' Tutorial Blog`, // <-- Change
    description: `A blog tutorial using Gatsbyjs, Github, and Forestry CMS`, // <-- Change
    author: `Tim Sandberg`, // <-- Change
    siteUrl: `https://timmehs.github.io/tutorial-blog`, // <-- Change
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Delete `gatsby-plugin-manifest` entry
  ],
}
```

### Post-init Cleanup

I'm going to say that PWA features are outside of the scope of this tutorial, so go ahead and delete the gatsby-plugin-manifest entry at the bottom. While we're at it you can `yarn remove gatsby-plugin-manifest gatsby-plugin-offline`. You can read more about those here: [https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/ "https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/").

You'll notice a couple pages in the starter are examples for some neat features: server-side-rendered pages ([SSR](https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/ "Server Side Rendering")) and deferred static generation ([DSG](https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/ "Deferred Static Generation")). Gonna give those the `OUT OF SCOPE` stamp as well, so lets delete the following files:

```shell
gatsby-ssr.js
src/templates/gatsby-dsg.js
src/pages/using-ssr.js
src/pages/using-typescript.tsx
```

Since we're deleting the dsg template, we'll need to remove this code so it doesn't try and make a page out of it:

```javascript
// gatsby-node.js
// We'll return to this file later, so just delete the inner lines

exports.createPages = async ({ actions }) => {
  // DELETE ME:
  // const { createPage } = actions
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
}
```

With those changes, and the updates to your `siteMetadata` in `gatsby-config.js` you should see some changes on your page (after a server restart):

![](/src/images/default-starter-updated-sn.png)

Your layout component is grabbing that updated info using graphql and plugging it into the Header component. Here's that query shown here:

```javascript
// src/components/layout.js

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  ...
```

You'll also notice the title of the page in the browser tab has updated, this is because the SEO component does the same thing. I like to refactor the Seo component to live within the Layout, but for simplicity's sake let's continue with what we have here.

# Styles

This is getting wordy so I'm going to keep explanation to a minimum here:

```bash
# Install packages
yarn install bootstrap react-bootstrap sass gatsby-plugin-sass

# Remove old stylesheet
rm src/components/layout.css

# Create new styles directory and scss stylesheet
mkdir src/styles
touch src/styles/bootstrap.scss
```

Add gatsby-plugin-sass to plugins:

```javascript
// gatsby-config.js
module.exports = {
  siteMetadata: {
    ...
  },
  plugins: [
    `gatsby-plugin-sass`, // <-- New
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
```

Update style import in layout.js

```javascript
// src/components/layout.js
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css" delete
import "../styles/bootstrap.scss"
```

Customize and import bootstrap:

```scss
// src/styles/bootstrap.scss

/** 
 * Bootstrap Overrides - full list of customizable variables here:
 * - https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss
 * This is my preferred method of customizing bootstrap themes.
 */
$primary: #496257;

/**
 * Bootstrap
 * */
@import "~bootstrap/scss/bootstrap.scss";
```

To make sure it's working, and our styles are hooked up, lets restart the server and check that everything works at http://localhost:8000.![Bootstrapped home page](/src/images/bootstrapped-sn.png)

# Site structure and navigation

With react-bootstrap, our header component can be simply refactored into a responsive nav header.

![](/src/images/bootstrap-navbar-sn.png)

**src/components/header.js**

```javascript
import * as React from "react"
import { Link } from "gatsby"
import { Container, Nav, Navbar } from "react-bootstrap"
import PropTypes from "prop-types"

const links = [
  { text: "Blog", to: "/blog" },
  { text: "About", to: "/about" },
]

const Header = ({ siteTitle }) => (
  <Navbar bg="primary" expand="lg" variant="dark">
    <Container fluid="lg">
      <Navbar.Brand to="/" as={Link}>
        {siteTitle}
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
```

***

_Note: As with any bootstrap classes or react-bootstrap components used in this tutorial, you can read up on customization options at their respective websites:_

* [_https://react-bootstrap.github.io_](https://react-bootstrap.github.io "https://react-bootstrap.github.io")
* [_https://getbootstrap.com/_](https://getbootstrap.com/ "https://getbootstrap.com/")

***

Next let's update our `index.js` and add the two other pages linked to in our new navbar.

**src/pages/index.js**

```javascript
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome to Timmehs' Tutorial Blog</h1>
    <p>We've got all things that are good.</p>
  </Layout>
)

export default IndexPage
```

**src/pages/blog.js (new)**

```javascript
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <h1>Blog</h1>
    {/* Blog posts will go here */}
  </Layout>
)

export default BlogPage
```

**src/pages/about.js (new)**

```javascript
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <section>
      <h1>About</h1>
      <p>
        This blog is built with Gatsbyjs, Bootstrap, and Forestry. It is the
        demo for the tutorial found here:{" "}
        <a href="https://github.com/Timmehs/tutorial-blog">repo</a>.
      </p>
    </section>
  </Layout>
)

export default AboutPage
```

As you will see, any files under the `src/pages` directory are automatically turned into pages in your website by gatsby.

***

_Note: As you click around via the header navigation, you may notice that navigation is super snappy. That's because we're using Gatsby's `<Link />` component, which has some magic to it (more on that_ [_here_](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/ "https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/")_)._

***

# Blog posts from markdown

This is the standard static-site-generator functionality we're all here for. The plumbing basically works like this:

This section will consist of the following steps:

1. Add `gatsby-transformer-remark` for transpiling markdown files into useable html.
2. Create your content folder and first two blog posts.
3. List blog posts on your main `/blog` page using a `pageQuery`.
4. Update gatsby-config.js to add the content folder as a data source and convert `*.md` files to pages.
5. List blog posts on your main `/blog` page using a `pageQuery`.
6. Create a `blog-post.js` template.
7. Tell gatsby to generate pages for blog posts in `gatsby-node.js`

Sound like a lot? Well it is, kind of. Let's get started!

**Install gatsby-transformer-remark to your project:**

```shell
yarn add gatsby-transformer-remark
```

**Tell gatsby-config.js to use this folder as a source for markdown:**

```javascript
module.exports = {
  siteMetadata: {
    title: `Timmehs' Tutorial Blog`,
    description: `A blog tutorial using Gatsbyjs, Github, and Forestry CMS`,
    author: `Tim Sandberg`,
    siteUrl: `https://timmehs.github.io/tutorial-blog`,
  },
  plugins: [
    ...
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-remark`,
	...
  ],
}

       ...
```

**Create content folder and two blog post files:**

```shell
# from project root
mkdir content/
touch content/my-first-post.md content/my-second-post.md
```

***

_Note the top section is surrounded above and below by the `---` characters, this tells remark that these fields are frontmatter, separate from the body of the post. You can add any fields here you like, and they will be filterable in graphql._

***

content/blog/my-first-post.md

```markdown
    ---
    title: My first post
    date: 2022-01-05
    ---
    
    # Hello, blog!
    
    This is my first post made with markdown.
    As you can see I can do cool things like
    
    > Block quotes
    
    - and
    - also
    - lists
```

content/blog/my-second-post.md

```markdown
    ---
    title: My second post
    date: 2022-01-06
    ---
    
    # Me again
    
    Really I just made this post to prove I could.
```

**List blog posts at /blog**

Here we add a page query to our `blog.js` page to grab basic information about our posts and list it. 

```javascript
import { graphql } from "gatsby"
import * as React from "react"
import { Card, Row } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <Seo title="Blog" />
    <h1>Blog</h1>
    {data.posts.nodes.map(({ id, frontmatter }) => (
      <Card key={id} className="mb-3">
        <Card.Body>
          <Card.Title>{frontmatter.title}</Card.Title>
          <Card.Subtitle>{frontmatter.date}</Card.Subtitle>
        </Card.Body>
      </Card>
    ))}
  </Layout>
)

export const query = graphql`
  {
    posts: allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "LL")
        }
      }
    }
  }
`

export default BlogPage
```

With that, we have a blog index!

![](/src/images/blog-index.png)

Make sure to leverage the graphql tool on [http://localhost:8000/___graphql](http://localhost:8000/___graphql "http://localhost:8000/___graphql") whenever you need to prototype a query. It's also a great place to poke around and see how Gatsby creates the data layer. Here's a screenshot from me prototyping this particular query, it even gives you code to copy:

![](/src/images/graphiql.png)