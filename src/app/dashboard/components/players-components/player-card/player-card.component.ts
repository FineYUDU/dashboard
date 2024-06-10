// @angular
import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
// @service
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
import { User, UserService } from '@services/user.service';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'player-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslatePipe,
  ],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent implements OnInit {
  // @injections
  private localStorageService = inject( LocalStorageService );
  private translateService    = inject( TranslateService );
  private userService         = inject( UserService );
  // @params
  public userId       = signal<number>(1);
  public currentUser  = signal<User | undefined>(undefined);
  public userWasFound = signal<boolean>(true);
  public fullName = computed( ()=> {
    if ( !this.currentUser() ) return 'User not found';
    return `${ this.currentUser()?.first_name } ${ this.currentUser()?.last_name }`;
  })

  ngOnInit(): void {
    this.loaduser( this.userId() );
  }

  loaduser( id:number) {
    if( id <= 0 ) return;

    this.userId.set(id);
    this.currentUser.set( undefined )

    this.userService.getusersById( id )
      .subscribe({
        next: user => {
          this.currentUser.set( user ); 
          this.userWasFound.set( true );
          },
          error: () => {
            this.userWasFound.set( false )
            this.currentUser.set( undefined ); 
        } 
      });

  }


}
