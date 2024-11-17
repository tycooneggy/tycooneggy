class MoreInput {
    constructor(runtime) {
        this.runtime = runtime;
    } 
    
    getInfo () {
        return {
            id: "MoreInput“",
            name: "更多輸入方塊",
            blocks: [
                {
                    opcode: "ReturnPi",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "圓周率"
                },
                {
                    opcode: "ReturnLetter",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "字串[Letter]",
                    arguments: {
                        Letter: {
                            type: Scratch.ArgumentType.STRING,
                            defaultvalue: "apple"
                        }
                    }
                },
                {
                    opcode: "GetLetterIndexRange",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "字串[Letter]的[SN]～[FN]",
                    arguments: {
                        Letter: {
                            type: Scratch.ArgumentType.STRING,
                            defaultvalue: "apple"
                        },
                        SN: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultvalue: 1
                        },
                        FN: {
                            type: Scratch.ArgumentType.NUMBER 
                            defaultvalue: 2
                        }
                    }
                }
            ]
        }
    }
    ReturnPi(){
        return Math.PI;
    }
    ReturnLetter(args){
        return args.Letter;
    }
    GetLetterIndexRange(args){
        return args.Letter.substring(args.SN, args.FN);
    }
}

Scratch.extensions.register(new MoreInput());
