import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestuaPage } from './testua.page';

describe('TestuaPage', () => {
  let component: TestuaPage;
  let fixture: ComponentFixture<TestuaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
