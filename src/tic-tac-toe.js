class TicTacToe { 
    constructor() {
      this.cur = "x";
      this.field = [[null,null,null],[null,null,null],[null,null,null]];
    } 
    
    getCurrentPlayerSymbol() {
      return this.cur;
    } 
    
    nextTurn(rowIndex, columnIndex) {
      if(this.field[rowIndex][columnIndex] == null) { 
      this.field[rowIndex][columnIndex] = this.cur;
      this.cur = this.cur == "x" ? "o" : "x"; 
      }
    } 
    
    isFinished() {
      if(this.getWinner() != null || this.isDraw()){return true}
      return false;  
    } 
    
    getWinner() {
      let gor = "";
      let ver = "";
      let gd = "";
      let pd = "";
      for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            gor += this.field[i][j];
            ver += this.field[j][i];
            gd +=this.field[j][j];
            pd +=this.field[Math.abs(j-2)][j];
        }
        if (gor == "ooo" || ver == "ooo" || gd == "ooo" || pd == "ooo"){
            return "o";
        }
        if(gor == "xxx" || ver == "xxx" || gd == "xxx" || pd == "xxx") {
            return "x";
        }
        gor = "";
        ver = "";
      }
      return null;
    } 
    
    noMoreTurns() {
        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                if(this.field[i][j] == null) {
                    return false;
                }
            }    
        }
        return true; 
    } 
    
    isDraw() {
        let a = true;
        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                if(this.field[i][j] == null) {
                    a = false;
                    break
                }
            }
            if(a == false){break;}    
        }
        return this.getWinner() == null ? a : false;
    } 
    
    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex]
    }
  } 
  

module.exports = TicTacToe;
