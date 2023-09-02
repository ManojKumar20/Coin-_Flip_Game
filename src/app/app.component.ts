import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

currentDegrees = 0;
  amountRedAmount = 0;
  amountBlueAmount = 0;
  isFlipping = false;

  onCoinClick() {
    if (this.isFlipping) return;

    const coin = document.getElementById('coin') as HTMLDivElement;
    const red = document.getElementById('red') as HTMLDivElement;
    const blue = document.getElementById('blue') as HTMLDivElement;

    coin.classList.add("flipping");
    this.isFlipping = true;
    const random = Math.floor(Math.random() * 4 + 9); 

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
