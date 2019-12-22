import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Transliteration } from './editor/Transliteration';

@Injectable({
    providedIn: 'root'
})


export class ConfigService {
    constructor(private http: HttpClient) { }
    base_url = 'http://localhost:5000';

    getTransliteration( text: string ) {
        this.log('getting transliteration');
        return this
                .http
                .get<Transliteration>(`${this.base_url}/trans?word=${text}`).pipe(
                         catchError(this.handleError('transliteration', ''))
        );
    }

    private handleError(operation = 'operation', result: string ) {
        return (error: any) => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result);
        };
    }

    private log(message: string) {
        console.log(message);
    }
}
