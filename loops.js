for (let i = 1; i < 10; i++){
    let k = 0
    for(let j = 0; j < 10; j++){
        for(let k = 0; k < 10; k++){

            var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
            var plus = (i * 100 + j * 10 +  k);
            if (pow == plus) 
            {     
                console.log(pow);
            }
        }
    }
    // console.log('\n')
    // console.log(k)
}