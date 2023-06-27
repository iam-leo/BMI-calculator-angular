import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  bmi: number;
  status: string;
  interpretation: string;
  colorStatus: string;
  
  constructor(private route: ActivatedRoute){
    this.bmi = +route.snapshot.paramMap.get('value')!; //parsear a number y evitar el not null
    this.status = '';
    this.interpretation = '';
    this.colorStatus = '';
  }

  ngOnInit() {
    this.getResult();
  }

  getResult(){
    if(this.bmi>=25){
      this.status = 'Exceso de Peso';
      this.interpretation = 'Tienes un peso corporal mas alto de lo normal. ¡Intenta hacer algo de ejercicio 😉!';
      this.colorStatus = 'bg-red-500';
    }else if(this.bmi >= 18.5){
      this.status = 'Normal';
      this.interpretation = 'Tienes un peso corporal normal. ¡Buen Trabajo 👍!';
      this.colorStatus = 'bg-green-500';
    }else{
      this.status = 'Bajo Peso';
      this.interpretation = 'Tienes un peso corporal mas bajo de lo normal. ¡Intenta alimentarte mejor 😉!';
      this.colorStatus = 'bg-yellow-500';
    }
  }

}
