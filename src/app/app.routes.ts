import { Routes } from '@angular/router';
import { Page404Component } from '@shared/pages/page404/page404.component';

export const routes: Routes = [
    {
        path:'website',
        loadComponent: () => import('./website/website.component'),
        children: [
            {
                path:'home',
                title:'Home',
                data:{translate:'website.menu.home'},
                loadComponent: () => import('./website/pages/home/home.component')
            },
            { path:'', redirectTo:'home', pathMatch:'full' }
        ]
    },
    {
        path:'auth',
        loadComponent: () => import('./auth/auth.component'),
        children: [
            {
                path:'login',
                title:'Login',
                data:{translate:'auth.menu.login'},
                loadComponent: () => import('./auth/pages/login/login.component')
            },
            {
                path:'forgot-password',
                title:'Forgot Password',
                data:{translate:'auth.menu.forgot-password'},
                loadComponent: ()=> import('./auth/pages/forgot-password/forgot-password.component'),
            },
            {
                path:'create-account',
                title:'Create Account',
                data:{translate:'auth.menu.create-account'},
                loadComponent: ()=> import('./auth/pages/create-account/create-account.component'),
            },
            { path:'', redirectTo:'login', pathMatch:'full' }
        ]
    },
    {
        path:'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path:'overview',
                title:'Overview',
                data:{translate:'menu.overview'},
                loadComponent: () => import('./dashboard/pages/overview/overview.component')
            },
            {
                path:'tournaments',
                title:'Tournaments',
                data:{translate:'menu.tournaments'},
                loadComponent: () => import('./dashboard/pages/tournaments/tournaments.component')
            },
            {
                path:'players',
                title:'Players',
                data:{translate:'menu.players'},
                loadComponent: () => import('./dashboard/pages/players/players.component')
            },
            {
                path:'tos',
                title:'Tournament Organizer',
                data:{translate:'menu.tos'},
                loadComponent: () => import('./dashboard/pages/tos/tos.component')
            },
            {
                path:'profile',
                title:'Profile',
                data:{translate:'menu.profile'},
                loadComponent: () => import('./dashboard/pages/profile/profile.component')
            },
            {
                path:'account',
                title:'Account',
                data:{translate:'menu.account'},
                loadComponent: () => import('./dashboard/pages/account/account.component')
            },
            {
                path:'new-player',
                title:'Player',
                data:{translate:'menu.new-player'},
                loadComponent: () => import('./dashboard/pages/new-player/new-player.component')
            },
            {
                path:'new-tournament',
                title:'Tournament',
                data:{translate:'menu.new-tournament'},
                loadComponent: () => import('./dashboard/pages/new-tournament/new-tournament.component')
            },
            { path:'', redirectTo:'overview', pathMatch:'full' }
        ]
    },
    {
        path:'404',
        component:Page404Component
    },
    { path:'', redirectTo:'/website', pathMatch:'full' },
    { path:'**', redirectTo:'/404', pathMatch:'full' }
];