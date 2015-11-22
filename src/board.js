import {ComponentMetadata as Component, ViewMetadata as View, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Enum} from './enum';

export class Board {
    blah: number;
    internalArray: Array;
    
    constructor() {
        this.blah = Math.floor(Math.random() * 10);
        this.internalArray = new Array(Board.SIZE * Board.SIZE);
        //this.internalArray.fill(0);
        Board.bb = Board.bb + 1;
        this.internalArray.fill(Board.SquareType.EMPTY);
    }
    
    getXY(x : number, y : number) {
        return this.internalArray[x + (y * Board.SIZE)];
    }
    
    setXY(x : number, y : number, value : number) {
        this.internalArray[x + (y * Board.SIZE)] = value;
    }
}

Board.SIZE = 10;

Board.SquareType = new Enum(["EMPTY", "SELECTION", "SHIP", "HIT", "MISS"]);

Board.bb = 1;


