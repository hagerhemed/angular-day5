import { CommonModule } from '@angular/common';
import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { StaticProductsService } from '../../services/static-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isUserLogged!:boolean;
  constructor(private userAuthSer:UserAuthService){

  }
  ngOnInit(): void {
  //  this.isUserLogged=this.userAuthSer.getUserLogged()
  this.userAuthSer.getAuthSubject().subscribe({
    next:(status)=>{
      this.isUserLogged=status
    }
  })
  }
  // constructor(private _StaticProductsServices: StaticProductsService){}

}
