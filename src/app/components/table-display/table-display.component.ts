
import { Component ,ViewChild ,AfterViewInit,Injectable, OnInit} from '@angular/core';
import { Risk } from 'src/app/Risk';
import {LiveAnnouncer} from '@angular/cdk/a11y';
// import { MatSort,Sort} from '@angular/material/sort';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { CdkDrag, CdkDragMove, CdkDragStart, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

import {MatTableDataSource} from '@angular/material/table'

import { Input, } from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
// import {MatTableDataSource} from '@angular/material/table';






const  risks_arr:Risk[] = [

  {
    Risk_id:1,
    Risk_Category:'Reserviour damage',
    Hazards:['abc'],
    Risks:['shutdown','leak'],
    Mitigation_Status:false,
    Pre_mitigation_score:2,
    Post_mitigation_score:1,
    Barriers:['water']

  },


  {
    Risk_id:2,
    Risk_Category:'Reserviour damage',
    Hazards:['corrosion','cement failure'],
    Risks:['shutdown','leak'],
    Mitigation_Status:false,
    Pre_mitigation_score:2,
    Post_mitigation_score:1,
    Barriers:['water']

  },

  {
    Risk_id:3,
    Risk_Category:'Reserviour damage',
    Hazards:['corrosion','cement failure'],
    Risks:['shutdown','leak'],
    Mitigation_Status:false,
    Pre_mitigation_score:2,
    Post_mitigation_score:1,
    Barriers:['water']

  },

]

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css'],
 
 

})




export class TableDisplayComponent implements OnInit   {

  // dataSource = new MatTableDataSource(risks);
  dataSource !:any;
  columns: any[] = [ 
     { name: 'Risk_id' ,title:'Id' } ,   
     { name: 'Risk_Category' ,title :'Risk Category' }, 
     { name: 'Hazards' ,title : 'Hazards' } ,
       { name: 'Risks' ,title:'Risks' }, 
        { name: 'Mitigation_Status' ,title:'Mitigation Status' }, 
          { name: 'Pre_mitigation_score' ,title:'Pre Mitigation  Score' },  
          { name: 'Post_mitigation_score' ,title:'Post Mitigation Score'} , 
           { name: 'Barriers' ,title :'Barries' }
    ];
  previousIndex!:number
  displayedColumns: string[] = ['Risk_id' , 'Risk_Category','Hazards','Risks','Mitigation_Status', 'Pre_mitigation_score','Post_mitigation_score','Barriers'];
  displayedColumnsNotDrag:string[] = []
  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatSort) sort !: MatSort;
  
  
  ngOnInit() {
    this.dataSource  = new MatTableDataSource(risks_arr)
    // this.setDisplayedColumns();
    // this.dataSource.sort = this.sort;
  }
   

  tableDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }


  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}