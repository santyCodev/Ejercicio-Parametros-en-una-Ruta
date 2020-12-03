import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaNumComponent } from './components/tabla-num/tabla-num.component';

const routes: Routes = [
  {
    path: "tabla/:num",
    component: TablaNumComponent    
  },
  {
    path: "tabla/:num/:term",
    component: TablaNumTermComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
