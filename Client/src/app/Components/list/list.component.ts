import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { newDeviceMutation, queryAllSurveys } from './list.model';
import { Subscription } from 'rxjs/Subscription';

import { Survey, Query } from '../../types'
import { Router } from '@angular/router';
import { DataService } from '../../Services/data.service';
import { MessageService } from '../../Services/message.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit, OnDestroy {
    surveys: Observable<Survey[]>;
    sub: Subscription;
//Router zum weiterleiten an die nächste Component /project
    constructor(private apollo: Apollo, private router: Router, private dataService: DataService, private messageService: MessageService) { 
        //Wenn app.Component einen button-click gemerkt hat, dann zum nächsten Screen
        this.sub=this.messageService.getMessage().subscribe( message => {
            console.log("Liste: " + message);
            this.sub.unsubscribe();
            this.openProject("123");
        })
    }
    
    openProject(contextID : string): void{
        this.dataService.setContextID(contextID);
        this.router.navigateByUrl('/project');
    }

    openSpecificProject(): void{
        let id=(<HTMLInputElement>document.getElementById("specificContextID")).value;
        this.dataService.setContextID(id);
        this.router.navigateByUrl('/project');
    }

    getProjects(){
        this.surveys = this.apollo.watchQuery<Query>({
            query: queryAllSurveys
        }).valueChanges
        .pipe(
            map(result => result.data.surveys)
        );
    }

    ngOnInit() {
        //TODO neues Device immer??
        //TODO als Promise auslagern  
        let deviceID=this.dataService.getDevice();
        if (deviceID==undefined || deviceID==null){
            this.apollo.mutate({
                fetchPolicy: 'no-cache',
                mutation: newDeviceMutation,
                variables: { 
                deviceName: "Fernseher",
                }
            }).subscribe(({data}) => { 
            this.dataService.setDevice(data.createDevice.token, data.createDevice.device.id, data.createDevice.device.name);
            });
        }
        this.getProjects();
    }
    
    ngOnDestroy(){
        this.sub.unsubscribe();
    }
}