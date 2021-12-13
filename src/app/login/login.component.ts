import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: any;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', Validators.required , Validators.email],
      password: ['', Validators.required]
    })
  }

  login() {
    let data = this.formLogin?.value;
    this.loginService.login(data).subscribe(res=>{
      console.log(res)
      localStorage.setItem('token', res.token)
      this.router.navigate(['blog'])
    })
  }
}
