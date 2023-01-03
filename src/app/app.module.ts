import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MainpartComponent } from './mainpart/mainpart.component';
import { ButtonpartComponent } from './buttonpart/buttonpart.component';
import { SliderpartComponent } from './sliderpart/sliderpart.component';
import {MatSliderModule} from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GraphComponent } from './graph/graph.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { ChartModule, AccumulationChartModule, RangeNavigatorModule, SparklineModule, SmithchartModule, StockChartModule, BulletChartModule } from '@syncfusion/ej2-angular-charts';
import { ZoomService } from '@syncfusion/ej2-angular-charts';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpartComponent,
    ButtonpartComponent,
    SliderpartComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSliderModule,
    ReactiveFormsModule,
    HttpClientModule,
  
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    ChartModule, AccumulationChartModule, RangeNavigatorModule, SparklineModule, SmithchartModule, StockChartModule, BulletChartModule,
  ],

    
  
  providers: [ZoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
