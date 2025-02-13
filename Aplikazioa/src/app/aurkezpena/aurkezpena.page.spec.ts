import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AurkezpenaPage } from './aurkezpena.page';

describe('AurkezpenaPage', () => {
  let component: AurkezpenaPage;
  let fixture: ComponentFixture<AurkezpenaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AurkezpenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
