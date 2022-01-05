---
tags:
- javascript
- blog
- gatsby
- tutorial
title: Build a blog with Gatsby, Github, and Forestry Part 1
date: 2022-01-05T08:00:00Z
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

* Gatsby init, basic setup.
* Importing bootstrap
* Site and SEO configuration
* Writing blog posts in markdown and displaying them using Gatsby's graphql data layer.
* Blogpost images using `gatsby-remark-images`
* Publish to github pages
* Other hosting options

Part 2:

* Connecting your blog with Forestry CMS
* Beyond blog-posts: CMS editors are nice! Let's use them for more than blog posts.
* ???
* Publishing from Forestry (Github action)

# Basic setup

Gatsby makes this _pretty_ easy for you. We're going to use the gatsby-default-starter because it provides some really good boiler plate.

```bash
npx gatsby new tutorial-blog https://github.com/gatsbyjs/gatsby-starter-default
```

_Note: "tutorial-blog" will be the name of the site and the directory. This can all be changed later but you may choose to replace it in this command with your own project name._

_Note on gatsby starters: I've found most of the_ [_gatsby starters_](https://www.gatsbyjs.com/starters/ "https://www.gatsbyjs.com/starters/") _to be impractical for actually building on top of, but they are great to look through for examples of configuration._

You can now `cd` into your new directory and run `npm run develop` to see your site on [http://localhost:8000](http://localhost:8000 "http://localhost:8000").

Tada 🎉:

Opening the directory in your text editor, you should see a similar structure to this:

![](/src/images/screen-shot-2022-01-05-at-10-32-17-am.png)

Now lets change a bunch of stuff. Not too much though, I promise.

# Configuration

Here we'll just run through some initial basic config, which should serve as a little tour of important places in your gatsby project.

```javascript
// <root>/gatsby-config.js
module.exports = {
  siteMetadata: {
    siteUrl: "https://timmehs.github.io/gatsby-tut", // <-- change
    title: "Gatsby Tutorial", // <--- change
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
```