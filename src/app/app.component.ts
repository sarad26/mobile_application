import { Component, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
import { User } from './_models';


// Dowload Page
import jsPDF from 'jspdf';
import {FileService} from './_services/file.service';
import * as fileSaver from 'file-saver';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent{

        // Dowload Page
        // @ViewChild("printarea") printarea: ElementRef;
        // makePdf() { 
        //     let doc = new jsPDF();
        //     doc.addHTML(this.printarea, function() {          
        //        doc.save("addList.pdf");
        //     });   
        //   }

        //    Print Page
    // onPrint(){
    //     // window.print();
    //     var eGridDiv = document.querySelector('#myGrid');
    //     eGridDiv.style.width = '';
    //     eGridDiv.style.height = '';
    //     this.gridApi.setDomLayout('print');
    // }

    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private fileService: FileService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    download() {
        this.fileService.downloadFile().subscribe(response => {
                let blob:any = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
                const url= window.URL.createObjectURL(blob);
                // window.open(url);
                // window.location.href = response.url;
                fileSaver.saveAs(blob, 'employees.json');
            }), error => console.log('Error downloading the file'),
                     () => console.info('File downloaded successfully');
      }
}