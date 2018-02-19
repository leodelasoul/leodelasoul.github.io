---
layout: page
title: Welcome at
tagline: leodelasoul.github.io
---
{% include JB/setup %}



## About the author and creator

Hello there! This is my personal site you will find information regarding my persona and expertise. Also this little project serves as a
 basic understanding of how modern static site work


## Sample Posts

This blog contains sample posts which help stage pages and blog data.
When you don't need the samples anymore just delete the `_posts/core-samples` folder.

    $ rm -rf _posts/core-samples

Here's a sample "posts list".

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
