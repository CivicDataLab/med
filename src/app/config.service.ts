import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})


export class ConfigService {
    constructor(private http: HttpClient) { }
    base_url = 'http://localhost:5000';

    getTransliteration() {
        this.log('getting transliteration');
        return this
        .http
        .get(`${this.base_url}/trans?word=hello`).pipe(
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
