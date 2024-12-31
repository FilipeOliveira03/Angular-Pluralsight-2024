import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { EventService, ISession } from "../events";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display: none;}}
        li > a.active {color: #F97924;}    
    `]
})

export class NavBarContent implements OnInit{
    @Input() sessions:ISession[]
    searchTerm:string = ""
    foundSessions: ISession[]
    visibleSessions: ISession[]

    constructor(public auth:AuthService, private eventService:EventService, private route:ActivatedRoute){
        
    }

    ngOnInit(): void {
        this.visibleSessions = this.route.snapshot.data['events']
    }

    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(
            sessions => {
                this.foundSessions = sessions;
                console.log(this.foundSessions)
            }
        )
    }
}