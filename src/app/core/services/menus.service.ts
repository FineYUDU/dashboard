import { Injectable, signal } from '@angular/core';

import { NavMenu } from '@shared/interfaces/nav.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  
  public navigationMenu = signal<NavMenu[]>([
    {
      icon:'icon-overview',
      txt:'menu.overview',
      router:'overview',
    },
    {
      icon:'icon-teachers',
      txt:'menu.teachers',
      router:'teachers',
    },
    {
      icon:'icon-students',
      txt:'menu.students',
      router:'students',
    },
    {
      icon:'icon-classes',
      txt:'menu.classes',
      router:'classes',
    },
    {
      icon:'icon-events',
      txt:'menu.events',
      router:'events',
    },
  ]);

  
  public addMenu = signal<NavMenu[]>([
    {
      txt:'menu.add-teacher',
      router:'add-teacher',
      icon:'teachers'
      },
    {
      txt:'menu.add-student',
      router:'add-student',
      icon:'students'
    },
    {
      txt:'menu.add-event',
      router:'add-event',
      icon:'events'
    },
    {
      txt:'menu.add-class',
      router:'add-class',
      icon:'classes'
    },
    
  ]);

  public userMenu = signal<NavMenu[]>([
    {
      txt:'menu.profile',
      router:'profile',
    },
    {
      txt:'menu.account',
      router:'account',
    },
    {
      txt:'menu.logout',
    },
    
  ]);


}
