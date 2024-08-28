import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/cover-page/cover-page.module').then( m => m.CoverPagePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'cover-page',
    loadChildren: () => import('./pages/cover-page/cover-page.module').then( m => m.CoverPagePageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'idiomas',
    loadChildren: () => import('./pages/idiomas/idiomas.module').then( m => m.IdiomasPageModule)
  },
  {
    path: 'interior-chat',
    loadChildren: () => import('./pages/interior-chat/interior-chat.module').then( m => m.InteriorChatPageModule)
  },
  { 
    path: 'interior-chat/:id_chat/:nombre_chat/:ultimo_mensaje', 
    //canActivate: [AuthGuard], 
    loadChildren: () => import('./pages/interior-chat/interior-chat.module').then(m => m.InteriorChatPageModule) },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'test-plugins',
    loadChildren: () => import('./pages/test-plugins/test-plugins.module').then( m => m.TestPluginsPageModule)
  },
  {
    path: 'photo-crop',
    loadChildren: () => import('./pages/utils/photo-crop/photo-crop.module').then( m => m.PhotoCropPageModule)
  },
  {
    path: 'image-view',
    loadChildren: () => import('./pages/utils/image-view/image-view.module').then( m => m.ImageViewPageModule)
  },
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
