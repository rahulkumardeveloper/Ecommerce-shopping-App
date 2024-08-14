import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';




import { LoginDailogComponent } from './login-dailog/login-dailog.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { CardComponent } from './card/card.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { RegisterSuccesesfullComponent } from './register-succesesfull/register-succesesfull.component';
import { CardListMissingComponent } from './card-list-missing/card-list-missing.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    LoginDailogComponent,
    PageNotFoundComponent,
    ServiceComponentComponent,
    CardComponent,
    ShoppingPageComponent,
    ProductDescriptionComponent,
    OrderNowComponent,
    RegisterSuccesesfullComponent,
    CardListMissingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    MatBadgeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LoginDailogComponent]
})
export class AppModule { }
