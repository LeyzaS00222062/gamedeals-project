import { Routes, RouterLink, RouterLinkActive, provideRouter } from '@angular/router';
import { GameSearchComponent } from './components/game-search/game-search.component';
import { GameGalleryComponent } from './components/game-gallery/game-gallery.component';
import { GameWishlistComponent } from './components/game-wishlist/game-wishlist.component';
import { GameAboutComponent } from './components/game-about/game-about.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


export const routes: Routes = [
    {path:'',component:GameSearchComponent},
    {path:'gallery',component:GameGalleryComponent},
    {path:'wishlist',component:GameWishlistComponent},
    {path:'about', component:GameAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { 
  
}

