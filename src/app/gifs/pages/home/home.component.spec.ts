import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagesComponents } from './home.component';

describe('HomeComponent', () => {
  let component: HomePagesComponents;
  let fixture: ComponentFixture<HomePagesComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePagesComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePagesComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
