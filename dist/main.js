(()=>{"use strict";const e=document.getElementById("info-container");function n(e){return Math.round(1.8*(e-273)+32)}!async function(){const t=await fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.9162&lon=-79.0999&appid=11ffb2188af2c2489b6f36c435f578f4",{mode:"cors"}),i=function(e){const{main:{temp:n,feels_like:t,humidity:i},wind:{speed:d},weather:{0:c}}=e;return{temperature:n,feelsLike:t,humidity:i,windSpeed:d,descriptionObject:c}}(await t.json());let d=i.temperature,c=i.feelsLike;const r=i.humidity,o=i.windSpeed,a=i.descriptionObject.main;d=n(d),c=n(c),function(n){const t=document.createElement("div");t.innerHTML=`Current Weather: ${n}`,e.appendChild(t)}(a),function(n){const t=document.createElement("div");t.innerHTML=`Current Temperature: ${n} F`,e.appendChild(t)}(d),function(n){const t=document.createElement("div");t.innerHTML=`Currently Feels Like: ${n} F`,e.appendChild(t)}(c),function(n){const t=document.createElement("div");t.innerHTML=`Wind speed: ${n} mph`,e.appendChild(t)}(o),function(n){const t=document.createElement("div");t.innerHTML=`Current Humidity: ${n} %`,e.appendChild(t)}(r)}()})();