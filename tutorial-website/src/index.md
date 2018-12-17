---
layout: default
title: Pouet
---

# Deployments

Here are some deployed tutorials:

{% for stack in site.data.deploy %}

## {{ stack.name }}

{% for deploy in stack.deployments %}

1. [{{ deploy.name }}](/tutorials/deploy/{{ stack.folder }}/{{ deploy.folder }}) {{ deploy.desc }}

{% endfor %}

{% endfor %}
