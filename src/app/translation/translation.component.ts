import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      srcInput: '',
      tgtInput: ''
      });
  }

  ngOnInit() {
    this.form
        .controls
        .srcInput
        .valueChanges.pipe(
            debounceTime(400),
            distinctUntilChanged()
        )
        .subscribe((data) => {
            // tslint:disable-next-line:no-console
            console.log('native fromControl value changes with debounce', data);

        });  
  }

}
