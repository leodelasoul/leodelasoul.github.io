---
layout: page
group: navigation
title: CV
---
{% include JB/setup %}

### Curriculum Vitae

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.



Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.


#### Download the CV as PDF
  {% for file in site.static_files %}
    {% if file.path contains 'assets/files/cv.pdf' %}
<a href="{{ file.path }}" download>Download</a>
    {% endif %}
  {% endfor %}
