import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  config: any;
  collection = { _count: 60,get count() {
      return this._count;
    },
set count(value) {
      this._count = value;
    },
 data: [] };
  constructor() {
 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          name: i+1,
          year: i+1,
          Phone:i+1,
          Address:i+1,
          Salary:i+1,



          value: "items number " + (i + 1)
        }
      );
    }
 
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
    };
  }
 
  pageChanged(event){
    this.config.currentPage = event;
  }

  searchText:string =name;
  title = 'app';
  isEdit = false;
  selectedPrimaryId: number;
  public id: number;
  public name: string;
  public year: number;
  public Phone: number;
  public Address: number;
  public Salary: number;
  public rows: Array<{ primaryId: number, id: number, name: string, year: number, Phone: number, Address: number ,Salary: number}> = [];
  rowsCopy = [];



  buttonClicked() {
    
    if (this.isEdit) {
      this.rows.forEach(row => {
        console.log(row);
        if (row.primaryId === this.selectedPrimaryId) {
          row.id = this.id;
          row.name = this.name;
          row.year = this.year;
          row.Phone = this.Phone;
          row.Address = this.Address;
          row.Salary = this.Salary;
     
        }
      });
      this.isEdit = false;
    } else {

      
      const randomNo = Math.random() * 10;
      this.rows.push({ primaryId: randomNo, id: this.id, name: this.name, year: this.year, Phone: this.Phone, Address: this.Address, Salary:this.Salary });
      this.rowsCopy = [...this.rows];
    }

    //if you want to clear input
   

  }
reset(){

  this.id = null;
  this.name = null;
  this.year = null;
  this.Phone = null;
  this.Address = null;
  this.Salary = null;


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

  filterData(){
    console.log(this.searchText);
    this.rows = this.rowsCopy.filter(row=>{
      return row.name.toString().toLowerCase().includes(this.searchText.toLowerCase())
    });
    console.log(this.rows);


  }

}