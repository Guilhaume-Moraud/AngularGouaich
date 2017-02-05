export class Task {

id: number;
description: string;
temps:string;
idStoryRef : number;


 constructor( id: number, d: string, t: string, idStoryRef: number){
   this.description = d;
   this.temps = t;
   this.id = id;
   this.idStoryRef = idStoryRef;
 }


}
