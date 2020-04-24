import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DatePipe } from '@angular/common';
import { UserService, AuthenticationService } from '@app/_services';
import {FormControl, FormGroup} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
// import { AuthenticationService } from '../../_services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-datefilter',
  templateUrl: './datefilter.component.html',
  styleUrls: ['./datefilter.component.less']
})


export class DatefilterComponent implements OnInit {
  
  datelive = new FormControl(new Date());
  
  // serializedDate = new FormControl((new Date()).toISOString());

                    columnDefs = [
                      {
                          headerName: 'Sl.No',
                          width: 70,
                          sortingOrder:[ "asc", "desc" ],valueGetter: function(params) {
                                      return params.node.rowIndex + 1;
                              } 
                      },
                      { 
                          headerName: 'Emp Id', field: 'emp_id', sortable: true, filter: true, width: 90 
                      },
                      {
                          headerName: 'Name', field: 'name', sortable: true, filter: true 
                      },
                      {
                          headerName: 'Entry Date', field: 'date',sortable: true, filter: true, width: 150 
                      },
                      {
                          headerName: 'In Time', field: 'checkin_time',sortable: true, width: 150
                      },
                      {
                          headerName: 'Out Time', field: 'checkout_time', width: 150
                      },
                      {
                          headerName: 'Total Hours', field: 'total_hours', filter: true, width: 100
                      },
                      {
                          headerName: 'Login Kit', field: 'city', filter: true, width: 150
                      },  
                      {
                          headerName: 'City', field: "city", filter: true, width: 100
                      },
                      {
                          headerName: 'Area', field: "area", filter: true, width: 100
                      },
                      {
                          headerName: 'Face Recognized', field: 'face_checkin', filter: true, width: 100
                      },
                  ]

        filterForm = new FormGroup
        ({
          fromDate: new FormControl(),
          toDate: new FormControl(),       
        });
        
        
    rowData: any;
    fromval: any;
    toval:any;
    date:any;
    start_date:any;
    end_date:any;
    datefor:any;
    firstDay:any;
    getfirstday:any;


  constructor(
      private userService: UserService, 
      private http: HttpClient, 
      private datepipe: DatePipe,
      private authenticationService: AuthenticationService,
      private router: Router,
      ) { 
     
   }

   
  //  mylivedate  = this.datepipe.transform(this.datelive, 'yyyy-MM-dd');
  

   ngOnInit() { 

    this.datefor = new Date();
    this.firstDay = new Date(this.datefor.getFullYear(), 
                    this.datefor.getMonth(), 1);
    this.getfirstday = this.datepipe.transform(this.firstDay, 'MM/dd/yyyy');

    this.userService.getDatacurrent().pipe().subscribe(myData => { 
      this.rowData = myData;
  }); 

   }

        logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
      }
  
      

    applyFilter() {
      

      
      this.start_date = this.filterForm.value.fromDate;
      this.end_date = this.filterForm.value.toDate;


      this.fromval = this.datepipe.transform(this.start_date, 'yyyy-MM-dd');
      this.toval = this.datepipe.transform(this.end_date, 'yyyy-MM-dd');
            const data =  {
                  myfrmdate : this.fromval,
                  mytoval: this.toval
            }
            if(this.fromval == null){
              alert("Hi Admin, Please select your From Date");
              return false;
            }
            // if(this.toval == null){
            //   alert("Hi Admin, Please select your To Date");
            //   return false;
            // }

          // if( this.fromval != null && this.toval != null){
          //   document.getElementById("loader").style.display = "block";
          //       this.userService.getDatafilter(data).subscribe(myData => {             
          //         this.rowData = myData;
          //         document.getElementById("loader").style.display = "none";
          //     });
          // }
          this.userService.getDatafilter(data).subscribe(myData => {             
                    this.rowData = myData;
                    document.getElementById("loader").style.display = "none";
                });
      } 

      @Input() name: string;
      @Output() changeName = new EventEmitter();

      updateName() {
        // emitting changeName custom event
        this.changeName.emit();
      }
}


