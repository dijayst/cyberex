
document.getElementById("test7").innerHTML = users.map(user => { 
  return `<div class="divd">
  <img src=${user.image1}  style="border-radius: 90%;width: 58px;height: 58px;margin-top: 25px;"/> 
 
    
  <div style="display: flex;flex-direction: column;margin: 10px;border-radius: 4px;width: 159px;height:60px;">
        <div style="display: flex;flex-direction: row;justify-content: center;">
            <p style="color:#000000;font-weight:600;font-size: 18px;">${user.country}</p></div>
            <div style="display: flex;flex-direction: row;justify-content: center;">

               <p style="color:#414141; font-size: 12px;white-space: nowrap;">exchange per unit (CAD/naira)</p></div>

    </div>
    <div class="test5div2" onclick="submitForm6()">Edit Country</div>
    

  </div>`;
}).join('');





