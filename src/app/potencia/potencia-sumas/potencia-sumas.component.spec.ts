import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotenciaSumasComponent } from './potencia-sumas.component';

describe('PotenciaSumasComponent', () => {
  let component: PotenciaSumasComponent;
  let fixture: ComponentFixture<PotenciaSumasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PotenciaSumasComponent]
    });
    fixture = TestBed.createComponent(PotenciaSumasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
