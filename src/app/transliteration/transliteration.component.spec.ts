import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransliterationComponent } from './transliteration.component';

describe('TransliterationComponent', () => {
  let component: TransliterationComponent;
  let fixture: ComponentFixture<TransliterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransliterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransliterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
