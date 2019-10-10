# Angular Universal

[Angular Universal](https://angular.io/guide/universal)

## Getting Started:

Projectname: `ngSSR`

Add Universal:

```
ng add @nguniversal/express-engine --clientProject ngSSR
```

Build Universal:

- Client Build:

```
ng build --prod
```

- Server Build:

```
npm run ngSSR:server:production --bundleDependencies all
```

Run Universal:

```
npm run serve:ssr
```
