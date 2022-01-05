---
tags:
- javascript
- blog
- gatsby
- tutorial
title: Build a blog with Gatsby and Forestry Part 1
date: 2022-01-05T08:00:00Z
image: ''

---
Here is a streamlined tutorial for building and deploying a blog in GatsbyJS, leaving room for your own customization and styling.

I've found that gatsby starters (link) tend to be over-engineered or buggy, and really better serve as examples than actual starting points to build your site.

Gatsby's documentation is fantastic and thorough, but I always find I have to cherry pick across many different documents and repository README's to figure out seemingly basic things so I thought I'd offer a tutorial of how I've gone about it.

OK, here's the game plan:

Part 1 (this post):

* Gatsby init, basic setup.
* Importing bootstrap
* Site and SEO configuration
* Writing blog posts in markdown and displaying them using Gatsby's graphql data layer.
* Publish to github pages
* Other hosting options

Part 2:

* Connecting your blog with Forestry CMS
* Beyond blog-posts: CMS editors are nice! Let's use them for more than blog posts.
* ???

# Basic setup