# Reusability

## Angular Libraries

Create Library:

```
ng generate library my-lib
```

Build Library:

```
ng build my-lib
```

[Angular Library Docs](https://angular.io/guide/libraries)

### Publish to NPM

[Publish to NPM](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)

---

## Schematics

[Schematics Overview](https://angular.io/guide/schematics)

[Schematics Starter with Sandbox](https://github.com/schuchard/schematic-starter)

[Schematics Best Practices](https://brenden.codes/posts/angular-schematics-best-practices/)

[AST Explorer](https://astexplorer.net/)

### Advanced Examples

[Adding Jest](https://github.com/briebug/jest-schematic)

[Schematics Prettier](https://github.com/schuchard/prettier-schematic)

[Scaffolding a Service](https://github.com/brandonroberts/ac2019-schematics)

### Getting Started

Install Schematics CLI:

```
npm i -g @angular-devkit/schematics-cli
```

Create a Schematics Project:

```
schematics blank --name=hello
```

Add another Schematic to the same project (from inside the folder):

```
schematics blank --name=helloparam
```

Build & Run Schematics locally:

```
npm run build
schematics .:hello --dry-run false
schematics .:helloparam --name li --greeting Ahoj --dry-run false
schematics .:hello-component --name mycomp --greeting servus --debug false
```

Generate Sandbox from within Schematics project:

```
ng new sandbox
```

Update Scripts:

```
"scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "npm run sandbox:ng-add && npm run test:sandbox",
    "clean": "git checkout HEAD -- sandbox && git clean -f -d sandbox",
    "link:schematic": "npm link && cd sandbox && npm link hello",
    "launch:hello": "cd sandbox && ng g hello:hello",
    "launch:helloparam": "cd sandbox && ng g hello:helloparam --name li --greeting Ahoj --dry-run false"
  },
```

Run in Sandbox:

```
npm run launch:hello
```

---

## Monorepos & Nx

[Nx Home](https://nx.dev/angular)

[Nx CLI](https://nx.dev/web/guides/cli)

[Getting Started](https://nx.dev/angular/getting-started/getting-started)

### Scaffolding

Install, Create Workspace, Add Angular:

```typescript
npm i -g @nrwl/schematics @nrwl/cli
create-nx-workspace ngDemoAppWS
cd ng-demo-app-ws
ng add @nrwl/angular
```

Or use the Fast Track:

```typescript
npx create-nx-workspace@latest ngDemoAppWS
cd ng-demo-app-ws
ng add @nrwl/angular
```

Add two projects:

```typescript
ng g @nrwl/angular:app ngDemoUI --e2e-test-runner=cypress --unit-test-runner=jest
ng g @nrwl/angular:app OtherApp
```

### Button Implementation

Add a lib project & a button component to it:

```typescript
ng g @nrwl/angular:lib ux-system
ng g component uxButton --project=ux-system --export --selector=ux-button
```

Add Material to nx workspace:

```
npm install -S @angular/material @angular/cdk @angular/flex-layout @angular/animations hammerjs
```

Add Material to apps\ng-demo-ui & apps\other-app

```
ng add @angular/material
```

Implement the MaterialModule:

> Note: Just copy a current Module from any Material Sample

Implement the Button:

_.ts & _.html

```typescript
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ux-button',
  templateUrl: './ux-button.component.html',
  styleUrls: ['./ux-button.component.scss']
})
export class UxButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() label = '';
  @Input() icon: string;
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  buttonClicked() {
    this.onClick.emit();
  }
}
```

```html
<button mat-raised-button (click)="buttonClicked()" [disabled]="disabled">
  <mat-icon>{{ icon }}</mat-icon>
  <span fxHide.lt-lg>{{ label }}</span>
</button>
```

Export the button:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UxButtonComponent } from './ux-button/ux-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UxButtonComponent],
  exports: [UxButtonComponent]
})
export class UxSystemModule {}
```

Use the Button in the two projects:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { UxSystemModule } from '@ng-demo-app-ws/ux-system';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UxSystemModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Add it to App Component

```html
<ux-button
  [icon]="'bug_report'"
  [label]="'Report Bug'"
  (onClick)="doClick()"
></ux-button>
```

```typescript
export class AppComponent {
  title = 'ng-demo-ui';

  doClick() {
    console.log('you clicked');
  }
}
```

Test the Button:

```
ng serve ng-demo-ui
```

Show Dependency Graph

```
nx dep-graph
```

# Bazel

[Bazel Home](https://bazel.angular.io/)
