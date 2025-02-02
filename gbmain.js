// let usname=document.getElementById('usname');
// console.log(usname.value);
// document.getElementById("usname").addEventListener("input",printval);
// function printval(){
//     document.getElementById("demo").innerHTML=Date();
// }



function printval(){
    const uinfo=document.getElementById("usname").value;
    const url=`https://api.github.com/users/${uinfo}`;
    fetch(url)
    .then((val)=>val.json())
    .then((data)=>{
        console.log(data);
        urluser=`https://github.com/${uinfo}`;
        usnm=data.login;
        nm=data.name;
        av=data.avatar_url;
        rep_no=data.public_repos;
        replink=data.repos_url;
        hlink=data.html_url;
        crtat=data.created_at;
        lupdt=data.updated_at;
        ctdt=data.created_at;
        cdt=ctdt.slice(0,10);
        console.log(av);
        let dt= lupdt.slice(0,10);
        fetch(replink)
        .then((v)=>v.json())
        .then((dat)=>{
            console.log(dat);
        });
        document.getElementById("demo").innerHTML = `<div style="padding: 20px";>
        <hr size="3px" style="background-color: black;">
        <img src="${av}" style="float:right" width="150" height="150">
        Name:  ${nm} <br><br>
        Username:  <a href="${urluser}" target="_blank">${usnm}</a> <br><br>
        <div>Number of public repositories: ${rep_no} <a href="${replink}" target="_blank"><i style="font-size: small;">view public repositories</i></a></div>
        <br>
        Last modified on: ${dt} <br><br>
        email: <br><br>
        created at: ${cdt}

        </div>
        `
    });
}






