import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DataService } from '../../Services/data.service';
import { updateDevice, newDeviceMutation} from './../../GraphQL/Device.gql';
import { currentProjectData, queryContextID, subscribeContext } from './../../GraphQL/Context.gql'
import { Context, Vote } from '../../types';
import { MessageService } from '../../Services/message.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SubscriptionsService} from '../../Services/subscriptions.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: [],
})
export class ProjectComponent implements OnInit, OnDestroy {
  public currentProject: Context;
  message: any;
  sub: Subscription;
  Teilnehmer : Vote;
  private contextid:string;
  private deviceID: string;
  constructor(
    private apollo: Apollo,
    private router: Router,
    private dataService: DataService,
    private messageService: MessageService,
    private subscriptionsService: SubscriptionsService) { }


  /**
   * @description wird vom Button "Starten" ausgelöst, damit wird das Device mit der ContextID geupdatet
   * Weiterleitung an Question
   */
  startSurvey(){
    this.updateDevice(this.deviceID, this.contextid);
    this.apollo.subscribe({
      query: currentProjectData,
      variables: {contextID: this.contextid},
    }).subscribe(({data}) => {
      console.log(data);
      /* Aktuelles Projekt allen Komponenten verfügbar machen mittels DataService*/
      this.dataService.sendContext(data.context);
      /* Aktuelle Position der Frage auf 0 setzen, vorne anfangen und das Array durchlaufen*/
      this.dataService.setAnswerNumber(0);
      this.router.navigateByUrl('/question');
    })

  }

    /**
   * @description Zurück zur Startseite
   */
  backToList(){
    this.router.navigate(['/']);
  }

  /**
   * @description Gerät mit der Kontext ID versehen, damit bei Änderung des Kontextes darauf reagiert werden kann
   * @param deviceID
   * @param contextId
   */
  updateDevice(deviceID: string, contextId: string){
    //Device contextID übergeben mit updateDevice()
      this.apollo.mutate({
        fetchPolicy: 'no-cache',
        mutation: updateDevice,
        variables: {
          deviceID: deviceID,
          context: contextId
        }
      }).subscribe(({data}) => {
          console.log("mutation update Device", data);
          //ContextSubscriben, erst wenn das Device dem Kontext zugeordnet wurde, ist Subscription möglich
          this.subscriptionsService.subscribeContext(this.contextid);
      });
  }

    public ngOnInit(): void {
      //Ist das Device noch nicht vorhanden? dann Registriere es (Für die späteren Surveys, wenn die Liste nicht mehr benötigt wird)
      this.contextid = ((this.dataService.getContextID() !=null) ? this.dataService.getContextID() : " "+1);
      this.deviceID =  this.dataService.getDeviceID();
      let token = this.dataService.getToken();
      this.currentProject=this.dataService.getSurvey();
      //Wenn es ohne Startseite aufgerufen wird, dann
      //Registriere das Gerät, nehme das erste Projekt vom Server, updateGerät
      if (token==null || token==undefined || this.deviceID==null){
        this.apollo.mutate({
          fetchPolicy: 'no-cache',
          mutation: newDeviceMutation,
          variables: {
            deviceName: "Fernseher",
          }
        }).subscribe(({data}) => {
          this.dataService.setDevice(data.createDevice.token, data.createDevice.device.id, data.createDevice.device.name);
          this.deviceID=data.createDevice.device.id;
          //danach erst weitere Abfragen
        });
      }

      //BUZZER: Subscribed die Socket-Kommunikation, falls neue Nachrichten reinkommen
      this.sub=this.messageService.getMessage().subscribe( message => {
        this.sub.unsubscribe();
        this.router.navigateByUrl('/question')}
      )

  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
