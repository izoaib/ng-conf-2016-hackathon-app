import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {bodycomponent} from './body';

@Component({
  selector: 'app',
  template: `
  	<h1>{{title}}</h1>  
    <body-app></body-app>     
  `,directives:[bodycomponent]
})
export class App {
  title:string='Countries & Capitals'; 
}


bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
