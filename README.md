# Portfolio v4.0.0

## Overview

The goal of this project is to build a new portfolio that showcases my skills, work, as well as provides content other developers may find useful. Specifically, the content will be centered around tutorials, updates on projects and technologies I am working on, open source tools, and of course, a way for employers to get in contact with me.

## To Add:

-   Documentation
-   APIs

---

### Portfolio Website Outline

-   Home page
    <!-- hero and nav -->
    <!-- nav is transparent and border less -->
    <!-- nav on desktop starts at bottom and becomes sticky on scroll -->
    -   navigation
        -   projects (_links to current web sites, apps, open source_)
        -   about (_links to a resumé / about me page_)
        -   contact
        -   _Add later_
            -   articles (_turorial focused but also announcements_)
    -   hero section
        -   image, title, subtitle, links
    -   project section
        -   _build individually at first_
        -   card components that highlight each project
            -   title, description, tech used
            -   start with image, animate on title, text
        -   _smaller cards with no image for old projects_
        -   link to full page for each project
        -   _later_ pull dynamically from database or markdown files
        -   _Projects that I want to do:_ - _open source app for ABQ_ - _start building components for creative website template (Beth)_
    -   about section
        -   skills section _(icons of tech stack)_
        -   _Keystone scripting with Java_
        -   _Database querying with SQL_
        -   _Front end work with Vue, Javascript_
        -   _Web design with CSS, SaSS, Tailwind_
    -   footer / Contact
        -   site map
        -   contact info
    -   _Add later_ articles section
        -   recent blog posts
        -   pull dynamically from database or markdown files
        -   card components that highlight each blog post
            -   title, description, first 140 characters
        -   link to full page for each blog post

---

#### Home page

1. ~~Start new Vue project~~
2. ~~Organize project and develop site skeleton~~
3. ~~Build out navigation from old React component~~
    - ~~copy useful code and components~~
    - ~~copy CSS~~
    - ~~abstract out main CSS styles in order to use variables~~
4. ~~Build out hero section ~~
    - ~~copy useful code and components~~
    - ~~copy CSS~~
5. ~~Build out skills section~~
    - ~~copy useful code and components~~
    - ~~_see if current icons will still work_~~
    - ~~_possibly design new icons_~~
    - ~~backend icon, description~~
    - ~~front end icon, description~~
    - ~~freelance icon, description~~
6. Build out projects section
    - sandy rausch website
    - lisa meyer hagan website
    - ~~elizabeth wells photography website~~
    - ~~albuquerque church website~~
    - ~~phonological awareness module 01~~
    - ~~phonological awareness module 02~~
    - ~~portfolio website~~
    - make project component
        - add slots to pass in icons

---

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
