import {Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {AboutComponent} from '../components/about/about.component';
import {CategoriesComponent} from '../components/categories/categories.component';
import {PostCardsComponent} from '../components/post-cards/post-cards.component';
import {SideMenuComponent} from '../components/side-menu/side-menu.component';
import {PostsCategoryComponent} from '../components/posts-category/posts-category.component';

export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent,
        children: [
            {
                path: '',
                component: PostCardsComponent
            },
            {
              path: ':id',
              component: PostsCategoryComponent
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: SideMenuComponent
            },
            {
                path: ':id',
                outlet: 'sidemenu',
                component: SideMenuComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];