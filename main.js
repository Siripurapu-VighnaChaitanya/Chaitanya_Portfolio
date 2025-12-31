let skills_arr = ["FrontEnd Developer!", "Python Developer!", "Software Developer!"]
let typing = document.querySelector(".typing");
let index = 0;
setInterval(()=>{
    typing.innerHTML=`<b>${skills_arr[index]}</b>`
    index=(index+1)%skills_arr.length
},3000);