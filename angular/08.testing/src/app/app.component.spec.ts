import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DummyService } from './dummy.service';

describe('AppComponent', () => {
  let dummySpy: jasmine.SpyObj<DummyService>;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    dummySpy = jasmine.createSpyObj('DummyService', [
      'addTwo',
      'addPromiseTwo',
      'addFromBaseNumber'
    ]);
    dummySpy.addTwo.and.callThrough();
    dummySpy.addPromiseTwo.and.callFake((input: number) =>
      Promise.resolve(input + 2)
    );
    dummySpy.addFromBaseNumber.and.callFake((input: number) => {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          if (input < 10) {
            resolve(input + 2);
          } else {
            reject('Number should be below 10');
          }
        }, 750);
      });
    });

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: DummyService, useValue: dummySpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  describe('With a valid pouet', () => {
    it('pouet OK', async () => {
      await component.load();

      expect(dummySpy.addPromiseTwo).toHaveBeenCalledTimes(1);
      expect(component.result).toBe(7);
    });
  });

  describe('With an invalid pouet', () => {
    beforeEach(() => {
      dummySpy.addPromiseTwo.and.returnValue(Promise.reject('Pouet'));
    });

    it('pouet KO', async () => {
      component.pouet = 12;
      await component.load();

      expect(dummySpy.addPromiseTwo).toHaveBeenCalledTimes(1);
      expect(component.result).toBe(-1);
    });
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'testing'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testing');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to testing!'
    );
  }));
});
