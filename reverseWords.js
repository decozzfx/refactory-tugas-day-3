function reverse(texts){
    const arrTexts = texts.split(' ')
    const reversedTexts = arrTexts.reduce((acc, val) => {
        const word = val.split('').reverse().join('')
        acc.push(word)
        
       return acc 
    }, [])
    
    console.log(reversedTexts.join(' '))
}

reverse('lorem ipsum tirem')