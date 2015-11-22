
export class Enum {
    values: Array<string>;
    constructor(list : Array<string>) {
        this.values = [];
        var that = this;
        for(var i = 0; i < list.length; i++) {
            var item = list[i];
            that[item] = item;
            that.values.push(item);
        }
    }
}

