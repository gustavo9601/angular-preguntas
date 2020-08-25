import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  public question: string;
  public answers: any[];
  public selectAnswers: boolean;
  public btnTouch:boolean;

  constructor() {
  }

  ngOnInit() {
    this.question = '¿Cual es la capital de Colombia?';
    this.answers = [
      {
        'answer': 'Bogota',
        'correct': true
      },
      {
        'answer': 'Medellin',
        'correct': false
      },
      {
        'answer': 'Barranquilla',
        'correct': false
      },
      {
        'answer': 'Bucaramanga',
        'correct': false
      }
    ];
    this.selectAnswers = false;
    this.btnTouch = false;
  }

}
