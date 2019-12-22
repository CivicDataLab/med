import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ConfigService } from '../config.service';
import { Transliteration } from './Transliteration';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
    form: FormGroup;
    @ViewChild('srcEditor', {
        static: true
    }) srcEditor: QuillEditorComponent;

    constructor(fb: FormBuilder, private configService: ConfigService) {
        this.form = fb.group({
        srcEditor: [''],
        tgtEditor: ['']
        });
    }

    ngOnInit() {
        this.form
        .controls
        .srcEditor
        .valueChanges.pipe(
            debounceTime(400),
            distinctUntilChanged()
        )
        .subscribe((data) => {
            // tslint:disable-next-line:no-console
            console.log('native fromControl value changes with debounce', data);
            this.configService.getTransliteration(`${this.form.get('srcEditor').value}`)
            .subscribe( (res: Transliteration) => {
                this.form.get('tgtEditor').patchValue(res.transliteration[0]);
            });

        });
    }

    setControl() {
        this.form.setControl('srcEditor', new FormControl('test - new Control'));
    }

    patchValue() {
        this.form.get('srcEditor').patchValue(`${this.form.get('editor').value} patched!`);
    }

    transliterate() {
        console.log(`${this.form.get('srcEditor').value}`);
        console.log(`${this.form.controls.srcEditor.value}`);
        this.configService.getTransliteration(`${this.form.get('srcEditor').value}`)
        .subscribe( (res: Transliteration) => {
            this.form.get('srcEditor').patchValue(res.transliteration[0]);
        });
        // this.form.get('editor').patchValue(`Transliterated content`);
    }

}
