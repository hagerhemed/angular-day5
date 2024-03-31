import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Subscription, filter,map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy {
  subscribtion!:Subscription;
  constructor(private _NotificationSer:NotificationService){

  }
  ngOnInit(): void {
    // this._NotificationSer.getNotifications().subscribe((notification)=>{
    //   console.log(notification)
    // },(error)=>{
    //   console.log(`--------${error}----------`)
    // })
   this.subscribtion= this._NotificationSer.getNotifications().pipe(
      map((msg)=>`${msg} Hager`),
      filter((msg)=>msg.startsWith('h')),
    ).subscribe({
      next:(notification)=>{
        console.log(notification)
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("notification completed successfully")
      }

    })

    this.subscribtion=this._NotificationSer.getNotifications().subscribe({

    })
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe()

  }

}
