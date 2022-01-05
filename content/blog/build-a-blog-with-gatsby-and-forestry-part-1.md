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

![](/src/images/gatsby-default-starter-sn.png)

Opening the directory in your text editor, you should see a similar structure to this:

![](/src/images/screen-shot-2022-01-05-at-10-49-53-am.png)

_Note: if you use yarn instead of npm like me, you can remove the package-lock.json file and run `yarn` to initialize a yarn.lock file._

Now lets change a bunch of stuff.

# Configuration

Here we'll just run through some initial basic config, which should serve as a little tour of important places in your gatsby project.

```javascript
// <root>/gatsby-config.js
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

I think it's fair to say that PWA features are outside of the scope of this tutorial.