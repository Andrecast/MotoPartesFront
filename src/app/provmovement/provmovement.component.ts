import { Component, OnInit } from '@angular/core';
import { ProvmovementService } from './provmovement.service';
import { Provmovement } from './provmovement';

@Component({
  selector: 'app-provmovement',
  templateUrl: './provmovement.component.html'
})
export class ProvmovementComponent implements OnInit{

  provMovements: Provmovement[] = [
    //{ productName: 'jnjn', amount: 2, status: 1, providerName: 'khkh', storeName: 'huhd', createAt: '2023-10-25'}
  ];

  constructor(private provmovementService: ProvmovementService) {}

  ngOnInit() { //Evento, cuando se inicia el componente
    this.provmovementService.getProvMovements().subscribe(
      (provMovements) => this.provMovements = provMovements
    );
    }

}
