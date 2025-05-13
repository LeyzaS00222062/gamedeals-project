import { NgModel } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";  

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GameSearchComponent } from "./components/game-search/game-search.component";
import { NgModule, NgModuleRef } from "@angular/core";

@NgModule({
    declarations:[],
    imports: [BrowserModule, FormsModule, AppComponent, GameSearchComponent],
    providers: [],
    bootstrap:[],
})

export class AppModule{

}