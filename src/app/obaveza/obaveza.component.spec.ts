import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObavezaComponent } from './obaveza.component';

describe('ObavezaComponent', () => {
  let component: ObavezaComponent;
  let fixture: ComponentFixture<ObavezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObavezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObavezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
