import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftassetsComponent } from './softassets.component';

describe('SoftassetsComponent', () => {
  let component: SoftassetsComponent;
  let fixture: ComponentFixture<SoftassetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftassetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
