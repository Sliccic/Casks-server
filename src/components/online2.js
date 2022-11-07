export default function App({ server = "sg" }) {

  var host;
  var seraddress;
  var serName;
  if(server == "sb"){
      serName = "天理3.2 B服"
      host = "https://b.casks.me/api?cmd=1101&region=dev_gio&ticket=YSGM%401667803073&sign=47041353e750a19e5b9b3fd18feea8ca72834bcbb5379a7f3a70dd150900244f"
      seraddress = "请前往网站查看教程"
  } 
  

  function setStatus() {
    var online;
    var url = host; 
    console.log("url", url);

    fetch(url)
    .then(res => res.json())
    .then(data => {
      if(data){
          if(typeof data.internal_data !== "undefined"){
            online = data.internal_data;
          }

      }
      document.getElementById(server + "_online").innerText = online;
    })
    .catch(error => {
      console.error('Error:', error);
      online = "获取失败";

      document.getElementById(server + "_online").innerText = online;
    });
  }

  setStatus();
  setInterval(setStatus, 5000);
  
  return (

      <div class="stat">
        <div class="stat-title">{serName}</div>
        <div class="stat-value" id={server + "_online"}></div>
        <div class="stat-desc">{seraddress}</div>

      </div>

  );
}
