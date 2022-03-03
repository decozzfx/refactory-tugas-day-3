function minusIntegerIs(int){
    var arr = int.split(',')
    var minus = arr.filter(r => r < 0)
    if(minus.length) return console.log('-')
    console.log('no minus')    
}

minusIntegerIs('1,5,-9')