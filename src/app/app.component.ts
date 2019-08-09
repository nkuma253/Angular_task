import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  isEdit = false;
  selectedPrimaryId: number;
  public id: number;
  public name: string;
  public year: number;
  public Phone: number;
  public Address: number;
  public rows: Array<{ primaryId: number, id: number, name: string, year: number, Phone: number, Address: number }> = [];

  buttonClicked() {
    // if(this.id = "", this.name = '',  this.year = ''){


    // }
    if (this.isEdit) {
      this.rows.forEach(row => {
        console.log(row);
        if (row.primaryId === this.selectedPrimaryId) {
          row.id = this.id;
          row.name = this.name;
          row.year = this.year;
          row.Phone = this.Phone;
          row.Address = this.Address;
        }
      });
      this.isEdit = false;
    } else {
      const randomNo = Math.random() * 10;
      this.rows.push({ primaryId: randomNo, id: this.id, name: this.name, year: this.year, Phone: this.Phone, Address: this.Address });
    }

    //if you want to clear input
   

  }
reset(){

  this.id = null;
  this.name = null;
  this.year = null;
  this.Phone = null;
  this.Address = null;


}


  buttondelete(index) {
    this.rows.splice(index, 1);
  }
  edit(row) {
    this.isEdit = true;
    this.selectedPrimaryId = row.primaryId;
    this.id = row.id;
    this.name = row.name;
    this.year = row.year;
    this.Phone = row.Phone;
    this.Address = row.Address;
  }

}