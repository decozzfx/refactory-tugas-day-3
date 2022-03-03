// Buatah sebuah fungsi untuk menemukan jumlah kata maksimal dari yang di berikan sentences

// const sentences = [
//     "Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.",
//     "Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.",
//     "Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.",
// ];

//  Output:
//  23

const sentences = [
        "Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.",
        "Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.",
        "Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.",
    ];

function totalWords(input){

    const sentence = input.map(sentence => sentence.split(','))

    const words = sentence.map((word) => word.join(',').split(' ')) //problem 2

    const wordLength = words.map(word => word.length)

    const maxArray = Math.max.apply(Math, wordLength)
    
    console.log(words)

}

totalWords(sentences)
