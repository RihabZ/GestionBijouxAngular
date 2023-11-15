import { Component, OnInit } from '@angular/core';
import { AccessoireService } from '../services/accessoire.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbAcc = 0;
  nbCateg = 0;
  totalStock = 0;
  nbUsers = 0;
  constructor(private accServ : AccessoireService , private authServ :AuthService ) { 
    this.nbAcc = this.accServ.calculNbAccessoires();
     this.nbCateg = this.accServ.calculNbCategories();
      this.totalStock = this.accServ.calculTotalStock();
      this.nbUsers = this.authServ.calculNbUsers();
      this.nbUsers = this.authServ.calculNbUsers();
  }

  ngOnInit(): void {
  }

}
