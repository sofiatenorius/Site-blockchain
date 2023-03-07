let coins = ['btcbrl@ticker', 'ethbrl@ticker', 'usdtbrl@ticker', 'usdcusdt@ticker', 'bnbbrl@ticker', 'busdbrl@ticker', 'xrpbrl@ticker', 'adabrl@ticker', 'solbrl@ticker', 'dogebrl@ticker'];

let ws = new WebSocket("wss://stream.binance.com:9443/ws/" + coins.join('/'));

let lastPrice = null;

let lastPercent = null;

ws.onopen = function() {
    console.log("Binance connected...");
};

ws.onmessage = function(evt) {
  try {
    let msgs = JSON.parse(evt.data);
 
    if (Array.isArray(msgs)) {
        for (let msg of msgs) {
        handleMessage(msg);
      }
    } else {
      handleMessage(msgs)
    }
  } catch (e) {
    console.log('Unknown message: ' + evt.data, e);
  }
}

ws.onclose = function() {
  console.log("Binance disconnected");
}

function handleMessage(msg) {
  const stream = msg.s;
  const symbol = document.getElementsByClassName('coin-simbol');
  console.log(msg)
  for(var i = 0; i < symbol.length; i++){
    if (stream === symbol[i].innerHTML){ 
      let priceClass = "." + symbol[i].innerHTML + "-price";
      let percentClass = "." + symbol[i].innerHTML + "-percent";
      let price = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(msg.c)
      let percent = parseFloat(msg.P).toFixed(2) + "%";
        if (percent > lastPercent){
          document.querySelector(percentClass).style.color = "green"
        } 
        else if (percent == lastPercent){ 
          document.querySelector(percentClass).style.color = "white"
        }
        else if (percent < lastPercent){
          document.querySelector(percentClass).style.color = "red"
        } 
    
      lastPercent = percent;
      
      document.querySelector(priceClass).innerText = price;
      document.querySelector(percentClass).innerText = percent;

        
    }   
  }
}