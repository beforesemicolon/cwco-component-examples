## Button

A simple basic button that ripples when you click on them

Watch the [Tutorial Video](https://youtu.be/TviSvzcUc3M) for full details on this component.

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

Follow [this guide](https://cwco.io/documentation/getting-started) if you want to use it projects like React, Angular, Vue, etc.

### Usage

#### Attributes

- `type`: The type of the button;
- `radius`: Any CSS valid radius value;
- `label`: text to label the button with;
- `disabled`: disabled button flag;
- `autofocus`: flag to focus on the button on load;

#### Tag

```html
<bfs-button>my button</bfs-button>
<bfs-button label="my button" autofocus></bfs-button>
<bfs-button disabled>my button</bfs-button>
<bfs-button radius="3rem">my button</bfs-button>
```
