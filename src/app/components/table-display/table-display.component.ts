
import { Component ,ViewChild ,AfterViewInit,Injectable, OnInit} from '@angular/core';
import { Risk } from 'src/app/Risk';
// import {LiveAnnouncer} from '@angular/cdk/a11y';
// import { MatSort,Sort} from '@angular/material/sort';
import {MatSort, Sort} from '@angular/material/sort';
import { CdkDrag,CdkDragMove, CdkDragStart, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';


import { Input, } from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import { ApiServiceService } from 'src/app/service/api-service.service';
// import {MatTableDataSource} from '@angular/material/table';

// import { CdkDrag } from '@angular/cdk/drag-drop';




const  risksData:Risk[] = [

  {
    RiskId:1,
    RiskCategory:'Reserviour damage',
    Hazards:['abc'],
    Risks:['shutdown','leak'],
    MitigationStatus:false,
    PreMitigationScore:2,
    PostMitigationScore:1,
    Barriers:['water']

  },


  {
    RiskId:2,
    RiskCategory:'Reserviour damage',
    Hazards:['abc','pqr'],
    Risks:['shutdown','leak'],
    MitigationStatus:false,
    PreMitigationScore:2,
    PostMitigationScore:1,
    Barriers:['water','fire']

  },

  {
    RiskId:3,
    RiskCategory:'Reserviour damage',
    Hazards:['abc'],
    Risks:['shutdown','leak'],
    MitigationStatus:false,
    PreMitigationScore:2,
    PostMitigationScore:1,
    Barriers:['water', 'acid']

  },

  {
    RiskId:4,
    RiskCategory:'Reserviour damage',
    Hazards:['abc'],
    Risks:['shutdown','leak'],
    MitigationStatus:false,
    PreMitigationScore:2,
    PostMitigationScore:1,
    Barriers:['water', 'acid']

  },

  {
    RiskId:5,
    RiskCategory:'Reserviour damage',
    Hazards:['abc'],
    Risks:['shutdown','leak'],
    MitigationStatus:false,
    PreMitigationScore:2,
    PostMitigationScore:1,
    Barriers:['water', 'acid']

  },

  {
    RiskId:6,
    RiskCategory:'Reserviour damage',
    Hazards:['abc'],
    Risks:['shutdown','leak'],
    MitigationStatus:false,
    PreMitigationScore:2,
    PostMitigationScore:1,
    Barriers:['water', 'acid']

  },

]

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css'],
  
 
 

})




export class TableDisplayComponent implements OnInit,AfterViewInit  {

  // dataSource = new MatTableDataSource(risks);
  risksArr !:Risk[]
dataSource  = new MatTableDataSource(risksData)

  // constructor(private ApiService:ApiServiceService){

  //   this.ApiService.getAllData().subscribe((res)=>{
  //     this.risksArr = res;
  //     console.log(res);
  //     this.dataSource = new MatTableDataSource<Risk>(this.risksArr)

  //   })
  // }
  


  
  

  @ViewChild(MatSort) sort !:MatSort;
  @ViewChild(MatPaginator)paginator!:MatPaginator;

  ngOnInit() {
    
    console.log(this.dataSource);
    // this.dataSource.sort= this.sort;
    // this.dataSource.paginator= this.paginator;
     
   }

   ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }


  
    
  
  displayedColumns: string[] = ['RiskId' , 'RiskCategory','Hazards','Risks','MitigationStatus', 'PreMitigationScore','PostMitigationScore','Barriers'];
  
 
  
  drop(event:CdkDragDrop<string[]>){
    console.log("item from",event.previousIndex);
    console.log("item to" ,event.currentIndex);
    
    moveItemInArray(this.displayedColumns,event.previousIndex,event.currentIndex)
  }
 
}