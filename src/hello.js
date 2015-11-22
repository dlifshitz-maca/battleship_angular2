import {ComponentMetadata as Component, ViewMetadata as View, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Board} from './board';
import {Player} from './player';
import {PlayerBoardComponent} from './player-board-component';

@Component({
    selector: 'my-app'
})
@View({
    template: `
        <span *ng-if="name">Hello, {{name}}!</span>
        <div *ng-if="selectedPlayer">
            <span>Player: {{selectedPlayer.name}}</span>
            <div>
                <label>name: </label>
                <div><input [(ng-model)]="selectedPlayer.name" placeholder="name"></div>
            </div>
        </div>
        <ul class="players">
            <li
                *ng-for="#player of players"
                [ng-class]="getSelectedClass(player)"
                (click)="onSelect(player)"
            >
                <!-- each player goes here -->
                <span class="badge">{{player.id}}</span> {{player.name}} blah {{player.shipsBoard.blah}}</a>
            </li>
        </ul>
        <player-board
            *ng-for="#player of players"
            [player]="player"
            [on_ships_board_clicked]="onShipsBoardClicked"
            [on_hits_board_clicked]="onHitsBoardClicked"
        > <span>error {{player.name}}</span>
        </player-board>
        `,
    styles:[`
        .players {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
        .players li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
        .players li:hover {color: #369; background-color: #EEE; left: .2em;}
        .players .badge {
            font-size: small;
            color: white;
            padding: 0.1em 0.7em;
            background-color: #369;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -1px;
        }
        .selected { background-color: #EEE; color: #369; }
    `],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, PlayerBoardComponent]
})
export class MyApp {
    name: string = 'old World';
    players = PLAYERS;
    selectedPlayer: Player;
    constructor() {
        setTimeout(() => {
          this.name = 'NEW Wordddld'
        }, 2000);
        
        var that = this;
        
        this.onHitsBoardClicked = function(player : Player, x : number, y : number) {
            that.onHitsBoardClicked_(player, x, y);
        };
    }
    onSelect(player: Player) {
        this.selectedPlayer = player;
    }
    getSelectedClass(player: Player) {
        return { 'selected': player === this.selectedPlayer };
    }
    
    getOpponent(player : Player) {
        // TODO: improve on this
        if(player === this.players[0]) {
            return this.players[1];
        }
        else {
            return this.players[0];
        }
    }
    
    onShipsBoardClicked(player : Player, x : number, y : number) {
        console.log("mmmmm: " + x + ", " + y);
        var board = player.shipsBoard;
        var squareType = board.getXY(x, y);
        var newSquareType;
        switch(squareType) {
        case Board.SquareType.EMPTY:
            newSquareType = Board.SquareType.SHIP;
            break;
        case Board.SquareType.SELECTION:
            // TODO: fill in the ship
            break;
        case Board.SquareType.SHIP:
            return;
        case Board.SquareType.HIT:
            return;
        case Board.SquareType.MISS:
            return;
        default:
            return;
        }
        
        board.setXY(x, y, newSquareType);
    }
    
    onHitsBoardClicked_(player : Player, x : number, y : number) {
        console.log("mmmmmsssss: " + x + ", " + y);
        var board = player.hitsBoard;
        var squareType = board.getXY(x, y);
        var newSquareType;
        switch(squareType) {
        case Board.SquareType.EMPTY:
            if(this.getOpponent(player).shipsBoard.getXY(x, y) == Board.SquareType.SHIP) {
                newSquareType = Board.SquareType.HIT;
            }
            else {
                newSquareType = Board.SquareType.MISS;
            }
            break;
        case Board.SquareType.SELECTION:
            return;
        case Board.SquareType.SHIP:
            return;
        case Board.SquareType.HIT:
            return;
        case Board.SquareType.MISS:
            return;
        default:
            return;
        }
        
        board.setXY(x, y, newSquareType);
    }
}

var PLAYERS: Player[] = [
    new Player(0, "Player 1"),
    new Player(1, "Player 2")
];

bootstrap(MyApp);



