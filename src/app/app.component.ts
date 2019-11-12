import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = [{ name: 'Robert', age: 12, friends: [{ name: 'Thomas', age: '14' }] }];
}
