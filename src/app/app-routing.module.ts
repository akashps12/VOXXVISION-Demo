import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import your component files
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SoftassetsComponent } from './softassets/softassets.component';
import { OperationsComponent } from './operations/operations.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'softassets', component: SoftassetsComponent },
  { path: 'operations', component: OperationsComponent },
  // Add more routes for other pages as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
