import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuccesesfullComponent } from './register-succesesfull.component';

describe('RegisterSuccesesfullComponent', () => {
  let component: RegisterSuccesesfullComponent;
  let fixture: ComponentFixture<RegisterSuccesesfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSuccesesfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSuccesesfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
