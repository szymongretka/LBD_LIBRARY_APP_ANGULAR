import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientTrackingRoutingModule } from './client-tracking-routing.module';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientComponent } from './client/client.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateClientComponent, EditClientComponent, ClientComponent, DeleteClientComponent],
  imports: [
    CommonModule,
    ClientTrackingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CreateClientComponent, EditClientComponent, ClientComponent, DeleteClientComponent]
})
export class ClientTrackingModule { }
