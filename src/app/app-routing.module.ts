import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardListMissingComponent } from './card-list-missing/card-list-missing.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegisterSuccesesfullComponent } from './register-succesesfull/register-succesesfull.component';
// import { ServiceComponentComponent } from './service-component/service-component.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  { path: 'shoppingPage',component: ShoppingPageComponent },
  { path: 'productDescription', component: ProductDescriptionComponent},
  { path: 'reactiveform', component: ReactiveFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'card', component: CardComponent },
  {path:'orderNow',component:OrderNowComponent},
  {path:'registerSuccessfull',component:RegisterSuccesesfullComponent},
  {path:'cardListMissing',component:CardListMissingComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
