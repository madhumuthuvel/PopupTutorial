import { Component } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {Dialog} from './popups/popups.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'popup app';
  dialogRef: MdDialogRef<Dialog>;

  constructor(public dialog: MdDialog){
    this.openDialog();
  }

  openDialog(){
    this.dialogRef = this.dialog.open(Dialog);
    this.dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    })
  }
}
