import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ProductComponent } from './components/product/product.component';


const appRoutes: Routes = [
  { path:'', component: ProductComponent  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}