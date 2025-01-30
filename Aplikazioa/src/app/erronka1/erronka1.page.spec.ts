import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErronkaPage } from './erronka1.page';

describe('ErronkaPage', () => {
  let component: ErronkaPage;
  let fixture: ComponentFixture<ErronkaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ErronkaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
