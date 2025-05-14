import { BrowserModule } from "@angular/platform-browser";  
import { FormsModule } from "@angular/forms";
import {provideHttpClient } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";



@NgModule({
    declarations:[],
    imports: [BrowserModule, FormsModule],
    providers: [provideHttpClient(), HttpClient, NgModel],
    bootstrap:[],
})

export class AppModule{

}