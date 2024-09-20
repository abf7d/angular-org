import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TopNavLayoutComponent } from './components/top-nav-layout/top-nav-layout.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // {
    //     path: 'home',
    //     component: HomeComponent,
    // },
    {
        path:'home',
        component: TopNavLayoutComponent,
        children: [
            {
                path: '',
                component: HomeContentComponent
            }
        ]
    },
    {
        path:'learn-more',
        component: TopNavLayoutComponent,
        children: [
            {
                path: '',
                component: LearnMoreComponent
            }
        ]
    }
];
