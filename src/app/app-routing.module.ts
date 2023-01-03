import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonpartComponent } from './buttonpart/buttonpart.component';
import { MainpartComponent } from './mainpart/mainpart.component';
import { SliderpartComponent } from './sliderpart/sliderpart.component';
import { MatSliderModule } from '@angular/material/slider';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  { path: 'home', component: MainpartComponent },
  { path: 'button', component: ButtonpartComponent},
  { path: 'slider', component: SliderpartComponent},
  { path: 'graph', component: GraphComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
