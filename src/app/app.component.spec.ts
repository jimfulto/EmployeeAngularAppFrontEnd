import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));


  let component, fixture, htmlPage;



  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fed-summative-ng'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('fed-summative-ng');
  });

  it('should have multiple pages in nav bar', () => {
    fixture = TestBed.createComponent(AppComponent);

    //create an instance of our root AppComponent.
    component = fixture.componentInstance;

    // Update component with data: fixture.detectChanges
    fixture.detectChanges();

    //Get the main component HTML element: fixture.nativeElement
    htmlPage = fixture.nativeElement;
    expect(htmlPage.innerText).toContain('Employees');

  })

});
