import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { EditorComponent } from './editor/editor.component';
import { ConfigService } from './config.service';
import { TranslationComponent } from './translation/translation.component';
import { TransliterationComponent } from './transliteration/transliteration.component';
import { TranslationService } from './Services/translation.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    EditorComponent,
    TranslationComponent,
    TransliterationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    QuillModule.forRoot()

  ],
  providers: [ConfigService, TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
