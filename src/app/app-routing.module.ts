import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeshopComponent } from './conponents/coffeeshop/coffeeshop.component';
const routes: Routes = [
  {path: 'shop', component: CoffeeshopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
