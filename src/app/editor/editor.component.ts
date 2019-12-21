import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  form: FormGroup;
  backgroundColor = '';
  @ViewChild('editor', {
    static: true
  }) editor: QuillEditorComponent;

  constructor(fb: FormBuilder, private configService: ConfigService) {
    this.form = fb.group({
      editor: ['']
    });
  }

  ngOnInit() {
    this.form
      .controls
      .editor
      .valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((data) => {
        // tslint:disable-next-line:no-console
        console.log('native fromControl value changes with debounce', data);
      });
  }

  setControl() {
    this.form.setControl('editor', new FormControl('test - new Control'));
  }

  patchValue() {
    this.form.get('editor').patchValue(`${this.form.get('editor').value} patched!`);
  }

  transliterate() {
    this.configService.getTransliteration();
    this.form.get('editor').patchValue(`Transliterated content`);
  }

}
