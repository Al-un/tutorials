---
layout: default
title: About
---

# Objectives

This is a training for a blog-like static site. Main features are:

- [x] display posts
- [x] paginate posts (`jekyll-paginate` require `index.html` pages)
  - https://jekyllrb.com/docs/pagination/
  - https://teamtreehouse.com/community/jekyllpaginate-gem (`gems` is now
    `plugins` in `_config.yml`)
- [ ]search posts (by tags/categories and then by content)
  - tags and stuff: https://jekyllrb.com/docs/posts/

### Tags

{% for tag in site.tags %}

- {{ tag[0] }} - {{ tag[1].size }} items
    {% for post in tag[1] %}
    - [{{ post.title }}]({{ post.url | relative_url }})
    {% endfor %}
  {% endfor %}

### Categories

{% for category in site.categories %}

- {{ category[0] }}
    {% for post in category[1] %}
    - [{{ post.title }}]({{ post.url | relative_url }})
    {% endfor %}
  {% endfor %}

### Misc
- [Join tags & categories](https://stackoverflow.com/questions/34242743/distinct-list-of-tags-in-jekyll)