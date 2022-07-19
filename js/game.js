class Game {
    constructor(start) {
   
     this.stats = new Statistics();
     this.wallet = new Wallet(start);
   
     document.getElementById('start').addEventListener('click', this.startGame.bind(this));
     this.spanWallet = document.querySelector('.panel span.wallet');
     this.boards = [...document.querySelectorAll('div.player')];
     this.inputBid = document.getElementById('bid');
     this.spanResult = document.querySelector('.score span.result');
     this.spanGames = document.querySelector('.score span.number');
     this.spanWins = document.querySelector('.score span.win');
     this.spanLosses = document.querySelector('.score span.loss');   
     this.render()
    }
   
    render(players = [`<img src="images/player-shadow.png">`,
                      `<img src="images/player-shadow.png">`, 
                      `<img src="images/player-shadow.png">`], 
                      money = this.wallet.getWalletValue(), 
                      result = "", 
                      stats = [0, 0, 0], bid = 0, 
                      wonMoney = 0) {   
                         this.boards.forEach((board, index) => {
                            board.innerHTML = players[index]
                            });   
                         this.spanWallet.textContent = money;
                         if (result) {
                          result = `Congrats! You WON $${wonMoney}! `;
                         } else if (!result && result !== "") {
                          result = `Sorry, You LOST $${bid}! `
                         } else{
                            result = 'Start The Game!';
                         }
                         this.spanResult.textContent = result;
                         this.spanGames.textContent = stats[0];
                         this.spanWins.textContent = stats[1];
                         this.spanLosses.textContent = stats[2];
                         this.inputBid.value = "";
                        }
   
    startGame() {
     if (this.inputBid.value < 1) return alert('The amount is too low or You put incorrect value!')
     const bid = Math.floor(this.inputBid.value);

     if (!this.wallet.checkCanPlay(bid)) {
        return alert(':((( ...you do not have enough money!');
     }

    this.wallet.changeWallet(bid, "-");
    this.draw = new Draw();

    const players = this.draw.getDrawResult();
    const win = Result.checkWinner(players);
    const wonMoney = Result.moneyWinInGame(win, bid);
    this.wallet.changeWallet(wonMoney);
    this.stats.addGameToStatistics(win, bid);

    this.render(players, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney);
        }
   }
   
   
