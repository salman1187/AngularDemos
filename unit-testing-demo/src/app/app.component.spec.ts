import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from "./app.component";
import { By } from '@angular/platform-browser';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [AppComponent],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have the 'unit-testing-demo' title`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('unit-testing-demo');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('h1')?.textContent).toContain('Hello, unit-testing-demo');
//   });
// });

// AAA -> Arrangement, Act, Assert

describe('App Component Tests', () => {
    let target: AppComponent|null;
    let fixture: ComponentFixture<AppComponent>;
    let compInstance: AppComponent;

    beforeEach(() => {
      target = new AppComponent();
      fixture = TestBed.createComponent(AppComponent);
      compInstance = fixture.componentInstance;
    })
    afterEach(() => {
      target = null;
    })


    it('should create component', () => {
      expect(target!).toBeTruthy();
    })
    it('findSum() should calculate sum of two numbers', () => {
      let a = 1;
      let b = 2;
      let correct = 3;
      // let target = new AppComponent();
      spyOn(target!, "saveResult");

      let actual = target!.findSum(a, b);
      expect(actual).toBe(correct);

    })
    it('findSum() should call saveResult()', () => {
      // let target = new AppComponent();
      spyOn(target!, "saveResult");
      target!.findSum(1,1);

      expect(target!.saveResult).toHaveBeenCalled();
    })
    it('title should be rendered in template', () => {
      fixture.detectChanges();

      let h1Element: HTMLElement = fixture.debugElement.query(By.css('h1')).nativeElement;
      let content = h1Element.innerHTML;

      expect(content).toBe(compInstance.title);
    })
    it('should increase counter value on clicking increase button', () => {
      let button = fixture.debugElement.query(By.css('button'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();

      let pElement: HTMLElement = fixture.debugElement.query(By.css('p')).nativeElement;
      let content = pElement.innerHTML;

      expect(content).toBe("Counter: 1")
    })
    it('should disable button when counter value is 10 or more', () => {
      compInstance.counter = 10;
      fixture.detectChanges();
      const button = fixture.nativeElement.querySelector('button');
      expect(button.disabled).toBeTruthy();
    }) 
})
