class MoreLogic {
  getInfo() {
    return {
      id: 'MoreLogic',
      name: 'More Logic Options',
      blocks: [
        {
          opcode: 'notEqual',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[num1]!=[num2]',
          arguments: {
            num1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            },
            num2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '50'
            }
          }
        },{
          opcode: 'bigOrEqual',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[num1]>=[num2]',
          arguments: {
            num1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            },
            num2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '50'
            }
          }
        },{
          opcode: 'smallOrEqual',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[num1]<=[num2]',
          arguments: {
            num1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            },
            num2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '50'
            }
          }
        },{
          opcode: 'returntrue',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true'
        },{
          opcode: 'returnfalse',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false'
        },{
          opcode: 'isInt',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[num]is an integer?',
          arguments: {
            num: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },{
          opcode: 'ifReporter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'if[con]then return[yes], else return[no]',
          arguments: {
            con: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            yes: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            no: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            }
          }
        },{
          opcode: 'xor',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[con1]xor[con2]',
          arguments: {
            con1: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            con2: {
              type: Scratch.ArgumentType.BOOLEAN
            }
          }
        },{
          opcode: 'numberOrtext',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Number or text[nt]',
          arguments: {
            nt: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ""
            }
          }
        },{
          opcode: 'power',
          blockType: Scratch.BlockType.REPORTER,
          text: '[num1]^[num2]',
          arguments: {
            num1: {
              type: Scratch.ArgumentType.NUMBER
            },
            num2: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },{
          opcode: 'scaleSwitch',
          blockType: Scratch.BlockType.REPORTER,
          text: 'scale conversion[switchNum]from[frommin]～[frommax]to[tomin]～[tomax]',
          arguments: {
            switchNum: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            frommin: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            frommax: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            },
            tomin: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            tomax: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 100
            }
          }
        },{
          opcode: 'roundtofloat',
          blockType: Scratch.BlockType.REPORTER,
          text: 'The number[num]is rounded to the [ord] decimal place',
          arguments: {
            num: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1.25
            },
            ord: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },{
          opcode: 'editNum',
          blockType: Scratch.BlockType.REPORTER,
          text: '[option] of a [num]',
          arguments: {
            num: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            option: {
              type: Scratch.ArgumentType.STRING,
              menu: "OPTION"
            }
          }
        },{
          opcode: 'specialsign',
          blockType: Scratch.BlockType.REPORTER,
          text: 'special symbols[spe]',
          arguments: {
            spe: {
              type: Scratch.ArgumentType.STRING,
              menu: 'SPECAIL'
            }
          }
        },{
          opcode: 'upperandlower',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert [TEXT] to[FORMAT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            FORMAT: {
              type: Scratch.ArgumentType.STRING,
              menu: 'FORMAT_MENU'
            }
          }
        },{
          opcode: 'color',
          blockType: Scratch.BlockType.REPORTER,
          text: 'color [color]',
          arguments: {
            color: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#ff0000'
            }
          }
        },{
          opcode: 'mixColor',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Mix color red[r] green[g] blue[b]',
          arguments: {
            r: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 255
            },
            g: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            b: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        }
      ],
      menus: {
        OPTION: {
          acceptReporters: false,
          items: [
          {
            text: 'The opposite',
            value: 'wrap'
          },
          {
            text: 'The reciprocal',
            value: 'divide'
          },
          {
            text: 'The root',
            value: 'root'
          }
          ]
        },
        SPECAIL: {
          acceptReporters: false,
          items: [
          {
            text: 'PI',
            value: 'pi'
          },
          {
            text: 'e',
            value: 'e'
          }
          ]
        },
        FORMAT_MENU: {
          acceptReporters: false,
          items: [
          {
            text: 'uppercase',
            value: 'up'
          },
          {
            text: 'lowercase',
            value: 'low'
          }
          ]
        }
      }
    };
  }

  notEqual (args) {
    if (args.num1 != args.num2){
      return true;
    } else {
      return false;
    }
  }
  bigOrEqual(args) {
    if (args.num1 >= args.num2){
      return true;
    } else {
      return false;
    }
  }
  smallOrEqual (args) {
    if (args.num1 <= args.num2){
      return true;
    } else {
      return false;
    }
  }
  returntrue () {
    return true;
  }
  returnfalse () {
    return false;
  }
  isInt (args){
    if (args.num === Math.round(args.num)){
      return true;
    } else {
      return false;
    }
  }
  ifReporter (args){
    if (args.con){
      return args.yes;
    } else {
      return args.no;
    }
  }
  xor (args){
    if ((!(args.con1 && args.con2)) && (args.con1 || args.con2)){
      return true;
    } else {
      return false;
    }
  }
  numberOrtext (args){
    return args.nt;
  }
  power (args){
    return Math.pow(args.num1, args.num2);
  }
  scaleSwitch (args){
    return ((args.switchNum - (args.frommin)) * (1 / ((args.frommax) - (args.frommin)))) * ((args.tomax) - (args.tomin)) + (args.tomin);
  }
  roundtofloat (args){
    return ((Math.round(args.num * Math.pow(10, args.ord))) / Math.pow(10, args.ord));
  }
  editNum (args){
    if(args.option === 'wrap'){return (-(args.num))}
    if(args.option === 'divide'){return 1 / args.num}
    if(args.option === 'root'){return Math.pow(args.num, 0.5)}
  }
  specialsign (args){
    if(args.spe === 'pi'){return Math.PI}
    if(args.spe === 'e'){return Math.E}
  }
  upperandlower(args) {
    if (args.FORMAT === 'up') {
      return args.TEXT.toString().toUpperCase();
    } else {
      return args.TEXT.toString().toLowerCase();
    }
  }
  color (args){
    return args.color;
  }
  mixColor (args){
    var colorlist = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    return "#" + colorlist[Math.floor((args.r%256)/16)] + colorlist[args.r%16] + colorlist[Math.floor((args.g%256)/16)] + colorlist[args.g%16] + colorlist[Math.floor((args.b%256)/16)] + colorlist[args.b%16];
  }
}

Scratch.extensions.register(new MoreLogic());
