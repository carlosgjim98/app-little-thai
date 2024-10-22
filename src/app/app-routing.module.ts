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
    path: 'interior-chat/:chat_id',
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
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'reminder',
    loadChildren: () => import('./pages/reminder/reminder.module').then( m => m.ReminderPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./pages/configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'eulas',
    loadChildren: () => import('./pages/eulas/eulas.module').then( m => m.EulasPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./pages/verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'to-home',
    loadChildren: () => import('./pages/to-home/to-home.module').then( m => m.ToHomePageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./pages/add-address/add-address.module').then( m => m.AddAddressPageModule)
  },
  {
    path: 'confirm-address',
    loadChildren: () => import('./pages/confirm-address/confirm-address.module').then( m => m.ConfirmAddressPageModule)
  },
  {
    path: 'qr-scanner',
    loadChildren: () => import('./pages/qr-scanner/qr-scanner.module').then( m => m.QrScannerPageModule)
  },
  {
 
    path: 'menu-on-table',
    loadChildren: () => import('./pages/menu-on-table/menu-on-table.module').then( m => m.MenuOnTablePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'current-address',
    loadChildren: () => import('./pages/current-address/current-address.module').then( m => m.CurrentAddressPageModule)
 
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./pages/verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'to-home',
    loadChildren: () => import('./pages/to-home/to-home.module').then( m => m.ToHomePageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./pages/add-address/add-address.module').then( m => m.AddAddressPageModule)
  },
  {
    path: 'confirm-address',
    loadChildren: () => import('./pages/confirm-address/confirm-address.module').then( m => m.ConfirmAddressPageModule)
  },
  {
    path: 'qr-scanner',
    loadChildren: () => import('./pages/qr-scanner/qr-scanner.module').then( m => m.QrScannerPageModule)
  },
  {
    path: 'menu-on-table',
    loadChildren: () => import('./pages/menu-on-table/menu-on-table.module').then( m => m.MenuOnTablePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'current-address',
    loadChildren: () => import('./pages/current-address/current-address.module').then( m => m.CurrentAddressPageModule)
  },
  {
    path: 'actual-address',
    loadChildren: () => import('./pages/actual-address/actual-address.module').then( m => m.ActualAddressPageModule)
  },
  {
    path: 'start-with-address',
    loadChildren: () => import('./pages/start-with-address/start-with-address.module').then( m => m.StartWithAddressPageModule)
  },
  {
 
    path: 'alergenos',
    loadChildren: () => import('./pages/alergenos/alergenos.module').then( m => m.AlergenosPageModule)
  },
  {
  path: 'carta',
  loadChildren: () => import('./pages/carta/carta.module').then( m => m.CartaPageModule)
},
  {
    path: 'restaurant-selection',
    loadChildren: () => import('./pages/restaurant-selection/restaurant-selection.module').then( m => m.RestaurantSelectionPageModule)
  },
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
    path: 'interior-chat/:chat_id',
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
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'reminder',
    loadChildren: () => import('./pages/reminder/reminder.module').then( m => m.ReminderPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./pages/configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'eulas',
    loadChildren: () => import('./pages/eulas/eulas.module').then( m => m.EulasPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./pages/verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'to-home',
    loadChildren: () => import('./pages/to-home/to-home.module').then( m => m.ToHomePageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./pages/add-address/add-address.module').then( m => m.AddAddressPageModule)
  },
  {
    path: 'confirm-address',
    loadChildren: () => import('./pages/confirm-address/confirm-address.module').then( m => m.ConfirmAddressPageModule)
  },
  {
    path: 'qr-scanner',
    loadChildren: () => import('./pages/qr-scanner/qr-scanner.module').then( m => m.QrScannerPageModule)
  },
  {
 
    path: 'menu-on-table',
    loadChildren: () => import('./pages/menu-on-table/menu-on-table.module').then( m => m.MenuOnTablePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'current-address',
    loadChildren: () => import('./pages/current-address/current-address.module').then( m => m.CurrentAddressPageModule)
 
  },
  {
    path: 'alergenos',
    loadChildren: () => import('./pages/alergenos/alergenos.module').then( m => m.AlergenosPageModule)
  },
  {
  path: 'carta',
  loadChildren: () => import('./pages/carta/carta.module').then( m => m.CartaPageModule)
},
  {
    path: 'dish-details/:id',
    loadChildren: () => import('./pages/dish-details/dish-details.module').then( m => m.DishDetailsPageModule)
  },
  {
    path: 'thai-points',
    loadChildren: () => import('./pages/thai-points/thai-points.module').then( m => m.ThaiPointsPageModule)
  },
  {
    path: 'redeem-sauce',
    loadChildren: () => import('./pages/redeem-sauce/redeem-sauce.module').then( m => m.RedeemSaucePageModule)
  },
  {
    path: 'my-points',
    loadChildren: () => import('./pages/my-points/my-points.module').then( m => m.MyPointsPageModule)
  },
  {
    path: 'restaurant-pickup',
    loadChildren: () => import('./pages/restaurant-pickup/restaurant-pickup.module').then( m => m.RestaurantPickupPageModule)
  },
  {
 
    path: 'my-order',
    loadChildren: () => import('./pages/my-order/my-order.module').then( m => m.MyOrderPageModule)
  },
  {
    path: 'order-info',
    loadChildren: () => import('./pages/order-info/order-info.module').then( m => m.OrderInfoPageModule)
  },
  {
    path: 'order-delivered',
    loadChildren: () => import('./pages/order-delivered/order-delivered.module').then( m => m.OrderDeliveredPageModule)
  },
  {
    path: 'order-cooking',
    loadChildren: () => import('./pages/order-cooking/order-cooking.module').then( m => m.OrderCookingPageModule)
  },
  {
    path: 'order-on-the-way',
    loadChildren: () => import('./pages/order-on-the-way/order-on-the-way.module').then( m => m.OrderOnTheWayPageModule)},
  {
 
    path: 'restaurant-pickup',
    loadChildren: () => import('./pages/restaurant-pickup/restaurant-pickup.module').then( m => m.RestaurantPickupPageModule)
  },
  {
    path: 'to-home-menu',
    loadChildren: () => import('./pages/to-home-menu/to-home-menu.module').then( m => m.ToHomeMenuPageModule)
 
  },
  {
    path: 'restaurant-pickup',
    loadChildren: () => import('./pages/restaurant-pickup/restaurant-pickup.module').then( m => m.RestaurantPickupPageModule)
  },
  {
    path: 'to-home-menu',
    loadChildren: () => import('./pages/to-home-menu/to-home-menu.module').then( m => m.ToHomeMenuPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'account-settings',
    loadChildren: () => import('./pages/account-settings/account-settings.module').then( m => m.AccountSettingsPageModule)
  },
 
  {
    path: 'set-up-account',
    loadChildren: () => import('./pages/set-up-account/set-up-account.module').then( m => m.SetUpAccountPageModule)
  },
{
  path: 'addresses',
  loadChildren: () => import('./pages/addresses/addresses.module').then( m => m.AddressesPageModule)
},
 
{
  path: 'my-cards',
  loadChildren: () => import('./pages/my-cards/my-cards.module').then( m => m.MyCardsPageModule)
},
 
{
  path: 'add-new-card',
  loadChildren: () => import('./pages/add-new-card/add-new-card.module').then( m => m.AddNewCardPageModule)
},
 
{
  path: 'card-details',
  loadChildren: () => import('./pages/card-details/card-details.module').then( m => m.CardDetailsPageModule)
},
 
{
  path: 'edit-card',
  loadChildren: () => import('./pages/edit-card/edit-card.module').then( m => m.EditCardPageModule)
},
  {
    path: 'locals',
    loadChildren: () => import('./pages/locals/locals.module').then( m => m.LocalsPageModule)
  },  {
    path: 'locals-filter',
    loadChildren: () => import('./pages/locals-filter/locals-filter.module').then( m => m.LocalsFilterPageModule)
  },
  {
    path: 'locals-list',
    loadChildren: () => import('./pages/locals-list/locals-list.module').then( m => m.LocalsListPageModule)
  },

 

 
 
 
 
 
 
 
 
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 