export default function App({ server = "sg" }) {

  var host;
  var seraddress;
  var serName;
  if(server == "s1"){
      serName = "天理3.1指令一服在线人数:"
      host = "f1.casks.me"
      seraddress = "游玩:login.casks.me, 远程指令https://f1.casks.me"
  } else if(server == "s2"){
      serName = "天理3.1指令二服在线人数:"
      host = "f2.casks.me"
      seraddress = "游玩:login.casks.me, 远程指令https://f2.casks.me"  
  } else if(server == "s3"){
      serName = "天理3.1指令三服在线人数:"
      host = "f3.casks.me"
      seraddress = "游玩:login.casks.me, 远程指令https://f3.casks.me"
  } else if(server == "s4"){
      serName = "天理3.1指令四服在线人数:"
      host = "f4.casks.me"
      seraddress = "游玩:login.casks.me, 远程指令https://f4.casks.me"      
  } else if(server == "ss"){
      serName = "天理3.0魂服（无指令）在线人数:"
      host = "soul.casks.me:12100"
      seraddress = "电脑：soul.casks.me:12100"
  } else if(server == "sgsr"){
    serName = "天理星穹铁道服GSR"
    host = "gsr.casks.me:12101"
    seraddress = "gsr.casks.me:12101，请前往网站查看教程"
}

  

  function setStatus() {
    var online;
    var mem;
    var url = `https://${host}/status/server`; 
    //console.log("url", url);
    mem = ""

    fetch(url)
    .then(res => res.json())
    .then(data => {
      if(data){
        if(data.status){
          if(typeof data.status.playerCount !== "undefined"){
            online = data.status.playerCount;
          }

          if(typeof data.status.mem !== "undefined"){
            mem = "内存占用：" + data.status.mem;
          }
        }
      }
      document.getElementById(server + "_online").innerText = online;
      document.getElementById(server + "_mem").innerText = mem;
    })
    .catch(error => {
      console.error('Error:', error);
      online = "获取失败";

      document.getElementById(server + "_online").innerText = online;
      document.getElementById(server + "_mem").innerText = mem;
    });
  }

  setStatus();
  setInterval(setStatus, 5000);
  
  return (

      <div class="stat">
        <div class="stat-title">{serName}</div>
        <div class="stat-value" id={server + "_online"}></div>
        <div class="stat-title" id={server + "_mem"}></div>
        <div class="stat-desc">{seraddress}</div>

      </div>

  );
}
