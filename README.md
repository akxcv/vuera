# vuera [![Build Status](https://travis-ci.org/akxcv/vuera.svg?branch=master)](https://travis-ci.org/akxcv/vuera)

**Warning!** UNTESTED. This is an early proof-of-concept. Stability and performance are UNKNOWN.

Vuera is a library for using [React] components in [Vue] apps and for using [Vue] components in
[React] apps.

A demo can be found [here on Webpackbin](https://www.webpackbin.com/bins/-Kv5vs7RJ63p9KpOHYvM).1

## Why

This library is supposed to help when migrating an app from one UI library to another. One can also
use this library to make React and Vue interoperate. For example, one could build a project with
React using Vue for forms and other inherently stateful areas of the app.

## Installation

Install with yarn:

```sh
$ yarn add vuera
# or with npm:
$ npm i -S vuera
```

Add `vuera/babel` to `plugins` section of your `.babelrc`:
```json
{
  "presets": "react",
  "plugins": ["vuera/babel"]
}
```

## Usage

### Vue in React

Using a Vue component in a React app is very simple! All you need to do is import your Vue component
normally and just use it in JSX as you would use a React component:

```jsx
import React from 'react'
import MyVueComponent from './MyVueComponent.vue'

export default () => (
  <div>
    <h1>I'm a react component</h1>
    <div>
      <MyVueComponent message='Hello from Vue!' />
    </div>
  </div>
)
```

If you don't want to use the babel plugin, you can still use a Vue component inside your React app
like so:

```jsx
import React from 'react'
import { Vue } from 'vuera'
import MyVueComponent from './MyVueComponent.vue'

export default () => (
  <div>
    <h1>I'm a react component</h1>
    <div>
      <Vue
        component={MyVueComponent}
        message='Hello from Vue!'
      />
    </div>
  </div>
)
```

Functions work normal, too.

### React in Vue

*A babel plugin for simplifying usage might be coming soon.*

To use a React component inside a Vue app, you need to pass the `component` prop and any other props
**into `passedProps` prop** (since Vue requires to provide a whitelist of props to every component).
Here's an example:

```vue
<template>
  <div>
    <h1>I'm a Vue component</h1>
    <div>
      <react :component="component" :passedProps="passedProps">
    </div>
  </div>
</template>

<script>
  import { React } from 'vuera'
  import MyReactComponent from './MyReactComponent'

  export default {
    data () {
      component: MyReactComponent,
      message: 'Hello from React!',
    },
    /**
     * It's recommended to declare `passedProps` as a computed property. This way you won't bloat
     * your Vue component, and you will be able to pass methods as well.
     */
    computed: {
      passedProps () {
        return {
          message: this.message,
        }
      },
    },
    components: { React }
  }
</script>
```

[react]: https://facebook.github.io/react
[vue]: https://vuejs.org
