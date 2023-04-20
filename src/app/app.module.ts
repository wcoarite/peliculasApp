import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminModule } from './admin/admin.module';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';



const appRoutes: Routes = [
  {
      path      : '**',
      redirectTo: 'sample'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),

    BrowserModule,
    AdminModule,

    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    // NgxDatatableModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
