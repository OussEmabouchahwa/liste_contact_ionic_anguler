import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutPage } from './ajout.page';

describe('AjoutPage', () => {
  let component: AjoutPage;
  let fixture: ComponentFixture<AjoutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
