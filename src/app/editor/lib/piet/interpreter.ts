interface CodelValue {
    color: string;
    abbv: string;
    hue: number;
    dark: number;
}

export class Interpreter {
    
    pixelData: string[][];
    codelMap: Record<string, CodelValue> = {
        '0xffc0c0':{'color':'light red','abbv':'lR','hue':0,'dark':0},
        '0xffffc0':{'color':'light yellow','abbv':'lY','hue':1,'dark':0},
        '0xc0ffc0':{'color':'light green','abbv':'lG','hue':2,'dark':0},
        '0xc0ffff':{'color':'light cyan','abbv':'lC','hue':3,'dark':0},
        '0xc0c0ff':{'color':'light blue','abbv':'lB','hue':4,'dark':0},
        '0xffc0ff':{'color':'light magenta','abbv':'lM','hue':5,'dark':0},
        '0xff0000':{'color':'red','abbv':' R','hue':0,'dark':1},
        '0xffff00':{'color':'yellow','abbv':' Y','hue':1,'dark':1},
        '0x00ff00':{'color':'green','abbv':' G','hue':2,'dark':1},
        '0x00ffff':{'color':'cyan','abbv':' C','hue':3,'dark':1},
        '0x0000ff':{'color':'blue','abbv':' B','hue':4,'dark':1},
        '0xff00ff':{'color':'magenta','abbv':' M','hue':5,'dark':1},
        '0xc00000':{'color':'dark red','abbv':'dR','hue':0,'dark':2},
        '0xc0c000':{'color':'dark yellow','abbv':'dY','hue':1,'dark':2},
        '0x00c000':{'color':'dark green','abbv':'dG','hue':2,'dark':2},
        '0x00c0c0':{'color':'dark cyan','abbv':'dC','hue':3,'dark':2},
        '0x0000c0':{'color':'dark blue','abbv':'dB','hue':4,'dark':2},
        '0xc000c0':{'color':'dark magenta','abbv':'dM','hue':5,'dark':2},
        '0xffffff':{'color':'white','abbv':'Wt','hue':-1,'dark':-1},
        '0x000000':{'color':'black','abbv':'Bk','hue':-1,'dark':-1}
    }
    dp: number = 0;
    cc: number = -1;
    stack: number[] = [];
    blockValue: number = 1;

    commandGrid: string[][] = [];
    
    constructor(pixelData: string[][]) {
        this.pixelData = pixelData;
        console.log(this.pixelData)
    }

    run() {

    }

    noOp() {
        return;
    }

    push() {
        this.stack.push(this.blockValue);
    }

    pop() {
        if(this.stack.length > 0) {
            this.blockValue = this.stack.pop()!
        }
    }
}