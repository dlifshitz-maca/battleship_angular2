import {ComponentMetadata as Component, ViewMetadata as View, Attribute, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Board} from './board';
import {BoardComponent} from './board-component';
import {Player} from './player';

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
    
    constructor() {
        var that = this;
        
        this.onShipsBoardClicked = function(x : number, y : number) {
            that.on_ships_board_clicked(that.player, x, y);
        };
        
        this.onHitsBoardClicked = function(x : number, y : number) {
            that.on_hits_board_clicked(that.player, x, y);
        };
    }
}

