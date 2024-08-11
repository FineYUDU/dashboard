import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject( AuthService );
  const router      = inject( Router );
  
  if( authService.authStatus() === AuthStatus.authenticated  ) {
    console.log({'status': authService.authStatus()});
    return true;
  }
  
  if( authService.authStatus() === AuthStatus.checking  ) {
    console.log({'status': authService.authStatus()});
    return false;
  } 
    
  router.navigateByUrl('/auth/login');
  return false;

};
