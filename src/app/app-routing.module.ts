import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookedStorageComponent } from './booked-storage/booked-storage.component';
import { SearchResultsComponent } from './search-results/search-results.component';


const routes: Routes = [
 {path:'booked-storage',component:BookedStorageComponent} ,
 {path:'search', component:SearchResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }