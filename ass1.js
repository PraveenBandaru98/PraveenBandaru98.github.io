function swa(){
    
    day = new Date();
    hr = day.getHours();
    if(hr<10){
        hr="0"+hr;
    }
    min = day.getMinutes();
    if(min<10){
        min="0"+min;
    }

    sec = day.getSeconds();
    if(sec<10){
        sec="0"+sec;
    }
    
    
    document.getElementById("time").innerHTML = "TIME: " + hr + ":" + min+ ":" + sec;
    da=day.getDate() 
    mo=day.getMonth()+1
    ye=day.getFullYear() 
    if(da<10){
        da="0"+da;
    }
    if(mo<10){
        mo="0"+mo;
    }
    document.getElementById("date").innerHTML = "DATE: "+ da+"-"+mo+"-"+ye;
    setTimeout(swa, 999);
}
function home(){
    

    document.getElementById("id1").style.display = "Block";
    document.getElementById("id2").style.display = "none";
    document.getElementById("id3").style.display = "none";
    document.getElementById("id4").style.display = "none";
}
function edu(){

    document.getElementById("id1").style.display = "none";
    document.getElementById("id2").style.display = "Block";
    document.getElementById("id3").style.display = "none";
    document.getElementById("id4").style.display = "none";
}
function proj(){

    document.getElementById("id1").style.display = "none";
    document.getElementById("id2").style.display = "none";
    document.getElementById("id3").style.display = "Block";
    document.getElementById("id4").style.display = "none";
    
}
function about(){

    document.getElementById("id1").style.display = "none";
    document.getElementById("id2").style.display = "none";
    
    document.getElementById("id3").style.display = "none";
    document.getElementById("id4").style.display = "Block";
}
