import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  imports: [],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {

  items: Array<string> = ['item1', 'item2', 'item3'];

  private log(text: string): void {
    console.log(text)
  }

  f() {
    this.log('this is a log')
  }
}
