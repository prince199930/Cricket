var player_data = JSON.parse(localStorage.getItem("player_data"));
console.log(player_data)

var img = "";
if(player_data.Team_name=="Chennai Super Kings"){
    img = "https://ss.thgim.com/cricket/ipl/article34359148.ece/alternates/FREE_380/Dhonijpg"
}
else if(player_data.Team_name=="Royal Challengers Banglore"){
    img = "https://www.mykhel.com/img/400x90/2019/09/kohlircb1-1568901575.jpg";
}
else if(player_data.Team_name=="Mumbai Indians"){
    img = "https://i.pinimg.com/originals/91/a9/1f/91a91fd1e9c592ab888ba2b62eec78e3.jpg";
}
else if(player_data.Team_name=="Kolkata Knight Riders"){
    img = "https://assets.telegraphindia.com/telegraph/2020/Oct/1604075251_ells7wixgakxzid.jpg";
}
else if(player_data.Team_name=="Sunrisers Hyderabad"){
    img = "https://cdn.insidesport.co/wp-content/uploads/2021/02/22175404/2021-02-22-1-1.jpg";
}
else if(player_data.Team_name=="Delhi Capitals"){
    img = "https://images.financialexpress.com/2021/03/Rishabh-Pant-Delhi-Capitals-captain-IPL-2021.jpg";
}
else if(player_data.Team_name=="Rajasthan Royals"){
    img = "https://aniportalimages.s3.amazonaws.com/media/details/Samson_jan20_T48EEk7.jpg";
}
else if(player_data.Team_name=="Punjab Kings"){
    img = "https://images.outlookindia.com/public/uploads/articles/2019/12/19/rahul_kxip_571_855.jpg"
}

var home = document.getElementById("player-info-root");
var full_card = document.createElement("div");
full_card.style.boxShadow = "0 6px 6px #ccc";
full_card.style.backgroundColor = "#fff"
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
Team_image.style.height = "45vh"
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