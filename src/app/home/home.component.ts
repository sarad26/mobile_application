import { Component} from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
// import {DatefilterComponent} from './datefilter/datefilter.component'

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {



    loading = false;
    users: User[];
    
    // AgGrid
    
    private gridApi;
    private gridColumnApi;
    private columnDefs;
    private sortingOrder;

    rowData: any;

    constructor(private router: Router,private userService: UserService, private http: HttpClient) { 

        this.columnDefs=[
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
                headerName: 'Total Hours', field: 'total_hours', filter: true, width: 150
            }, 
            {
                headerName: 'City', field: "city", filter: true, width: 150
            },
            {
                headerName: 'Area', field: "area", filter: true, width: 150
            },
            {
                headerName: 'Face Recognized', field: 'face_checkin', filter: true, width: 100
            },
        ]
    }

    onGridReady(params){
        // this.gridApi = params.api;
        // this.gridColumnApi = params.columnApi;
        // this.http.get('http://54.244.214.210:8000/report/'){
        //         .subscribe(data=>{
        //             params.api.setRowData(datavalue);
        //         })
        // }
        // this.userService.getData().pipe().subscribe(myData => { 
        //     this.rowData = myData;
        // }); 
    }

   

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });

        // AgGrid
        this.userService.getData().pipe().subscribe(myData => { 
            this.rowData = myData;
        }); 
    }
    myname = 'Gowtham';
    onchangeName() {
    this.myname = 'Angular';
  }
}