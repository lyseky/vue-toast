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
  methods:{
            defaultt () {
                this.Toast({
                    text:'hello,lyseky!',
                    type:'default',
                    position:'top',
                    duration:'2000'
                })
            },
            info () {
                this.Toast({
                    text:'hello,lyseky!',
                    type:'info',
                    position:'bottom',
                    duration:'2000'
                })
            },
            success () {
                this.Toast({
                    text:'hello,lyseky!',
                    type:'success',
                    position:'middle',
                    duration:'2000'
                })
            },
            warning () {
                this.Toast({
                    text:'hello,lyseky!',
                    type:'warning',
                    position:'middle',
                    duration:'2000'
                })
            },
            error () {
                this.Toast({
                    text:'hello,lyseky!',
                    type:'error',
                    position:'middle',
                    duration:'2000'
                })
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
