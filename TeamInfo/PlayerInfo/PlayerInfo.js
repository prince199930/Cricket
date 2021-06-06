var player_data = JSON.parse(localStorage.getItem("player_data"));
console.log(player_data)

var img = "";
if(player_data.Team_nameTeam_name=="Australia"){
    img = "https://static.toiimg.com/thumb/msid-79167913,imgsize-996530,width-400,resizemode-4/79167913.jpg"
}
else if(player_data.Team_name=="Bangladesh"){
    img = "https://ss.thgim.com/cricket/article27263506.ece/alternates/FREE_380/mashrafe-mortazajpg";
}
else if(player_data.Team_name=="England"){
    img = "https://resources.pulse.icc-cricket.com/players/130x150/3318.png";
}
else if(player_data.Team_name=="India"){
    img = "https://i.ndtvimg.com/i/2017-09/mahendra-singh-dhoni-afp_806x605_41504452160.jpg";
}
else if(player_data.Team_name=="Netherlands"){
    img = "https://img.cricketworld.com/images/f-057386/piet-2-zonder-logo.jpg";
}
else if(player_data.Team_name=="New Zealand"){
    img = "https://www.cricket.com.au/~/-/media/News/2021/04/01FinnAllen.ashx?w=1600";
}
else if(player_data.Team_name=="Pakistan"){
    img = "https://resources.pulse.icc-cricket.com/ICC/photo/2019/10/03/3b70b19c-5ab6-4f61-bf04-c5f4e6deda45/GettyImages-1151926255.jpg";
}
else if(player_data.Team_name=="South Africa"){
    img = "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2020/07/11133518/gettyimages-1153214508-1559534800-1568x1052.jpg";
}
else if(player_data.Team_name=="Sri Lanka"){
    img = "https://media.gettyimages.com/photos/shehan-jayasuriya-of-sri-lanka-reacts-after-being-bowled-during-game-picture-id1184813695?s=612x612"
}
else if(player_data.Team_name=="West Indies"){
    img = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/jasonholder_1200x768.png?9T2APWkYtqLK50vdTd03lL1rwtX099Wp&size=770:433";
}
else if(player_data.Team_name=="Zimbabwea"){
    img = "https://s3-eu-west-2.amazonaws.com/newzimlive/wp-content/uploads/2021/02/10130640/Javeria-Khan.jpg";
}

var home = document.getElementById("player-info-root");
var full_card = document.createElement("div");
full_card.style.boxShadow = "0 6px 6px #ccc";
full_card.style.borderRadius = "4%"
full_card.style.display = "flex";
full_card.style.width = "50%";
full_card.style.height = "45vh"
full_card.style.marginLeft = "23%";
full_card.style.marginTop = "12%"
var main_card = document.createElement("main_div");
main_card.className="card";
main_card.style.width = "50%"
main_card.style.marginRight = "9%"
var Team_image = document.createElement("img");
Team_image.className="card-img-top"
Team_image.alt="Image"
Team_image.src=img;
Team_image.style.width = "100%";
Team_image.style.borderRadius = "4%"
var sub_card = document.createElement("div");
sub_card.className="card-body";
sub_card.style.width = "49%";
sub_card.style.marginTop = "4%"
var Team_name = document.createElement("h2");
Team_name.innerHTML="Team Name :" + player_data.Team_name;
var player_name = document.createElement("h3");
player_name.className='card-title'
player_name.innerHTML = "Player_Name : " + player_data.player_name;
var price = document.createElement("p");
price.className="card-text"
price.innerHTML = "Price :" + player_data.uniqie_id*100000;
var playing_status = document.createElement("p");
playing_status.innerHTML="Playing Status :" + player_data.Playing_status;
var role = document.createElement("p");
role.innerHTML="Role :" + player_data.role;
main_card.appendChild(Team_image);
sub_card.appendChild(Team_name);
sub_card.appendChild(player_name)
sub_card.appendChild(price);
sub_card.appendChild(playing_status);
sub_card.appendChild(role)
full_card.appendChild(main_card)
full_card.appendChild(sub_card);
home.appendChild(full_card);