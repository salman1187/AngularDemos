import { Component, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; //CommonModule for Pipes
import { UpperCaseDirective } from '../directives/uppercase.directive';
import { TextFormatDirective } from '../directives/textformat.directive';
import { PasswordStrengthDirective } from '../directives/passwordstrength.directive';
import { TruncateLengthPipe } from '../Pipes/truncate-length.pipe';
import { ListProductsComponent } from './list-products/list-products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpperCaseDirective, CommonModule, TruncateLengthPipe, TextFormatDirective, PasswordStrengthDirective, ListProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
