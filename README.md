# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Stats preview card component solution](#frontend-mentor---stats-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned!!!](#what-i-learned)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./assets/images/Screen%20Shot%20Desktop%20View.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwindcss](https://tailwindcss.com/) - For styles

### What I learned!!!

Great learning for CSS Grid styling and positioning. Major difficult is designing the background image with overlay color background and optimizing with desktop and mobile view, see below:

```css
<div
  class="bg-center bg-cover bg-no-repeat w-full h-full md:hidden"
  style="background-image: linear-gradient(rgba(95, 15, 138, 0.4),rgba(95, 15, 138, 0.3)),url(assets/images/image-header-mobile.jpg);">
</div>
<div
  class="hidden md:flex bg-center bg-cover bg-no-repeat w-full h-full"
  style="background-image: linear-gradient(rgba(95, 15, 138, 0.5),rgba(95, 15, 138, 0.3)),url(assets/images/image-header-desktop.jpg);">
</div>
```

## Author

- Website - [Samuel Amistoso](https://sam-amistoso-portfolio.vercel.app/)
- Frontend Mentor - [@sam-amistoso](https://www.frontendmentor.io/profile/sam-amistoso)
