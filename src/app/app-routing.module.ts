import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LinkPageComponent } from './pages/link-page/link-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, title:"EXCHANGE"},
  {path: 'contacts', component: ContactsPageComponent, title:"Contact Me to hire"},
  {path: '**', component: ErrorPageComponent, title:"Error"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
