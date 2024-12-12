import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { StandaloneSharedModules } from '../shared/Standalone-shared';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: StandaloneSharedModules,
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = []

  ngOnInit(): void {
    this.appointments = JSON.parse(localStorage.getItem("appointments") ?? "[]");
  }

  addAppointment(): void {
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(index: number): void {
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }
}
