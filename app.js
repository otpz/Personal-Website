const countDate = new Date('Mar 17, 2023 00:00:00').getTime();

function newYear(){
    const now = new Date().getTime()
    let gap = countDate - now;
    console.log("gap değer",gap)

    let second = 1000
    let minute = second * 60
    let hour = minute * 60
    let day = hour * 24

    let d = Math.floor(gap / (day))
    console.log("day değer",d)
    let h = Math.floor((gap % day) / hour)    
    console.log("hour değer",h)
    let m = Math.floor((gap % hour) / minute) 
    console.log("minute değer",m)
    let s = Math.floor((gap % minute) / second) 
    console.log("second değer",s)


    document.querySelector("#day").innerHTML = d
    document.querySelector("#hour").innerHTML = h
    document.querySelector("#minute").innerHTML = m
    document.querySelector("#second").innerHTML = s
}

setInterval(function() {
    newYear()
},1000);