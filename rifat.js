document.getElementById('btn-login').addEventListener('click',function(){
    const emailFeild= document.getElementById('user-email');
    const email= emailFeild.value;

    const passFeild= document.getElementById('user-pass');
    const password= passFeild.value;

    if(email=== "www.r123@gmail.com" && password==="rifat123"){
        window.location.href= "another.html" ;
    }
    else{
        alert("invalid user");
    }
})

