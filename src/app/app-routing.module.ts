import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TranslationComponent } from './translation/translation.component';
import { TransliterationComponent } from './transliteration/transliteration.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'translate', component: TranslationComponent},
    { path: 'transliterate', component: TransliterationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
