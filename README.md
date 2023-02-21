# Angular Signals Prototype + Angular Component Router

This is a Signal-based version of [@angular-component/router](https://github.com/angular-component/router) with all usage of internal observables removed.

## Setup

```sh
yarn
```

## Serve locally

```sh
yarn nx serve my-app
```

Navigate to [http://localhost:4200](http://localhost:4200) in your browser.

## What works

- Rendering
- Parent/child routes
- Route params as a Signal
- Query params as a Signal
- Route path as a Signal

## What doesn't work

- Active route class
