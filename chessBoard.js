const p = 8
const l = 8
let s = ''

for( let i = 0; i < p ; i++ ){          // loping p for row using variable P
    if( i % 2 == 0){                    // conditional of first index of row
        for ( let j = 0; j < l; j++ ){  // looping for colomn use variable L
            if( j % 2 == 0 ){
                s += ' '
            }else{
                s += '#'
            }
        }
    }else{
        for( let j = 0; j < l ; j++ ){  // looping for colomn use variable L
            if( j % 2 == 0 ){
                s += '#'
            }else{
                s += ' '
            }
        }
    }
 
    s += '\n' // for new row every conditional get fullfied to make
}

console.log(s)