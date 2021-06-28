import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListVisitorsComponent } from './list-visitors/list-visitors.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddVisitorsComponent } from './add-visitors/add-visitors.component';
import { DetailVisitorsComponent } from './detail-visitors/detail-visitors.component';
import { UpdateVisitorsComponent } from './update-visitors/update-visitors.component';


const routes: Routes = [
  { path: 'list-visitors', component: ListVisitorsComponent},
  { path: 'add-visitors', component: AddVisitorsComponent},
  { path: 'detail-visitors', component: DetailVisitorsComponent},
  { path: 'update-visitors', component: UpdateVisitorsComponent}
]
@NgModule({
  declarations: [ListVisitorsComponent, AddVisitorsComponent, DetailVisitorsComponent, UpdateVisitorsComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class VisitorsModule { }
