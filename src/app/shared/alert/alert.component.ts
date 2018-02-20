import { Input, Output, Component, OnInit,EventEmitter } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {Subject} from 'rxjs/Subject';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  private _success = new Subject<string>();
  @Input() alertMessage: any;
  //@Output() alertMessageChange new EventEmitter<any>();
  
    ngOnInit(): void {
     
    }
  
    public changeAlert(msj:string , type:string) {
    }

    public alert(msj:string , type:string) {
    }

    public hideAlert() {
      //this.alertMessageChange.emit({message:null,type:null});
      this.alertMessage.message = null;
    }
}
