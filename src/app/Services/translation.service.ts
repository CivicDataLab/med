import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Translation } from '../translation/Translation';

@Injectable({
  providedIn: 'root'
})

export class TranslationService {

  constructor(private http: HttpClient) { }

  base_url = 'http://localhost:5000';

  getTranslation ( text: string ) {
    return this
                .http
                .get<Translation>(`${this.base_url}/lookup?word=${text}`);
  }
}
