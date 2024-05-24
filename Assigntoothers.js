
document.getElementById("test7").innerHTML = users.map(user => { 
  return `<div class="div0">
  <img src=${user.image}  style="border-radius: 90%;width: 80px;height: 80px;margin-top: 25px;"/>
  <p style="
  font-weight: 700;">${user.user}</p>
  <div class="test2hash"> 
  <div style="display: flex;flex-direction: row;gap:5px;margin-left:8px;"> 
    <img src="images/call.png"  class="test1img" />  
        <p class="test1p">${user.contact}</p></div>
        <div style="display: flex;flex-direction: row;margin-top:8px;gap:5px;margin-left: 8px;">
        <img src="images/mail.png"  class="test1img"/>  
           <p class="test1p">${user.email}</p></div>

    </div>
    <div style="width: 25px;background-color:red;">
    </div>
<div style="display: flex;flex-direction: row;padding :0px;gap:10px;justify-content: center;">
<div style="background-color:#FFEFEA;  width: 60px;border-radius: 8px;height:20px;color:#FA6230;padding-top :4px; font-size: 11px;" >${user.users}</div>
<div style="background-color:#FFEFEA;  width: 60px;border-radius: 8px;height:20px;color:#FA6230;padding-top :4px; font-size: 11px;" >${user.staff}</div>
</div>
</div>`;
}).join('');




