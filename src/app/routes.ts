import { Routes } from "@angular/router"

import {
    EventListComponent,
    EventDetailComponent,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponent,
    EventResolver,

} from './events/index'

import { Error404Component } from "./errors/404.components"

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventListComponent, resolve: { events: EventListResolver } },
    { path: 'events/:id', component: EventDetailComponent, resolve: {event: EventResolver} },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserMoldule)
    }
]