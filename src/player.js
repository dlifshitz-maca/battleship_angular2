import {ComponentMetadata as Component, ViewMetadata as View, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Board} from './board';

export class Player {
    id: number;
    name: string;
    shipsBoard: Board;
    hitsBoard: Board;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.shipsBoard = new Board();
        this.hitsBoard = new Board();
    }
}

