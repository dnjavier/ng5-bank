import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'change-pass',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  previousPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  
  constructor(){ }

  ngOnInit() {
  }
}
