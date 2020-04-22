import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpModule} from '@angular/http';


// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { DatefilterComponent } from './home/datefilter/datefilter.component'

// AgGrid
import { AgGridModule } from 'ag-grid-angular';

// Bootstrap
// import { AlertModule } from 'ngx-bootstrap';
// import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';


// Matrials
import { 
    
    MatAutocompleteModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatDatepickerModule, 
    MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, 
    MatSlideToggleModule,MatNativeDateModule, 

    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

} from '@angular/material';
// animation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';;
import { ServicesComponent } from './pages/services/services.component'
;
import { AccountsComponent } from './pages/accounts/accounts.component'// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


@NgModule({
    imports: [
        
                MatAutocompleteModule,
                CdkTableModule,
                MatButtonModule,
                CdkTreeModule,
                MatCheckboxModule,
                MatNativeDateModule,
                MatDatepickerModule,
                MatFormFieldModule,
                MatInputModule,
                MatRadioModule,
                MatSelectModule,
                MatSliderModule,
                FormsModule,
                MatSlideToggleModule,
                BrowserAnimationsModule,
                BrowserModule,
                ReactiveFormsModule,
                HttpClientModule,
                MatSliderModule,
                MatBadgeModule,
                MatBottomSheetModule,
                MatButtonToggleModule,
                MatCardModule,
                MatChipsModule,
                MatDialogModule,
                MatDividerModule,
                MatExpansionModule,
                MatGridListModule,
                MatIconModule,
                MatListModule,
                MatMenuModule,
                MatPaginatorModule,
                MatProgressBarModule,
                MatProgressSpinnerModule,
                MatRippleModule,
                MatSidenavModule,
                MatSnackBarModule,
                MatSortModule,
                MatStepperModule,
                MatTableModule,
                MatTabsModule,
                MatToolbarModule,
                MatTooltipModule,
                MatTreeModule,
                HttpModule,

        
        appRoutingModule,
        // ModalModule.forRoot(),
        AgGridModule.withComponents([])
    ],
    
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        DatefilterComponent ,
        ServicesComponent ,
        
        AccountsComponent  
    ],
    providers: [
          DatefilterComponent ,
          
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }