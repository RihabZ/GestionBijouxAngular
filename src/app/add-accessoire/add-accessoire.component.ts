import { Component, OnInit } from '@angular/core';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../services/accessoire.service';
import { categorie } from '../model/categorie.model'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-accessoire',
  templateUrl: './add-accessoire.component.html',
  styleUrls: ['./add-accessoire.component.css']
})
export class AddAccessoireComponent implements OnInit {
  newAccessoire = new Accessoire();
  categories! : categorie[];
newTypec! : string;
newCateg! : categorie;
  constructor(private accessoireService: AccessoireService,private router 
    :Router ) {}
    addArticle(){
      this.newCateg = this.accessoireService.consulterCategorie(this.newTypec);
    this.newAccessoire.categ = this.newCateg;
      this.accessoireService.ajouterAccessoire(this.newAccessoire);
      this.router.navigate(['accessoires']);
      
   }

  ngOnInit(): void {
    this.categories = this.accessoireService.listeCategories();
  }

}
