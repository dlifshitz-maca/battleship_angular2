import {ComponentMetadata as Component, ViewMetadata as View, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Board} from './board';

@Component({
    selector: 'board',
    properties: ['board']
})
@View({
    template: `
        <div>shdkajhs {{board.getXY(2, 3)}}
            <!-- TODO: show a row of buttons inside divs-->
            <div *ng-for="#y of range()">
                <button *ng-for="#x of range()">
                    {{board.getXY(x, y)}}
                </button>
            </div>
        </div>
        
        `,
    styles:[`
    `],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class BoardComponent {
    board: Board;
    
    constructor() {
    }
    
    range() {
        var total = Board.SIZE;
        var input = new Array();
        total = parseInt(total);
        for (var i=0; i<total; i++)
            input.push(i);
        return input;
    };
}


