
let userName = prompt("Adınız Nedir?");
let userdiv = document.querySelector("#myName");
days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma","Cumartesi", "Pazar"] 


let time2Id = setTimeout(function showtime(){
    
    let date = new Date;
    let time = document.querySelector("#myClock");
    time.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" "+days[date.getDay()-1];
    userdiv.innerHTML = ` ${userName}`
    time2Id = setTimeout(showtime,1000);
},1000);




