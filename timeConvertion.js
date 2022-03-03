function timeConversion(s) {
    const [time] = s.split(" "); // 07:05:45PM
    let [hours, minutes,seconds] = time.split(":"); // 07 // 05 // 45PM
    // console.log(hours)
    
    if (hours === "12" && seconds.includes('AM')) {
        hours = "00";
        let sec = seconds.split('')
        let digit1= sec[0]
        let digit2=sec[1]
        seconds = digit1 + digit2
        console.log(sec)
        
    } else if (seconds.includes('PM') && hours != "12") {
            hours = parseInt(hours, 10) + 12;
            let sec = seconds.split('')
            let digit1= sec[0]
            let digit2=sec[1]
            seconds = digit1 + digit2
            
    }
            
    return `${hours}:${minutes}:${seconds}`;
}



    const s = '07:05:45PM'
    // const s = '12:05:45AM'

    const result = timeConversion(s);

    console.log(result)

