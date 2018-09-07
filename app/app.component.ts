import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ng-app',
  templateUrl: 'app.template.html'
})

export class AppComponent {
  appName: string = "My first CRUD Angular 2 app";
}
