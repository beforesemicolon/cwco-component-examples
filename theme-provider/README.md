## Theme Provider

A component that allows you to load a theme for your web app via a web component.

Watch [video tutorial](https://youtu.be/K4YSItm8btE) to learn how this component was built and works

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

### Usage

#### Attributes

- `src` : The path to the JSON file with your theme details
- `mode` : Name of one of the modes in your theme to use
- `default-mode`: backup mode to use

Change the `size` and `color` options to match your needs and system design theme.

The name of the icons will depend on how you named your SVG icon files.

#### Tag

```html
<theme-provider src="./bfs-theme.json" mode="dark" >
	<!-- website content goes here -->
</theme-provider>
```
