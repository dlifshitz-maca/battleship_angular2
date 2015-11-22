import {ComponentMetadata as Component, ViewMetadata as View, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Board} from './board';
import {BoardComponent} from './board-component';
import {Player} from './player';

import {MyApp} from './hello';

@Component({
    selector: 'player-board',
    properties: ['player']
})
@View({
    template: `
        <span>Player: {{player.id}}</span>
        <board
            [board]="player.shipsBoard"
        >
        </board>
        <board
            [board]="player.hitsBoard"
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
    }
}

