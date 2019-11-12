import { Component } from '@angular/core';
import { TableOptions, TextOptions } from './data-table/editable-value/editable-type';
import { TableInsert, TableUpdate, TableDelete } from './data-table/data-table/data-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = [{
    name: 'daniel',
    age: 25,
    hobbies: ['chess', 'swimming', 'running'],
    activities: [
      { name: 'sightseeing', date: new Date(), location: { city: 'cluj', street: 'republicii' } },
    ],
    married: true,
  }];

  options = new TableOptions();

  constructor() {
    const activitiesOptions = new TableOptions();

    const hobbiesOptions = new TableOptions();
    hobbiesOptions.cancel = false;

    const textOptions = new TextOptions();
    textOptions.options = ['running', 'swimming', 'biking', 'chess', 'tennis'];

    hobbiesOptions.columnTypes = [
      { name: 'name', type: 'Text', options: textOptions }
    ];

    this.options.columnTypes = [
      { name: 'name', type: 'Text' },
      { name: 'age', type: 'Number' },
      { name: 'married', type: 'Boolean' },
      { name: 'activities', type: 'Table', options: activitiesOptions },
      { name: 'hobbies', type: 'Array', options: hobbiesOptions }
    ];
  }

  onModification(modification: any) {
    if (modification instanceof TableInsert) {
      console.log('the rows ', modification.rows, ' was inserted');
    }
    if (modification instanceof TableUpdate) {
      console.log('the column ', modification.column, ' in row ', modification.row, ' was updated to', modification.value);
    }
    if (modification instanceof TableDelete) {
      console.log('the rows ', modification.rows, ' was inserted');
    }
  }

}
