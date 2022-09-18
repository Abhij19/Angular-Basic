import { Component } from "@angular/core";

@Component({
    selector:'app-server', // html tag by which you can use this later in other component html files
    templateUrl:'./server.component.html',
    styles: [`
    .online{
        color: white;
    }
    `]
})
export class ServerComponent{
    serverId=10;
    serverStatus='offline';
    constructor()
    {
        this.serverStatus=Math.random()>0.5 ? 'online': 'offline';
    }
    getServerStatus()
    {
        return this.serverStatus;
    }
    getColor()
    {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}