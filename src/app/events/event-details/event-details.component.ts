import { Component } from "@angular/core";
import { EventService } from "../shared/events.service";

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px }
        .event-image{ height: 100px; }
        `
    ]
})

export class EventDetailComponent{
    event:any
    constructor(private eventService:EventService){

    }

    ngOnInit(){
        this.event = this.eventService.getEvent(1)
    }

}