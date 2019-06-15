import React from 'react';
import '../index.css';
import Board from './board';
import FallenSoldierBlock from './fallen';
import initaliseChessBoard from '../helpers/initalBoard';

export default class Game extends React.Component{
    constructor(){
        super();
        this.state = {
            squares: initaliseChessBoard(),
            whiteFallenSolders: [],
            blackFallenSolders: [],
            player: 1,
            sourceSelection: -1,
            status: '',
            turn: 'white'
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice();

        if(this.state.sourceSelection === -1){
            if(!squares[i] || squares[i].player !== this.state.player){
              this.setState({status: "Wrong selection. Choose player " + this.state.player + " pieces."});
              squares[i]? delete squares[i].style.backgroundColor: null;
            } 
            else {
                squares[i].style = {...squares[i].style, backgroundColor: "RGB (111,143,114)"};
                this.setState({
                    status: "Choose destination for the selected piece",
                    sourceSelection: i
                });
            }
                
            }
            else if (this.state.sourceSelection > -1){
                delete squares[this.state.sourceSelection].style.backgroundColor;
                if(squares[i] && squares[i].player === this.state.player){
                    this.setState({status: "Wrong selection. Choose Valid source and destination again.",
                    sourceSelection: -1,
                });
                }
            }
        }
    }

}