import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../models/user.model';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      id: [''],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  async login() {
    const response = await firstValueFrom(this.authService.loginUser(this.loginForm.value));
    if (response) {
      localStorage.setItem('authToken', 'login');
      this.router.navigate(['/units']);
    } else {
      alert('Your must login first')
    }
  }

}
