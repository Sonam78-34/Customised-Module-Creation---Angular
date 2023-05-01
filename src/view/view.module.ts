import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCustomComponentComponent } from './view-custom-component/view-custom-component.component';


@NgModule({
  declarations: [ViewCustomComponentComponent],
  imports: [ CommonModule ] ,
  exports : [ ViewCustomComponentComponent]
})
export class ViewModule { }
