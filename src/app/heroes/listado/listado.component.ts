import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroesBorrados: string[] = [];
  heroeDeleted: string =  '';

  borrarHeroe(): void {
    this.heroeDeleted = this.heroes.shift() || '';
    this.heroesBorrados.push(this.heroeDeleted);
  }
}
