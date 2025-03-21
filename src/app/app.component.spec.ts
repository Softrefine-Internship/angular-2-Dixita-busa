import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have color picker elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(
      'Theme Customizer'
    );
    expect(compiled.querySelector('#primaryColor')).toBeTruthy();
    expect(compiled.querySelector('#secondaryColor')).toBeTruthy();
  });

  it('should update colors when input values change', () => {
    component.ngAfterViewInit();
    fixture.detectChanges();

    const primaryColorInput = fixture.nativeElement.querySelector(
      '#primaryColor'
    ) as HTMLInputElement;
    const secondaryColorInput = fixture.nativeElement.querySelector(
      '#secondaryColor'
    ) as HTMLInputElement;

    primaryColorInput.value = '#fff';
    primaryColorInput.dispatchEvent(new Event('input'));

    secondaryColorInput.value = '#000';
    secondaryColorInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.primaryColor).toBe('#fff');
    expect(component.secondaryColor).toBe('#000');
  });
});
