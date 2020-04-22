import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DatePipe } from '@angular/common';
import { UserService } from '@app/_services';
import {FormControl, FormGroup} from '@angular/forms';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-datefilter',
  templateUrl: './datefilter.component.html',
  styleUrls: ['./datefilter.component.less']
})
export class DatefilterComponent implements OnInit {

                    columnDefs = [
                      {headerName: 'No', field: 'emp_id', width: 75, valueGetter: function(params) {
                          return params.node.rowIndex + 1;
                      } },
                      {headerName: 'ID', field: 'emp_id', sortable: true, filter: true, width: 100 },
                      {headerName: 'Name', field: 'name', sortable: true, filter: true},
                      {headerName: 'Entry Date', field: 'date',sortable: true, filter: true, width: 150,suppressMenu:true , menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab'] },
                      {headerName: 'In Time', field: 'checkin_time',sortable: true, width: 150},
                      {headerName: 'Out Time', field: 'checkout_time', width: 150},
                      {headerName: 'Total Hours', field: 'total_hours', filter: true, width: 150}, 
                      {headerName: 'City', field: "city", filter: true},
                      {headerName: 'Area', field: "area", filter: true},
                      {headerName: 'Face Recognized', field: 'face_checkin', filter: true, width: 100},
                  ];

        filterForm = new FormGroup
        ({
          fromDate: new FormControl(),
          toDate: new FormControl(),       
        });
        
        
    rowData: any;
    fromval: any;
    toval:any;
    date:any;
    isShow:any;
    

  constructor(private userService: UserService, private http: HttpClient) {  

         
   }

   ngOnInit() { 

    this.isShow = this.isShow; 

   }
  

    applyFilter() {

      this.fromval = this.filterForm.value.fromDate;
      this.toval = this.filterForm.value.toDate;

            const data =  {
                  fromVal : this.fromval,
                  toVal: this.toval
            }
        
      
          this.userService.getData(data).subscribe(myData => {             
            this.rowData = myData;
            this.isShow = !this.isShow; 
            // console.log(this.rowData);
        });

      } 

      @Input() name: string;
      @Output() changeName = new EventEmitter();

      updateName() {
        // emitting changeName custom event
        this.changeName.emit();
      }
}


