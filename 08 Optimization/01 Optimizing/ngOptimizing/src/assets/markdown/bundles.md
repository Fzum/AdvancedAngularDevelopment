Investigate `package.json`:

```
 "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "withdb": "concurrently \"json-server --watch db.json\" \"ng serve\"",
    "build:stats": "ng build --statsJson",
    "analyze": "webpack-bundle-analyzer ./dist/ngDemoApp/stats-es2015.json -p 5010"
  },
```

Run `build:stats` and `analyze` using `npm run`. Find Moment.js ... Could be replaced by date-fns -> smaller in size
