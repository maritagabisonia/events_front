import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Event } from '../../models/events';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule, CalendarModule, FloatLabelModule, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  productDialog: boolean = false;

  events: Event[] = [];

  event!: Event;

  selectedEvents!: Event[] | null;

  submitted: boolean = false;

  statuses!: any[];

  filterForm = this.fb.group({
    start_date: ['', Validators.required,],
    end_date: ['', Validators.required,]
  })

  constructor(private eventService: AdminService, private fb: FormBuilder) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      console.log("API CALL ENDED");
      console.log(data);

      this.eventService.EventsList = data;
      this.events = data;
    }
    );
  }

  openNew() {
    this.submitted = false;
    this.productDialog = true;
  }
  delete(id: number): void {
    this.eventService.deleteEvent(id).subscribe(data => {
      this.eventService.getEvents().subscribe(data => {
        console.log("API CALL ENDED");
        console.log(data);

        this.eventService.EventsList = data;
        this.events = data;
      }
      );
    }
    );

  }
  filter() {
    const start_date_str = this.filterForm.value.start_date;
    const end_date_str = this.filterForm.value.end_date;

    if (start_date_str && end_date_str) {
      const start_date = new Date(start_date_str);
      const end_date = new Date(end_date_str);

      this.eventService.filterEvents(start_date, end_date).subscribe(data => {
        console.log("Filtered events:", data);
        this.events = data;
      });
    } else {
      this.eventService.getEvents().subscribe(data => {
        console.log("API CALL ENDED");
        console.log(data);
        this.events = data;
      });
    }
  }


}
