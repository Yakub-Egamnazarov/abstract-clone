# ![Abstract Logo](./src/assets/images/favicon.png) ABSTRACT website clone by react app.

[Abstract Website](https://www.abstract.com/)

## Technologies used to create the website.

- React App
- SAAS
- react-router-dom

---

## Steps I took to make this website:

### 1. Set up a react app and cleared all the unnecessary tags and stylings

### 2. Installed SASS library to web dev dependency

### 3. Favicons and logos changed from react typical pictures to Abstract's. As well as the Title of the project.

### 4. Hero Section together with navbar at the main PAGE.

Hero section implemented with responsive design as in the original website.
The following breakpoints added to the media queries:

- min-width: 1440px (big-desktop-screen)
- max-width: 1024px (tablet-landscape)
- max-width: 767px (tablet-portrait)
- max-width: 479px (mobile)

### 5. Section coming after the hero section

To implement the sliding-up effect the following technique is used:

- on the upper side of the actual section created pseudo-section, div element, to immitate some spacing
- to the actual section, on the bottom side of hero, added _position: sticky_ property added
- and with spacing SCSS utilites adjusted, the sliding-up effect is created

Also created reusabel container SCSS components and spacing utilities like:

- .container-max
- .col (.col-4-d) etc.
- spacing-bottom-s (etc.)
- z-9 (z-index: 9;)

---

## NOTES

Importing svg elements into the react app is easier through react component

```js
import { ReactComponent as Logo } from "path";
```

---

## Fonts

in original website it is used GT America font face as main, and GT Super font face as secondary, for titles etc. Grilli type faces, using only as trial variant for learning purposes. [Grilli website](grillitype.com)

Inside the assets file created a folder for a custom fonts dowloaded from [Grilli](grillitype.com) trial version and put all the WOF2 files inside this folders. Created fonts.css so it could be easier to upload those file into index.css file.
In this project mainly used two fonts, GT America Standard and GT Supet Text. I checked, in this project they work.

Following fonts are used in the website:

- GT America Standard (main)
- GT Super Text (secondary)
- Caveat Google Font (cursive style) for annotation ads.
