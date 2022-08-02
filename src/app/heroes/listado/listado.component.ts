import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {
  heroes: string[] = ['Hulk', 'Thor', 'Batman', 'Iron Man', 'Superman', 'Capitan America'];
  heroeBorrado:string=""

  borrarHeroe() {

   this.heroeBorrado  =this.heroes.shift()|| '';

  }

}
