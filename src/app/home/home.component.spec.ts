import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should fetch user',()=>{
    const mockData = {
      "name":"Mateusz Filipiuk",
      "age": 34,
      "city": "Warsaw",
      "country": "Poland",
      "photo":"assets/img/user.jpg"
  };
    const req = httpTestingController.expectOne('assets/user.json');
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
    expect(component.user.name).toEqual('Mateusz Filipiuk');

  });

});
