import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  mock = {
    "status": "OK",
    "periodosIdeias": [
      {
        "qtdDias": 11,
        "diaInicio": "28/08/2023",
        "diaSemanaInicio": "Segunda",
        "diaFim": "08/09/2023",
        "diaSemanaFim": "Sexta",
        "feriado": {
          "nome": "Independência do Brasil",
          "tipo": "feriado",
          "nivel": "nacional"
        }
      },
      {
        "qtdDias": 11,
        "diaInicio": "02/10/2023",
        "diaSemanaInicio": "Segunda",
        "diaFim": "13/10/2023",
        "diaSemanaFim": "Sexta",
        "feriado": {
          "nome": "Nossa Senhora Aparecida",
          "tipo": "feriado",
          "nivel": "nacional"
        }
      },
      {
        "qtdDias": 11,
        "diaInicio": "23/10/2023",
        "diaSemanaInicio": "Segunda",
        "diaFim": "03/11/2023",
        "diaSemanaFim": "Sexta",
        "feriado": {
          "nome": "Finados",
          "tipo": "feriado",
          "nivel": "nacional"
        }
      },
      {
        "qtdDias": 11,
        "diaInicio": "15/12/2023",
        "diaSemanaInicio": "Sexta",
        "diaFim": "26/12/2023",
        "diaSemanaFim": "Terça",
        "feriado": {
          "nome": "Natal",
          "tipo": "feriado",
          "nivel": "nacional"
        }
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }



}
