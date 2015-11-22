import {ComponentMetadata as Component, ViewMetadata as View, Attribute, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Board} from './board';
import {BoardComponent} from './board-component';
import {Player} from './player';

//import {MyApp} from './hello';

@Component({
    selector: 'player-board',
    properties: ['player', 'on_ships_board_clicked', 'on_hits_board_clicked']
})
@View({
    template: `
        <span>Player: {{player.id}}</span>
        <board
            [board]="player.shipsBoard"
            [on_square_clicked] = "onShipsBoardClicked"
        >
        </board>
        <board
            [board]="player.hitsBoard"
            [on_square_clicked] = "onHitsBoardClicked"
        >
        </board>
        `,
    styles:[`
    `],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, BoardComponent]
})
export class PlayerBoardComponent {
    player: Player;
    //on_ships_board_clicked : Function;
    
    constructor() {
        //this.on_ships_board_clicked = on_ships_board_clicked;
        //console.log("wwssssw: " + this.on_ships_board_clicked);
        var that = this;
        
        this.onShipsBoardClicked = function(x : number, y : number) {
            that.on_ships_board_clicked(that.player, x, y);
        };
        
        this.onHitsBoardClicked = function(x : number, y : number) {
            that.on_hits_board_clicked(that.player, x, y);
        };
    }
    
    /*onShipsBoardClicked(x : number, y : number) {
        //console.log("wwssssw: " + x + ", " + y);
        console.log("wwssssw: " + this);
        //this.on_ships_board_clicked(this.player, x, y);
    }*/
    
    /*onHitsBoardClicked(x : number, y : number) {
        //console.log("wwsssswsss: " + x + ", " + y);
        this.on_hits_board_clicked(this.player, x, y);
    }*/
}

