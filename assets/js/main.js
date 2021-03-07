"usestrict";
const saved = [
  { name: "supercode", secret: "no_one_will_know" },
  { name: "music_fan_1990", secret: "WeAreTheChampi0ns" },
  { name: "kasia", secret: "kasia" },
];
let mother_div = document.getElementById("mother");
let person = document.getElementById("username_log");
let main_main = document.querySelector("main");
let header_header= document.querySelector("header");
function getInfo() {
  let username_input = document.getElementById("username");
  let password_input = document.getElementById("password");
  let nope_p = document.getElementById("nope");
  let check = saved.find(user => user.name == username_input.value && user.secret == password_input.value)
  function setCookie( username, password, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = "go" + "=" + username + password + ";" + expires;
  }
    if (check) {
        mother_div.remove();
        main_main.classList.remove("blur");
        header_header.classList.remove("blur");
        person.innerHTML = `moin ${check.name}`;
        setCookie(username_input,password_input,1)
    } else {
        nope_p.innerHTML = "nope du nicht";
        event.preventDefault();
        nope_p.classList.add("wrong");
        username_input.classList.add("wrong");
    }
    ;
}