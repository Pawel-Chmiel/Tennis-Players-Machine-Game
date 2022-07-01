class Draw {
    constructor() {

     const playersList = []        
     this.options = [`<img src="images/roger-federer.png" alt="Roger Federer">`,
                     `<img src="images/rafa-nadal.png" alt="Rafael Nadal">`,
                     `<img src="images/novak-djokovic.png" alt="Novak Djokovic">`];

     let _result = this.drawResult()
     this.getDrawResult = () => _result;
    }

    test(){
        console.log("działa");
    }
   
    drawResult() {
     let players = [];
     //uzupełnianie poprzez losowanie
     for (let i = 0; i < this.options.length; i++) {
      const index = Math.floor(Math.random() * this.options.length)
      const player = this.options[index]
      players.push(player)
     }
     return players  
    }
}
   