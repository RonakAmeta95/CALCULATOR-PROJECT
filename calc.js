let cal=document.querySelector("input");
let btn=document.querySelectorAll("button");
let str="";

btn.forEach(i=>{
    i.addEventListener("click",function(){
        if ( (i.textContent !== "=") && (i.textContent !=="AC") && (i.textContent !=="DEL")) {
        str=str+i.textContent;
        cal.value=str;
        }
        else if (i.textContent === "AC"){
            str="";
            cal.value=str;
        }
        else if (i.textContent === "DEL"){
            str=str.substring(0,(str.length-1));
            cal.value=str;
        }
        else if (i.textContent === "="){
            cal.value=eval(str);
            str=eval(str).toString();
                if (i.textContent === "DEL"){
                    str=eval(str).toString().substring(0,(str.length-1));
                    cal.value=str;}
        }
        else{
            cal.value="ERROR";
        }
    })

});

document.addEventListener("keydown",function(){
    cal.value="ERROR";
})

















