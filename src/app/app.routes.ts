import { Routes } from '@angular/router';
import { GameSearchComponent } from './components/game-search/game-search.component';
import { GameGalleryComponent } from './components/game-gallery/game-gallery.component';
import { GameWishlistComponent } from './components/game-wishlist/game-wishlist.component';
import { GameAboutComponent } from './components/game-about/game-about.component';

export const routes: Routes = [
    {path:'',component:GameSearchComponent},
    {path:'gallery',component:GameGalleryComponent},
    {path:'wishlist',component:GameWishlistComponent},
    {path:'about', component:GameAboutComponent}
];
