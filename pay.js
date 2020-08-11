var res = localStorage.getItem("type");
console.log(res);
switch (res) {
  case "action":


    var para = document.createElement("a");
    var node = document.createTextNode("Click here to download " + res);
    para.appendChild(node);
    para.style.marginLeft = "20px";
    para.style.marginTop = "20px";
    para.style.color = "blue";
    para.href = "mp3/action.rar";
    para.download = "action.rar"
    document.getElementById("pop1").appendChild(para);


    break;
  case "fantasy":
    var para = document.createElement("a");
    var node = document.createTextNode("Click here to download " + res);
    para.appendChild(node);
    para.style.marginLeft = "20px";
    para.style.marginTop = "20px";
    para.style.color = "blue";
    para.href = "mp3/fantasy.rar";
    para.download = "fantasy.rar"
    document.getElementById("pop1").appendChild(para);

    break;
  case "horror":
    var para = document.createElement("a");
    var node = document.createTextNode("Click here to download " + res);
    para.appendChild(node);
    para.style.marginLeft = "20px";
    para.style.marginTop = "20px";
    para.style.color = "blue";
    para.href = "mp3/horror.rar";
    para.download = "horror.rar"
    document.getElementById("pop1").appendChild(para);
    break;
  case "romance":
    var para = document.createElement("a");
    var node = document.createTextNode("Click here to download " + res);
    para.appendChild(node);
    para.style.marginLeft = "20px";
    para.style.marginTop = "20px";
    para.style.color = "blue";
    para.href = "mp3/romance.rar";
    para.download = "romance.rar"
    document.getElementById("pop1").appendChild(para);
    break;
  case "scifi":
    var para = document.createElement("a");
    var node = document.createTextNode("Click here to download " + res);
    para.appendChild(node);
    para.style.marginLeft = "20px";
    para.style.marginTop = "20px";
    para.style.color = "blue";
    para.href = "mp3/scifi.rar";
    para.download = "scifi.rar"
    document.getElementById("pop1").appendChild(para);
    break;

  default:
    // code block
}
