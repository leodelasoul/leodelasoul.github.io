---
layout: page
group: navigation
title: CV
tagline: Curriculum Vitae
---
{% include JB/setup %}

### Personal Information

__Name:__ Leonid Ricker

__Birthday:__ 03.11.1993

__Email:__ <a href="mailto:{{site.author.email}}?subject=feedback">l.ricker93@web.de</a>    

__Adress:__ Berlin, Germany     


### Professional Experience
* __05.04.2016 – 28.02.2018 Working Student in Webdevelopment__ _Quadriga Media GmbH_ <br>
Worked in agile webdev division on Drupal and WordPress sites such as  <br>
[quadriga-hochschule.com] and [coaching.quadriga-hochschule.com]. Main responsibilities
were feature requests, bugfixes and templating

* __01.05.2014 – 01.03.2016 QA: Game Tester__ _Promotion Software GmbH_ <br>
Mobile app tests along game testing on pc environment, example: Emergency 5.

* __15.04.2014 – 01.03.2015 Working Student: Content Management__ _Aperto GmbH_ <br>
Technical support and CMS management(CoreMedia) for [bundesregierung.de]


[quadriga-hochschule.com]: https://quadriga-hochschule.com
[coaching.quadriga-hochschule.com]: https://coaching.quadriga-hochschule.com
[bundesregierung.de]: https://bundesregierung.de

### Education
* __01.10.2015 – current International Media and Computerscience B.Sc__ _HTW Berlin_ <br>
Continued studies such as algorithms and data structures in Java. Usage of media as a field of
practical appliance.

* __15.10.2013 – 01.04.2015 Business Informatics B.Sc__ _University of Potsdam_ <br>
Teachings in computer science and business courses.

* __2005 – 2013 Highshool Diploma__ _Anne-Frank Gymnasium_ <br>


###  Skills
Java, Ruby
HTML,CSS, JavaScript
Git
Languages: German, Russian, English
PHP and SQL
Pc, Linux, Vagrant
Usage of bash and simple scripting


### Activities
I am interested in art and music meaning you will find me mostly on those events as I thrive for
contemporary artists also I like to read good literature in contrast to specialist ones and documentations
of API’s. Finally road bikes and cycling forms another hobby of mine.

#### Download the CV as PDF
  {% for file in site.static_files %}
    {% if file.path contains 'assets/files/cv.pdf' %}
<a href="{{ file.path }}" download>Download</a>
    {% endif %}
  {% endfor %}
