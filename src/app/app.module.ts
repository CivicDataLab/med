import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { EditorComponent } from './editor/editor.component';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QuillModule.forRoot()

  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
