## SVG Font Icon 

A component that handles how you display icons in your app with customization options per icon

Watch the [Tutorial Video]() for full details on this component.

### Install

Run the following command in your Node based project

```
npm install cwco
```

...or paste the following script in the head of your HTML file

```html 
<script src="https://unpkg.com/cwco/dist/cwco.min.js"></script>
```

Simply copy the component file into your project.

Follow [this guide](https://cwco.io/documentation/getting-started) if you want to use it in projects like React, Angular, Vue, etc.

### Generate SVG Icon Font

You need to also install packages that handle the icon optimization and change into fonts.

```
npm install svgo
npm install svgtofont
```

Then copy the  `svg:optmize`, `svg:to-font` and `svg:all` scripts to your [package.json]() file along with the
`svgtofont` options where you need to configure according to your need. Check the [svgtofont](https://www.npmjs.com/package/svgtofont)
package for more details.

1 - Add all your SVG icon files into the [icons]() directory;

2 - Make sure all your icons are 1:1 ratio (width and height values are the same)

3 - Run script `npm run svg:all` to optimize and generate SVG font icons

4 - Update your icon component link to your font CSS file

### Usage

#### Attributes

- `name`: The name of the icon;
- `size`: The size for the icon. This can be any unit CSS value and any [custom named options]();
- `color`: The color of your icon. This can be any CSS color value and any [custom named options]();

Change the `size` and `color` options to match your needs and system design theme.

The name of the icons will depend on how you named your SVG icon files.

#### Tag

```html
<bfs-icon name="bookmark"></bfs-icon>
<bfs-icon name="check" color="success"></bfs-icon>
<bfs-icon name="close" color="warning" size="lg"></bfs-icon>
```



