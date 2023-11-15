import { Injectable } from '@angular/core';
import { Accessoire} from '../model/accessoire.model';
import { categorie } from '../model/categorie.model';
@Injectable({
  providedIn: 'root'
})
export class AccessoireService {
  tab_acc : Accessoire[];
  categories :{typec : string;description : string}[];
  constructor() {
    this.categories = [ 
      {typec : "Jewellery", description:"New Collection"},
      {typec :"Clothes" ,  description:"Soldé"},
      {typec :"Bag" ,  description:"New Collection"},
     

      ];
      this.tab_acc= [
        { type: "Collier",matiere:"Plaque Or", prix : 45.100, qte : 2, dateAjout : new Date("09/02/2022"),
        categ:{typec : "Jewellery", description:"New Collection"}
        },
        {type: "Bracelet", matiere : "Argent", prix : 500.900, qte : 1, dateAjout : new Date("09/17/2022"),
        categ:{typec : "Jewellery" ,description:"New Collection"}
        },
        {type : "Bouccle d'Oreille", matiere : "Plaque Or", prix : 35.500, qte : 2, dateAjout : new Date("10/03/2022"), 
        categ:{typec :"Jewellery" ,  description:"Soldé"}
        },
        
        {type : "Béret", matiere : "Laine", prix : 59.500, qte : 2, dateAjout : new Date("10/10/2022"), 
        categ:{typec :"Clothes" ,  description:"Soldé"}
        },
        {type : "Sac à main", matiere : "Cuire", prix : 86.900, qte : 1, dateAjout : new Date("11/07/2022"), 
        categ:{typec :"Bag" ,  description:"New Collection"}
        },
        {type : "Gilet", matiere : "Forrure", prix : 99.000, qte : 1, dateAjout : new Date("12/12/2022"), 
        categ:{typec :"Clothes" ,  description:"New Collection"}
        }

        ];
        }

   
   listeAccessoires():Accessoire[] {
    return this.tab_acc;  
   
}

listeCategories():categorie[] {
  return this.categories;
 }
 consulterCategorie(ch:string): categorie{ 
  return this.categories.find(cat => cat.typec == ch)!;
 }


ajouterAccessoire(acc: Accessoire){
  this.tab_acc.push(acc);
  console.log("Ajout avec succes : "+acc.type);
  }


  supprimerAccessoire(acc: Accessoire){
    const index = this.tab_acc.indexOf(acc, 0);
    if (index > -1) {
    this.tab_acc.splice(index, 1);
    }
  }
  consulterAccessoire(ch:string): Accessoire{
    return this.tab_acc.find(acc => acc.type == ch)!;
    }
    modifierAccessoire(acc: Accessoire) { 
    this.supprimerAccessoire(acc);
    this.ajouterAccessoire(acc);
    }
    calculNbAccessoires(): number{ 
      return this.tab_acc.length;
     } 
     calculTotalStock(): number{ 
      let tot=0;
      this.tab_acc.forEach( (acc) => {tot += acc.prix! * acc.qte!;
      })
      return tot;
     }
     calculNbCategories(): number{
      return this.categories.length;
     }


}