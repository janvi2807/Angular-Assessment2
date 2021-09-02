import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirsComponent } from './firs/firs.component';
import { SecondComponent } from './second/second.component';
const routes: Routes = [

  { path: '', redirectTo:'firs', pathMatch: 'full' },
  { path: 'firs', component: FirsComponent},
  { path: 'Second', component: SecondComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
