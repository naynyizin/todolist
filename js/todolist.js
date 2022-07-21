const inputtag = document.querySelector(".inputs");
const btn= document.querySelector(".btn");
const ultag= document.querySelector(".ultag");
const clearbtn= document.querySelector(".clearbtn")

const buildlitag = ()=>{
    taskarr.forEach((element,index) => {
        const litag = document.createElement("li");
        const text = element;
        const deleteitem = document.createElement("i");
        deleteitem.classList.add("fa-solid","fa-trash-alt");
        litag.textContent=`${index+1}.  ${text}`;
        litag.classList.add('listyle');
        litag.append(deleteitem);
        
        ultag.appendChild(litag);
    
    });
}

let taskarr;

btn.addEventListener("click", ()=>{
    ultag.textContent='';
    let getinput = inputtag.value;
    
    if(localStorage.getItem("tasks") === null && getinput === ""){
        return;
    }
    else if(localStorage.getItem("tasks") === null){
       taskarr=[];
    }else if(getinput === ""){
        buildlitag();
        return
    }
    else{
        taskarr = JSON.parse(localStorage.getItem("tasks"));
    }

    taskarr.push(getinput);
    localStorage.setItem("tasks",JSON.stringify(taskarr));
    buildlitag();
    trashbtn();

    inputtag.value='';
        
});

if(localStorage.getItem("tasks")!==null){
    taskarr = JSON.parse(localStorage.getItem("tasks"));
    buildlitag();
}

const trashbtn = ()=>{
    const trashtag= document.querySelectorAll(".fa-solid");

    trashtag.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        ultag.textContent='';
        taskarr = JSON.parse(localStorage.getItem("tasks"));
        taskarr.splice(index,1);
        localStorage.setItem("tasks",JSON.stringify(taskarr));
        buildlitag();
        trashbtn();
    })
})
}

trashbtn();

clearbtn.addEventListener('click',()=>{
    localStorage.clear();
    ultag.innerHTML="";
})








