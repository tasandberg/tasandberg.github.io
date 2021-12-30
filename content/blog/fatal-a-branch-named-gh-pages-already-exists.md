---
tags:
- gatsby
- reactjs
- github pages
title: 'fatal: A branch named ''gh-pages'' already exists.'
date: 2021-12-30T08:00:00Z
image: ''

---
A small attempt to save someone else some headscratching and pain over this silly little error.

Early on in developing this site, I was using the `gh-pages` npm package to do some preliminary deployments of the site, just to get the plumbing all working.

My deploy script in my `package.json` looks like this:

```json
 ...
 "deploy": "gatsby build && gh-pages -d public",
 ...
 ```
 
 but running it produced the error `fatal: A branch named 'gh-pages' already exists.`
 
 ![fatal: A branch named 'gh-pages' already exists.](/uploads/screen-shot-2021-12-30-at-1-38-14-pm.png)
 
 It just made no sense. The simple fix was:
 
 ```sh
 # from project root
 rm -rf node_modules/.cache/gh-pages/
 ```
 
 Turns out to be some bug in the way gh-pages caches builds or assets. Had too many things to do to dig in further but hopefully this helps someone.