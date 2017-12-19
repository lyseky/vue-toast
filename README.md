# Vue-Toast-Plugin

A toast plugin for Vue.js.

## Features

- Supports both Vue 1.x and 2.x
- Simple

## Installation

```Bash
npm i vue-toast
```

## Usage

> Need to use with webpack because css is imported in js for convenient.

index.js

```javascript
import Vue from 'vue'
import Toast from 'vue-toast'

Vue.use(Toast)
```

App.vue

```javascript
export default {
  methods: {
    defaultt () {
        this.Toast('hello,lyseky!', 'default','middle', '3000')
    },
    info () {
        this.Toast('hello,lyseky!', 'info','middle', '3000')
    },
    success () {
        this.Toast('hello,lyseky!', 'success','middle', '3000')
    },
    warning () {
        this.Toast('hello,lyseky!', 'warning','middle', '3000')
    },
    error () {
        this.Toast('hello,lyseky!', 'error','middle', '3000')
    }
  }
}
```

## Options

|Option|Description|Value|Default|
|---|---|---|---|
|text|content of the toast|||
|type|type of the toast|'default' 'success' 'warning' 'info' 'error'||
|position|position of the toast| 'middle' 'top' 'bottom'||
|duration|time before the toast vanishes, in millisecond||4000
