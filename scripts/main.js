const myImage = document.querySelector('img');

myImage.onclick = ()=>{
    const Src = myImage.getAttribute("src");
    if (Src === 'images\\avemujica.jpg'){
        myImage.setAttribute("src","images\\avemujicar.jpg");
    }else{
        myImage.setAttribute("src","images\\avemujica.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("请输入用户名");
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem("name",myName);
    myHeading.textContent = myName+", ようこそ。Ave Mujicaの世界へ"
    }

}

if(!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = storedName+", ようこそ。Ave Mujicaの世界へ"
}

myButton.onclick = ()=>{
    setUserName();
}