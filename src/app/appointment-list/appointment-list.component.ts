import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { StandaloneSharedModules } from '../shared/Standalone-shared';
@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: StandaloneSharedModules,
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = []

  addAppointment():void{
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();
    }
  }

  deleteAppointment(index: number):void{
    this.appointments.splice(index, 1);
  }
}
