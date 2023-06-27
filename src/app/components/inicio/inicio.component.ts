import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  weight = 60;
  age = 25;
  height = 170;
  gender = 'male';

  changeHeigth(event: any){
    this.height = event.target.value;    
  }

  selectedGender(gender: string){
    this.gender = gender;
  }
}
