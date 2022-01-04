---
tags:
  - gatsby
  - reactjs
  - github pages
title: "fatal: A branch named 'gh-pages' already exists."
date: 2021-12-30T08:00:00Z
image: "/src/images/ghpages-error.png"
---

A small attempt to save someone else some headscratching and pain over this silly little error.

Early on in developing this site, I was using the [gh-pages](https://github.com/tschaub/gh-pages) npm package to do some preliminary deployments of the site, just to get the plumbing all working.

## The problem

My deploy script in my `package.json` looks like this:

```json
  "scripts": {
    "deploy": "gatsby build && gh-pages -d public",
    ...
  }
```

but running it produced the error:

```shell
fatal: A branch named 'gh-pages' already exists.
```

It just made no sense.

## The fix

The simple fix was clearing out the gh-pages cache in node_modules:

```shell
# from project root
$ rm -rf node_modules/.cache/gh-pages/
```

Turns out to be some bug in the way gh-pages caches builds or assets. I had too many things to do to dig in further but hopefully this helps someone.
