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
}
