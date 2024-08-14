import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListMissingComponent } from './card-list-missing.component';

describe('CardListMissingComponent', () => {
  let component: CardListMissingComponent;
  let fixture: ComponentFixture<CardListMissingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListMissingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListMissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
