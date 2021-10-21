import React from 'react';
import './App.css';

type CoffeeCup = {
  shots: number;
  hasmilk: boolean;
};

class CoffeeMaker {
  static BEANS_GRAMM_PER_SHOT = 7;

  coffeeBeans = 0;

  constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }

  static makeMarchine(coffeeBeans: number): CoffeeMaker {
    return new CoffeeMaker(coffeeBeans);
  }

  makeCoffee(shots: number): CoffeeCup {
    this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasmilk: false,
    };
  }
}

const maker = new CoffeeMaker(32);
console.log(maker);

const maker2 = new CoffeeMaker(14);
console.log(maker2);

// maker2.makeCoffee();

const maker3 = CoffeeMaker.makeMarchine(3);
console.log(maker3);

function App() {
  return (
    <div>현재 커피 잔의 개수는 {CoffeeMaker.BEANS_GRAMM_PER_SHOT} 입니다.</div>
  );
}

export default App;
