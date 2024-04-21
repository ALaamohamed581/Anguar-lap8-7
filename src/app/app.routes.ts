import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { auth2Guard } from './components/gurd/auth2.guard';
import { aut3Guard } from './components/gurd/aut3.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [auth2Guard],
    canDeactivate: [aut3Guard],
  },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'details/:id',

    component: DetailsComponent,
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./components/products/products.component').then(
        (obj) => obj.ProductsComponent
      ),
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'About',
    component: AboutUsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'vision' },
      { path: 'vision', component: VisionComponent },
      { path: 'values', component: ValuesComponent },
    ],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'ADDProduct',
    component: AddProductComponent,
  },
  {
    path: 'ADDProduct/:id',
    canDeactivate: [aut3Guard],
    component: AddProductComponent,
  },
  { path: '**', component: NotFoundComponent },
];
