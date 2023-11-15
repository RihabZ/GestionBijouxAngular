import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoiresComponent } from './accessoires/accessoires.component'; 
import { AddAccessoireComponent } from './add-accessoire/add-accessoire.component';
import { UpdateAccessoireComponent } from './update-accessoire/update-accessoire.component';
import { SearchAccessoireComponent } from './search-accessoire/search-accessoire.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectComponent } from './connect/connect.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AccessoireGuard } from './guard/accessoire.guard';
import { ConnectHttpComponent } from './connect-http/connect-http.component';
const routes: Routes = [
  {path: "accessoires", component : AccessoiresComponent},
 {path: "add-accessoire", component : AddAccessoireComponent ,canActivate:[AccessoireGuard]},
 {path: "updateAccessoire/:ch", component: UpdateAccessoireComponent},
 {path: "searchAccessoire", component: SearchAccessoireComponent},
 {path: "dashboard", component: DashboardComponent},
 {path: "connect", component: ConnectComponent},
 {path:"forbidden",component:ForbiddenComponent},
 {path: "connecthttp", component: ConnectHttpComponent},
 {path: "", redirectTo: "connect", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

