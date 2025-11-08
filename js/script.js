let btn =document.getElementById("btnSubmit");
let input=document.getElementById("inputField");
let unoderList=document.getElementById("unoderList");



btn.addEventListener("click",()=>{
    let inputText= input.value;

    if(inputText === ""){

        alert("Write Something");

    }else{
        let li =document.createElement("li");
        li.innerHTML =inputText;
        li.style.border="1px solid black";
        li.style.padding="5px";
        li.style.marginTop="5px";
        li.style.marginBottom="5px";
        let deleteBtn=document.createElement("button");
        deleteBtn.innerHTML="Delete";
        deleteBtn.style.background="red";
        deleteBtn.style.color="white";
        deleteBtn.style.paddingTop="10px";
        deleteBtn.style.paddingBottom="10px";
        deleteBtn.style.paddingLeft="30px";
        deleteBtn.style.paddingRight="30px";
        deleteBtn.style.borderRadius="30px";
        deleteBtn.style.marginLeft="30px";
        deleteBtn.addEventListener("click",()=>{
            li.remove();
        })
        li.appendChild(deleteBtn);
        unoderList.appendChild(li);

          input.value = "";

    }

    

    
})


