var data = JSON.parse(localStorage.getItem("aboutteam"));
console.log(data)

var img = "";
if(data[0].Team_name=="Australia"){
    img = "https://static.toiimg.com/thumb/msid-79167913,imgsize-996530,width-400,resizemode-4/79167913.jpg"
}
else if(data[1].Team_name=="Bangladesh"){
    img = "https://ss.thgim.com/cricket/article27263506.ece/alternates/FREE_380/mashrafe-mortazajpg";
}
else if(data[2].Team_name=="England"){
    img = "https://resources.pulse.icc-cricket.com/players/130x150/3318.png";
}
else if(data[2].Team_name=="India"){
    img = "https://i.ndtvimg.com/i/2017-09/mahendra-singh-dhoni-afp_806x605_41504452160.jpg";
}
else if(data[2].Team_name=="Netherlands"){
    img = "https://img.cricketworld.com/images/f-057386/piet-2-zonder-logo.jpg";
}
else if(data[2].Team_name=="New Zealand"){
    img = "https://www.cricket.com.au/~/-/media/News/2021/04/01FinnAllen.ashx?w=1600";
}
else if(data[2].Team_name=="Pakistan"){
    img = "https://resources.pulse.icc-cricket.com/ICC/photo/2019/10/03/3b70b19c-5ab6-4f61-bf04-c5f4e6deda45/GettyImages-1151926255.jpg";
}
else if(data[2].Team_name=="South Africa"){
    img = "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2020/07/11133518/gettyimages-1153214508-1559534800-1568x1052.jpg";
}
else if(data[2].Team_name=="Sri Lanka"){
    img = "https://media.gettyimages.com/photos/shehan-jayasuriya-of-sri-lanka-reacts-after-being-bowled-during-game-picture-id1184813695?s=612x612"
}
else if(data[2].Team_name=="West Indies"){
    img = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/jasonholder_1200x768.png?9T2APWkYtqLK50vdTd03lL1rwtX099Wp&size=770:433";
}
else if(data[2].Team_name=="Zimbabwea"){
    img = "https://s3-eu-west-2.amazonaws.com/newzimlive/wp-content/uploads/2021/02/10130640/Javeria-Khan.jpg";
}

var home = document.getElementById("team-info-root");
home.style.display="flex";
home.style.flexWrap="wrap";
home.style.columnGap = "10%"
for(var i=0;i<data.length;i++){
var main_card = document.createElement("div");
main_card.className="card"
main_card.style.boxShadow = "0 6px 6px #ccc"
main_card.style.width = "22%";
main_card.style.height = "70vh"
main_card.style.marginLeft = "3.5%"
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
price.innerHTML = "Price :" + data[i].uniqie_id*10000;
var playing_status = document.createElement("p");
playing_status.innerHTML="Playing Status :" + data[i].Playing_status;
var role = document.createElement("p");
role.innerHTML="Role : " + data[i].role;
var btn = document.createElement("button");
btn.style.border = "none";
btn.style.borderRadius = '15px'
btn.style.color = "black";
btn.style.cursor = "pointer";
btn.style.padding = "4%"
btn.style.marginLeft = "32%"
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
