import { NgModule } from "@angular/core";

import { ContardorComponent } from "./contador/contador.component";


@NgModule({
    declarations: [
        ContardorComponent
    ],
    exports: [
        ContardorComponent
    ],
    imports: [
       //CommonModule
        
    ]
})
export class ContadorModule {}