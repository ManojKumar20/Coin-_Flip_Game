import { Component } from '@angular/core';
import { CoinFlipServiceService } from './coin-flip-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  currentDegrees: number = 0;
  amountRedAmount: number = 0;
  amountBlueAmount: number = 0;
  isFlipping: boolean = false;
  headOrTail: string = '';
  
  constructor(private coinFlipService: CoinFlipServiceService){

  }
  onCoinClick() {
    if (this.isFlipping) return;

    const coin = document.getElementById('coin') as HTMLDivElement;
    const red = document.getElementById('red') as HTMLDivElement;
    const blue = document.getElementById('blue') as HTMLDivElement;

    // this.coinFlipService.fetchData().subscribe(
    //   result => {
    //     console.log(result);
    //     this.headOrTail = result;
    //   }
    // )

    coin.classList.add("flipping");
    this.isFlipping = true;
    const random = Math.floor(Math.random() * 4 + 9); 
    // if(this.headOrTail==='Heads'){
    //   const random = 12;
    // }
    // else{
    //   const random = 13;
    // }
    
    this.currentDegrees += 180 * random;

    if (this.currentDegrees % 360 === 0) {
      this.amountBlueAmount++;
    } else {
      this.amountRedAmount++;
    }
    coin.style.transform = `rotateY(${this.currentDegrees}deg)`;


    setTimeout(() => {
      red.innerHTML = `${this.amountRedAmount}`;
      blue.innerHTML = `${this.amountBlueAmount}`;
      this.isFlipping = false;
      coin.classList.remove("flipping");
    }, 5000);
  }
}
