# vuera

**Warning!** UNTESTED. This is an early proof-of-concept. Stability and performance are UNKNOWN.

Vuera is a library for using [React] components in [Vue] apps and for using [Vue] components in
[React] apps.

A demo can be found [here on Webpackbin](https://www.webpackbin.com/bins/-Kv4CbmcpJbNiGkCajAm).

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

## Usage

### Vue in React

To use a Vue component inside a React app, you need to pass the `component` prop and any other props
to the `Vue` component. Here's an example:

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
