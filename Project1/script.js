
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      hChoice: null,
      rndChoice: null,
      cScore: 0,
      hScore: 0
    };
  },
  methods: {
    choices: function (choice) {
      this.hChoice = choice;
      const throws = ['rock', 'paper', 'scissors'];
      this.rndChoice = throws[Math.floor(Math.random() * throws.length)];
      this.shoot();
    },
    shoot: function () {
        if (this.hChoice == 'paper') {
          if (this.rndChoice == 'rock') {
            this.hScore++;
            console.log('Human wins!');  
          } else if (this.rndChoice == 'scissors') {
            console.log('Computer wins!');
            this.cScore++;
          } else {
            console.log('Tie!');
          }
        } else if (this.hChoice == 'rock') {
          if (this.rndChoice == 'paper') {
          console.log('Computer wins!');
          this.cScore++;
        } else if (this.rndChoice == 'scissors') {
          console.log('Human wins!');
          this.hScore++;
        } else {
          console.log('Tie!');
        }
      } else {
        if (this.rndChoice == 'rock') {
          console.log('Computer wins!');
          this.cScore++;
        } else if (this.rndChoice == 'paper') {
          console.log('Human wins!');
          this.hScore++;
        } else {
          console.log('Tie!');
        }
      }
    }
  }
});