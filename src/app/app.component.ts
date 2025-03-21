import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('previewBox') previewBox!: ElementRef<HTMLDivElement>;

  primaryColor: string = '#fff';
  secondaryColor: string = '#000';

  ngAfterViewInit(): void {
    this.applyThemeColors();
  }

  onPrimaryColorChange(event: Event): void {
    this.primaryColor = (event.target as HTMLInputElement).value;
    this.applyThemeColors();
  }

  onSecondaryColorChange(event: Event): void {
    this.secondaryColor = (event.target as HTMLInputElement).value;
    this.applyThemeColors();
  }

  private applyThemeColors(): void {
    if (this.previewBox && this.previewBox.nativeElement) {
      const element = this.previewBox.nativeElement;
      element.style.backgroundColor = this.primaryColor;
      element.style.color = this.secondaryColor;
    }
  }
}
