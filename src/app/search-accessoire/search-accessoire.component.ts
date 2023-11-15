import { Component, OnInit } from '@angular/core';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../services/accessoire.service';
import { categorie } from '../model/categorie.model';

@Component({
  selector: 'app-search-accessoire',
  templateUrl: './search-accessoire.component.html',
  styleUrls: ['./search-accessoire.component.css']
})
export class SearchAccessoireComponent implements OnInit {
  accessoires! : Accessoire[];
  mat! : string;
  categRech! : string;
  categories! : categorie[]
  tab_acc : Accessoire[];
 typ!:string;
  critere! : string; 

  constructor(private accessoireService: AccessoireService ) { 
    this.tab_acc = accessoireService.listeAccessoires();
  }
  chercherParMat(matt : string){
    this.tab_acc = this.accessoireService.listeAccessoires();
    this.tab_acc= this.tab_acc.filter(acc=> acc.matiere?.toLowerCase().includes(matt.toLowerCase())); 
    }

    chercherParType(typp : string){
      this.tab_acc = this.accessoireService.listeAccessoires();
      this.tab_acc= this.tab_acc.filter(acc=> acc.type?.toLowerCase().includes(typp.toLowerCase())); 
      }


    chercherParCateg() { 
      this.tab_acc= this.accessoireService.listeAccessoires();
      this.tab_acc = this.tab_acc.filter(acc => acc.categ?.typec == this.categRech); 
      }
      reset(){
      this.tab_acc= this.accessoireService.listeAccessoires(); 
      }

  ngOnInit(): void {
    this.categories = this.accessoireService.listeCategories();
  }

}
