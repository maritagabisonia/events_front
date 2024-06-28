import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { AdminService } from '../../services/admin.service';
import { Event } from '../../models/events';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [TableModule, DialogModule, RippleModule, ButtonModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, InputTextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, RatingModule, FormsModule, InputNumberModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  productDialog: boolean = false;

  events: Event[] = [];

  event!: Event;

  selectedEvents!: Event[] | null;

  submitted: boolean = false;

  statuses!: any[];

  constructor(private eventService: AdminService) { }

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





}
