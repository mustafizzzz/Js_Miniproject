const endDate = "13 July 2023 11:50 PM";

document.getElementById("end-date").innerText=endDate;

const inputs= document.querySelectorAll('input');

const clock =()=>{
    const end = new Date(endDate);
    const now = new Date(); 
    const diff = (end - now)/1000;
    if (diff < 0) 
    {
        return
        
    }
    inputs[0].value=Math.floor(diff/3600/24); //days
    inputs[1].value=Math.floor((diff/3600)%24); //hr
    inputs[2].value=Math.floor((diff/60)%60); //min
    inputs[3].value=Math.floor(diff%60); //sec



    console.warn(end);
    console.warn(now);
    console.warn(diff);

}

clock();

setInterval(
    ()=>{clock()},
    1000
)