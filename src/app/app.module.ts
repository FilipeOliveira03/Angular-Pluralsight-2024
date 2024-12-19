import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import{
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver

} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarContent } from './nav/navbar.components';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.components';
import { AuthService } from './user/auth.service';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarContent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component,
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you reallu want to cancel?')
  return true
}