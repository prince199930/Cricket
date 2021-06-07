var data = JSON.parse(localStorage.getItem("aboutteam"));
console.log(data)

var img = "";
if(data[0].Team_name=="Chennai Super Kings"){
    img = "https://ss.thgim.com/cricket/ipl/article34359148.ece/alternates/FREE_380/Dhonijpg"
}
else if(data[1].Team_name=="Royal Challengers Banglore"){
    img = "https://www.mykhel.com/img/400x90/2019/09/kohlircb1-1568901575.jpg";
}
else if(data[2].Team_name=="Mumbai Indians"){
    img = "https://i.pinimg.com/originals/91/a9/1f/91a91fd1e9c592ab888ba2b62eec78e3.jpg";
}
else if(data[3].Team_name=="Kolkata Knight Riders"){
    img = "https://assets.telegraphindia.com/telegraph/2020/Oct/1604075251_ells7wixgakxzid.jpg";
}
else if(data[4].Team_name=="Sunrisers Hyderabad"){
    img = "https://cdn.insidesport.co/wp-content/uploads/2021/02/22175404/2021-02-22-1-1.jpg";
}
else if(data[5].Team_name=="Delhi Capitals"){
    img = "https://images.financialexpress.com/2021/03/Rishabh-Pant-Delhi-Capitals-captain-IPL-2021.jpg";
}
else if(data[6].Team_name=="Rajasthan Royals"){
    img = "https://aniportalimages.s3.amazonaws.com/media/details/Samson_jan20_T48EEk7.jpg";
}
else if(data[7].Team_name=="Punjab Kings"){
    img = "https://images.outlookindia.com/public/uploads/articles/2019/12/19/rahul_kxip_571_855.jpg"
}


var home = document.getElementById("team-info-root");
home.style.display="flex";
home.style.flexWrap="wrap";
home.style.columnGap = "5%"
for(var i=0;i<data.length;i++){
var main_card = document.createElement("div");
main_card.className="card"
main_card.style.borderRadius = "4%"
main_card.style.boxShadow = "0 6px 6px #ccc"
main_card.style.width = "25%";
main_card.style.height = "75vh"
main_card.style.marginLeft = "4%"
main_card.style.marginBottom = "2%";
main_card.style.marginTop = "4%"
var inside_card = document.createElement("div");
inside_card.style.width="82%";
inside_card.style.height = "30vh";
inside_card.style.marginLeft = "8.5%";
inside_card.style.marginTop = "4%";
var Team_image = document.createElement("img");
Team_image.className="card-img-top"
Team_image.alt="Image";
Team_image.style.borderRadius = "4%"
Team_image.src=img;
Team_image.style.width="100%"
Team_image.style.height="100%"
var sub_card = document.createElement("div");
sub_card.style.marginLeft = "7.5%"
sub_card.className="card-body";
var Team_name = document.createElement("h3");
Team_image.style.fontWeight = "bold";
Team_name.innerHTML="Team Name : " + data[i].Team_name;
var player_name = document.createElement("h4");
player_name.className='card-title'
player_name.innerHTML = "Player_Name : " + data[i].player_name;
var price = document.createElement("p");
price.className="card-text"
price.innerHTML = "Price :" + data[i].uniqie_id*10000  + " Cr";
var playing_status = document.createElement("p");
playing_status.innerHTML="Playing Status :" + data[i].Playing_status;
var role = document.createElement("p");
role.innerHTML="Role : " + data[i].role;
var btn = document.createElement("button");
btn.style.border = "none";
btn.style.borderRadius = '15px'
btn.style.width = "89%"
btn.style.color = "black";
btn.style.cursor = "pointer";
btn.style.padding = "4%"
btn.style.marginLeft = "2%"
btn.style.backgroundColor = "#f9aa33"
btn.innerHTML="Click Here";
btn.setAttribute("id", i);
btn.addEventListener('click', (e)=>aboutPlayer(e.target.id));
inside_card.appendChild(Team_image)
main_card.appendChild(inside_card)
sub_card.appendChild(Team_name);
sub_card.appendChild(player_name)
sub_card.appendChild(price);
sub_card.appendChild(playing_status);
sub_card.appendChild(role)
sub_card.appendChild(btn);
main_card.appendChild(sub_card)
home.appendChild(main_card);
}



function aboutPlayer(i){
    var player_data = data[i]
    console.log(data[i])
    localStorage.setItem("player_data", JSON.stringify(player_data));
    location.assign('./PlayerInfo/PlayerInfo.html');
}
