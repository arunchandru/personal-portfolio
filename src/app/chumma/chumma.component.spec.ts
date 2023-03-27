import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChummaComponent } from './chumma.component';

describe('ChummaComponent', () => {
  let component: ChummaComponent;
  let fixture: ComponentFixture<ChummaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChummaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChummaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
