import { Component } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'my-dialog',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class Dialog {
  constructor(public dialogRef: MdDialogRef<Dialog>){}
}
