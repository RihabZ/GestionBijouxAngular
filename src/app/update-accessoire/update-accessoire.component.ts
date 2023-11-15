import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Accessoire } from '../model/accessoire.model';
import { AccessoireService } from '../services/accessoire.service';
import { categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-accessoire',
  templateUrl: './update-accessoire.component.html',
  styleUrls: ['./update-accessoire.component.css']
})
export class UpdateAccessoireComponent implements OnInit {
  accessoireCourant = new Accessoire();
  categories! : categorie[];
typecModifie! : any;
  constructor(private activatedRoute: ActivatedRoute, private  accessoireService: AccessoireService, private router 
    :Router) { }

  modifAccessoire(){ 
    this.accessoireCourant.categ = this.accessoireService.consulterCategorie (this.typecModifie);
    this.accessoireService.modifierAccessoire(this.accessoireCourant);
     console.log("Article modifié avec succes : "+ 
    this.accessoireCourant.type+":"+this.accessoireCourant.prix+"DT, qté="+ 
    this.accessoireCourant.qte+", ajoutée le "+this.accessoireCourant.dateAjout);
    this.router.navigate(['accessoires']);

    }


  ngOnInit(): void {
    this.categories = this.accessoireService.listeCategories();
    this.accessoireCourant = this.accessoireService.consulterAccessoire (this.activatedRoute.snapshot.params['ch']);
console.log("Le type accessoire à modifier " +this.accessoireCourant.type);
this.typecModifie =  this.accessoireCourant.categ!.typec;
  }

}
