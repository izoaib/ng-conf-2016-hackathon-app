import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';


@Component({
  selector: 'body-app',
  template: `  
    <br><hr>
    {{body}}    
  `,
})
export class bodycomponent { 
  body:string='Hello';
}