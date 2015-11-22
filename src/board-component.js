import {ComponentMetadata as Component, ViewMetadata as View, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Board} from './board';
import {Player} from './player';

@Component({
    selector: 'board',
    properties: ['board', 'on_square_clicked']
})
@View({
    template: `
        <div>shdkajhs {{board.getXY(2, 3)}}
            <!-- TODO: show a row of buttons inside divs-->
            <div *ng-for="#y of range()">
                <button
                    *ng-for="#x of range()"
                    [ng-class]="getSquareClass(x, y)"
                    (click)="on_square_clicked(x, y)"
                >
                    {{getSquareTypeText(x, y)}}
                </button>
            </div>
        </div>
        
        `,
    styles:[`
    `],
    styles:[`
        button { width: 55px; }
        .square_empty { background-color: #FFF; color: #CCC; }
        .square_selection { background-color: #0F0; color: #0C0; }
        .square_ship { background-color: #00F; color: #00C; }
        .square_hit { background-color: #F00; color: #C00; }
        .square_miss { background-color: #000; color: #500; }
    `],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class BoardComponent {
    board: Board;
    
    constructor() {
    }
    
    getSquareTypeText(x : number, y : number) {
        var squareType = this.board.getXY(x, y);
        switch(squareType) {
        case Board.SquareType.EMPTY:
            return "EMP";
        case Board.SquareType.SELECTION:
            return "SEL";
        case Board.SquareType.SHIP:
            return "SHP";
        case Board.SquareType.HIT:
            return "HIT";
        case Board.SquareType.MISS:
            return "MIS";
        default:
            return "UNK";
        }
    };
    
    getSquareClass(x : number, y : number) {
        var squareType = this.board.getXY(x, y);
        switch(squareType) {
        case Board.SquareType.EMPTY:
            return "square_empty";
        case Board.SquareType.SELECTION:
            return "square_selection";
        case Board.SquareType.SHIP:
            return "square_ship";
        case Board.SquareType.HIT:
            return "square_hit";
        case Board.SquareType.MISS:
            return "square_miss";
        default:
            return "";
        }
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


