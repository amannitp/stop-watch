let displayTime=document.getElementById('displayTime')
const stopButton=document.querySelector('.stop')
const startButton=document.querySelector('.start')
const resetButton=document.querySelector('.reset')
let myInterval; 
let [seconds,minutes,hours]=[0,0,0]

stopButton.addEventListener('click',function(){
    clearInterval(myInterval)
    let h;
    let m;
    let s ;
    displayTime.innerHTML=`${h=hours<10 ?'0'+hours:hours}:${m=minutes<10?'0'+minutes:minutes}:${s=seconds<10 ?'0'+seconds:seconds}`
})

resetButton.addEventListener('click',function(){
    displayTime.innerHTML="00:00:00"
    clearInterval(myInterval);
    [seconds,minutes,hours]=[0,0,0]
    
    
})
startButton.addEventListener('click',function(){

    myInterval=setInterval(() => {
        setTime()
    }, 1000);
})
function resetTime(){

}
function setTime(){
    seconds++;
    if(seconds===60){
        seconds=0;
        minutes++;
    }
    if(minutes===60){
       minutes=0;
       hours++;
    }
    let h;
    let m;
    let s ;
    displayTime.innerHTML=`${h=hours<10 ?'0'+hours:hours}:${m=minutes<10?'0'+minutes:minutes}:${s=seconds<10 ?'0'+seconds:seconds}`
}