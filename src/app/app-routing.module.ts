import {RouterModule, Routes} from "@angular/router";
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";
import {NgModule} from "@angular/core";

const appRoutes: Routes =[
  {path:'page2',component:Page2Component},
  {path:'',component:Page1Component},
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
