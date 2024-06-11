import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { User, UserService } from '@services/user.service';
import { filter } from 'rxjs';

@Component({
  selector: 'table-component',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent  implements OnInit {
  // @injections
  public userService = inject( UserService );
  // @props
  public users = signal<User[]>([]);
  public currentPage = signal(1);
  public labelTotalUsers = computed( ()=> `Total users: ${ this.users().length }`);

  ngOnInit(): void {
    this.loadPage( this.currentPage() )
  }
  
  loadPage( page:number ) {
    this.userService.loadPage( page )
    .pipe(
      filter( users => users.length > 0 )
    )
    .subscribe( users => {
      this.currentPage.set( page );
      this.users.update( currentUsers => [ ...currentUsers, ...users ])

    })

  }
}
