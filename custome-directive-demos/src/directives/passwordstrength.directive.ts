import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    standalone:true,
  selector: '[PasswordStrength]'
})
export class PasswordStrengthDirective {
  constructor(private el: ElementRef) { }

  @HostListener('input') onInput() {
    const password: string = this.el.nativeElement.value;
    const strength = this.calculateStrength(password);
    this.updateStrengthIndicator(strength);
  }

  private calculateStrength(password: string): string {
    let lower = 0;
    let upper = 0;
    let symbol = 0;
    for(let i=0; i<password.length; i++){
        if(password[i] >= 'A' && password[i] <= 'Z')
            upper += 1;
        else if(password[i] >= 'a' && password[i] <= 'z')
            lower += 1;
        else 
            symbol += 1;
    }

    if (password.length < 6) {
      return 'Weak';
    } else if (password.length < 10 && upper > 0 && symbol < 1) {
      return 'Medium';
    } else if (password.length > 10 && upper > 0 && symbol > 1){
      return 'Strong';
    }
    else 
    return 'Enter one lowercase, uppercase, and one number/symbol';
  }

  private updateStrengthIndicator(strength: string): void {
    // Update an element on the page to display the password strength
    const strengthIndicator: HTMLElement|null = document.getElementById('password-strength');
    if (strengthIndicator) {
      strengthIndicator.innerText = `Password Strength: ${strength}`;
    }
  }
}
