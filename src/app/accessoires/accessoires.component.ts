import { Component, OnInit } from '@angular/core';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../services/accessoire.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-accessoires',
  templateUrl: './accessoires.component.html',
  styleUrls: ['./accessoires.component.css']
})
export class AccessoiresComponent implements OnInit {
  tab_acc : Accessoire[];
  zeroStyle = {'color':'red'};
  
  constructor(private accessoireService: AccessoireService,public authServ : AuthService ) { 
    this.tab_acc =  accessoireService.listeAccessoires();
    
   }
   suppAccessoire(acc: Accessoire) {
    this.accessoireService.supprimerAccessoire(acc);
    console.log("Suppression avec succes :"+acc.type);
   }

  ngOnInit(): void {
  }

}