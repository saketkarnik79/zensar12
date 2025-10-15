import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
//import { HelloWorld } from './app/hello-world/hello-world';

bootstrapApplication(App, appConfig)
  //.then(() => bootstrapApplication(HelloWorld))
  .catch((err) => console.log(err.message));
