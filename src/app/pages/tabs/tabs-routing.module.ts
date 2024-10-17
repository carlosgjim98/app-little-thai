import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'carta',
        loadChildren: () => import('../carta/carta.module').then(m => m.CartaPageModule)
      },
      {
        path: 'thai-points',
      loadChildren: () => import('../thai-points/thai-points.module').then( m => m.ThaiPointsPageModule)
    },
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
    
      {
        path: 'calendar',
        loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarPageModule)
      },

      {
        path: 'test-plugins',
        loadChildren: () => import('../test-plugins/test-plugins.module').then(m => m.TestPluginsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
