import { Routes } from '@angular/router';
import { Page404Component } from '@shared/pages/page404/page404.component';
import { isAuthenticatedGuard } from './auth/guard/is-authenticated.guard';

export const routes: Routes = [
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
            {
                path:'success',
                title:'Success',
                data:{translate:'auth.menu.success'},
                loadComponent: ()=> import('./auth/pages/success/success.component'),
            },
            { path:'', redirectTo:'login', pathMatch:'full' },
        ]
    },
    {
        path:'dashboard',
        canActivate:[ isAuthenticatedGuard ],
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path:'overview',
                title:'Overview',
                data:{translate:'menu.overview'},
                loadComponent: () => import('./dashboard/pages/overview/overview.component')
            },
            {
                path:'students',
                title:'Students',
                data:{translate:'menu.students'},
                loadComponent: () => import('./dashboard/pages/students/students.component')
            },
            {
                path:'add-student',
                title:'Add Student',
                data:{translate:'menu.add-student'},
                loadComponent: () => import('./dashboard/pages/add-student/add-student.component')
            },
            {
                path:'teachers',
                title:'Teachers',
                data:{translate:'menu.teachers'},
                loadComponent: () => import('./dashboard/pages/teachers/teachers.component')
            },
            {
                path:'add-teacher',
                title:'Add Teacher',
                data:{translate:'menu.add-teacher'},
                loadComponent: () => import('./dashboard/pages/add-teacher/add-teacher.component')
            },
            {
                path:'add-class',
                title:'Add Class',
                data:{translate:'menu.add-class'},
                loadComponent: () => import('./dashboard/pages/add-class/add-class.component')
            },
            {
                path:'classes',
                title:'Classes',
                data:{translate:'menu.classes'},
                loadComponent: () => import('./dashboard/pages/classes/classes.component')
            },
            {
                path:'add-event',
                title:'Add Event',
                data:{translate:'menu.add-event'},
                loadComponent: () => import('./dashboard/pages/add-events/add-events.component')
            },
            {
                path:'events',
                title:'Events',
                data:{translate:'menu.events'},
                loadComponent: () => import('./dashboard/pages/events/events.component')
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
            { path:'', redirectTo:'teachers', pathMatch:'full' }
        ]
    },
    {
        path:'404',
        component:Page404Component
    },
    { path:'', redirectTo:'/auth', pathMatch:'full' },
    { path:'**', redirectTo:'/404', pathMatch:'full' }
];