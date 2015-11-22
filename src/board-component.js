import {ComponentMetadata as Component, ViewMetadata as View, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Board} from './board';
import {Player} from './player';

//import {MyApp} from './hello';

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
                    (click)="on_square_clicked(x, y);"
                >
                    {{getSquareTypeText(board.getXY(x, y))}}
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
    //player: Player;
    //onSquareClicked : Function;
    
    constructor() {
    }
    
    getSquareTypeText(squareType : string) {
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
    
    /*onSquareClicked(x : number, y : number) {
        //MyApp.onSquareClicked(this.player, this.board, x, y);
        //console.log(this.ooo);
        this.ooo(x, y);
    };*/
    
    range() {
        var total = Board.SIZE;
        var input = new Array();
        total = parseInt(total);
        for (var i=0; i<total; i++)
            input.push(i);
        return input;
    };
}


