import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Manager', name: 'Daliya' },
  { position: 'Analyst', name: 'Seeniya' },
  { position: 'Developer', name: 'Viji' },
  { position: 'Tester', name: 'John' },
  { position: 'Designer', name: 'Ryan' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular7-CRUD';
  displayedColumns: string[] = ['Name', 'Position', 'Action'];
  dataSource = ELEMENT_DATA;

  constructor() {
    console.log('jj', this.model);
  }

  model: any = {};
  addEmployee() {
    console.log('jj', ELEMENT_DATA.push(this.model));
  }
}
