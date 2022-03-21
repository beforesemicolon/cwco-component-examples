## Theme Provider

A component that allows you to load a theme for your web app via a web component.

Watch [video tutorial](https://youtu.be/K4YSItm8btE) to learn how this component was built and works

### Install

Simply copy the [theme-provider.component.ts](https://github.com/beforesemicolon/cwco-component-examples/blob/main/theme-provider/theme-provider.component.ts) 
file into your project which already has [cwco](https://cwco.io/) installed ( `npm install cwco` );

### Usage

```html
<theme-provider src="./bfs-theme.json" mode="dark" >
<!-- website content goes here -->
</theme-provider>

```

### Attributes

- `src` : The path to the JSON file with your theme details
- `mode` : Name of one of the modes in your theme to use
- `default-mode`: backup mode to use
