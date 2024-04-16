
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


const users=[{
    id:1,
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    user:"Admin1",

      user1:"user 1",
      btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
      deactivate:"deactivate",
      no:1,
      timestamp:"sep, 20 2023. 8:29pm",
      type:"debit",
      Bat:"$10,000.00",
    name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile",
    users:"admin",
    staff:"staff",
    price:"$10,000.00",

    
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"olaolu adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"true",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"june 9th,2020. 9:46pm",
  amount:"₦100,000"
    
  },{
    id:2,
    image:"./images/Frame 1000003255.png",
      user:"Admin1",
     name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile",
    users:"admin",
    staff:"staff",
    price:"$10,000.00",
    
    user1:"user 1",
    btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
    deactivate:"deactivate",
    no:2,
    timestamp:"sep, 20 2023. 8:29pm",
    type:"credit",
    Bat:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"olaolu adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"true",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"june 9th,2020. 9:46pm",
  amount:"₦100,000"
      
  },{
    id:3,
    image:"./images/Frame 1000003255.png",
       user:"Admin1",
     name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile",
    users:"admin",
    price:"$10,000.00",
    
    user1:"user 1",
    btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
    deactivate:"deactivate",
    no:3,
    timestamp:"sep, 20 2023. 8:29pm",
    type:"credit",
    Bat:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"olaolu adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"true",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"june 9th,2020. 9:46pm",
  amount:"₦100,000"
   
      
  },{
    id:4,
    image:"./images/Frame 1000003255.png",
    user:"Admin1",
    name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile",
    users:"admin",
    staff:"staff",
    price:"$10,000.00",
    
    user1:"user 1",
    btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
    deactivate:"deactivate",
    no:4,
    timestamp:"sep, 20 2023. 8:29pm",
    type:"debit",
    Bat:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"olaolu adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"true",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"june 9th,2020. 9:46pm",
  amount:"₦100,000"
    
  },
  {
    id:5,
    image:"./images/Frame 1000003255.png",
    user:"Admin1",
    users:"admin",
    staff:"staff",
    name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile" ,
    price:"$10,000.00"  ,
    
    user1:"user 1",
    btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
    deactivate:"deactivate",
    no:5,
    timestamp:"sep, 20 2023. 8:29pm",
    type:"debit",
    Bat:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"olaolu adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"true",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"june 9th,2020. 9:46pm",
  amount:"₦100,000"
  },{
    id:6,
    image:"./images/Frame 1000003255.png",
    user:"Admin1",
    name:"Ayo",
    users:"admin",
    staff:"staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile",
    price:"$10,000.00",
    user1:"user 1",
    btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
    deactivate:"deactivate",
    no:6,
    timestamp:"sep, 20 2023. 8:29pm",
    type:"debit",
    Bat:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"olaolu adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"true",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"june 9th,2020. 9:46pm",
  amount:"₦100,000"
  },{
    id:7,
    image:"./images/Frame 1000003255.png",
    user:"Admin1",
    name:"Ayo",
    users:"admin",
    staff:"staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile",
    price:"$10,000.00",
    user1:"user 1",
    btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
    deactivate:"deactivate",
    no:7,
    timestamp:"sep, 20 2023. 8:29pm",
    type:"credit",
    Bat:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"olaolu adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"true",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"june 9th,2020. 9:46pm",
  amount:"₦100,000"
  },{
    id:8,
    image:"./images/Frame 1000003255.png",
    user:"Admin1",
    name:"Ayo",
    users:"admin",
    staff:"staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile",
    price:"$10,000.00",
    user1:"user 1",
    btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
    deactivate:"deactivate",
    no:5,
    timestamp:"sep, 20 2023. 8:29pm",
    type:"credit",
    Bat:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"olaolu adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"true",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"june 9th,2020. 9:46pm",
  amount:"₦100,000"
  },];

  /**
   
 
  
  function renderProductproducts() {
  // Render users on the page
  const productsContainer = document.getElementById("test2");
  users.forEach(user => {
    const productDiv = document.createElement("div");
    productDiv.style.backgroundColor = "#FFFFFF";
    productDiv.style.width = "19.3%";
    productDiv.style.height = "150px";
    productDiv.style.textAlign = "center";
    productDiv.style.borderRadius = "8px";
    productDiv.style.border = "1px solid #DEDEDE";
    productDiv.style.margin = "3px";
  
    productDiv.innerHTML = `
      <div style="display: flex;flex-direction: row;justify-content: center;margin-top:10px;">
        <p>${user.name}</p>
        <p style="color: #FA6230;font-size: 8px;">${user.verified}</p>
      </div>
      <div style="display: flex;flex-direction: column;background-color: #F6F8FA; margin: 10px;border-radius: 4px;width: 159px;height:60px;">
        <div style="display: flex;flex-direction: row;justify-content: center;">
          <i class="fa-solid fa-magnifying-glass"></i>
          <p>${user.contact}</p>
        </div>
        <div style="display: flex;flex-direction: row;justify-content: center;">
          <i class="fa-solid fa-magnifying-glass"></i>
          <p>${user.email}</p>
        </div>
      </div>
      <div style="background-color: #FA6230;height: 20px;width:159px;color:black;margin: 10px;border-radius: 4px; cursor: pointer;" onclick="redirectToProductDetail(${user.id})">${user.prof}</div>
    `;
  
    productsContainer.appendChild(productDiv);
  });
  }
  
  renderProductproducts();
    */
  
  function renderProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
  
    const productDetail = document.getElementById("productDetail");
    const product = users.find(user => user.id === productId);
  
    if (product) {
        productDetail.innerHTML = `
            
            <img  src=${product.image} style="border-radius: 90%;width: 980px;height: 80px;margin-top: 25px;" alt="profile"/>
            <div  style="display: flex;flex-direction:column;margin-left:10px;line-height:0px;">
            <h1>${product.user1}</h1>
            <div style="display: flex;flex-direction:row; ">
            <div  style="display: flex;flex-direction:column;background-color:#F6F8FA;margin-top:20px;  border-radius: 4px;width: 340px;height: 80px;">
            <div  style="display: flex;flex-direction:row;">
            <div style="display: flex;flex-direction:row;"> <img src="./images/call.png"  width="15px" height="15px" style=" margin-top: 15px;"/> <p style=" margin-top: 20px;">${product.contact}</p> </div>
            <div style="display: flex;flex-direction:row;"><img src="./images/mail.png"  width="15px" height="15px" style=" margin-top: 15px;"/><p style=" margin-top: 20px;">${product.email}</p></div></div>
           <div style="display: flex;flex-direction:row;"><img src="./images/Group.png"  width="15px" height="15px" style=" margin-top: 15px;"/> <p style=" margin-top: 20px;">${product.btcaddress}</p> <img src="./images/file_copy.png"  width="15px" height="15px" style=" margin-top: 15px; margin-left: 5px;"/> </div> 
            </div>
            <div style="background-color: #EA0000;margin-left: 800px;margin-top: 40px;width: 100px;height: 28px;border-radius: 4px; "><p style="text-align:center;">deactivate</p></div>
            </div>
                <!-- Add other detailed product information here -->
            </div>

        `;
       
    } else {
        productDetail.innerHTML = "<p>Product not found</p>";
       
    }
  }
  
  renderProductDetail();
  
  
document.getElementById("table-body3").innerHTML =users.map(item => `
<tr style="margin-left: 50px;height: 50px;">
<td>${item.no}</td>
<td>${item.timestamp}</td>
<td>${item.type}</td>
<td>${item.Bat}</td>
</tr>
`).join('');
 
  
  














































function openDialog() {
  document.getElementById('myModal').style.display = 'block';
}

function closeDialog() {
  document.getElementById('myModal').style.display = 'none';
}

function previewImage() {
  const fileInput = document.getElementById('image');
  const imagePreview = document.getElementById('imagePreview');

  // Clear previous image preview
  imagePreview.innerHTML = '';

  const file = fileInput.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.style.maxWidth = '200px'; // Limit image width for preview
          imagePreview.appendChild(img);
      };
      reader.readAsDataURL(file);
  }
}

function submitForm() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  closeDialog();
}


function myFunction() {
  var x = document.getElementById("myTab");
  if (x.className === "tab") {
    x.className += " responsive";
  } else {
    x.className = "tab";
  }
}



  function openminitab(evt, cityName) {
    var i, tabcontent2, tablinks2;
    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent2.length; i++) {
      tabcontent2[i].style.display = "none";
    }
    tablinks2 = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks2.length; i++) {
      tablinks2[i].className = tablinks2[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen2").click();







  
const users3=[{
  id:1,
    date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"olaolu adedeji",
  contact:"+2348078868319",
  email:"olamigokephys@gmail.com",
  fulfiled:"true",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"june 9th,2020. 9:46pm",
  amount:"₦100,000"
  
},{
  id:2,
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"olaolu adedeji",
  contact:"+2348078868319",
  email:"olamigokephys@gmail.com",
  fulfiled:"true",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"june 9th,2020. 9:46pm",
  amount:"₦100,000"
},{
  id:3,
 
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"olaolu adedeji",
  contact:"+2348078868319",
  email:"olamigokephys@gmail.com",
  fulfiled:"true",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"june 9th,2020. 9:46pm",
  amount:"₦100,000"
},{
  id:4,
  
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"olaolu adedeji",
  contact:"+2348078868319",
  email:"olamigokephys@gmail.com",
  fulfiled:"true",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"june 9th,2020. 9:46pm",
  amount:"₦100,000"
  
},
{
  id:5,
  
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"olaolu adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"true",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"june 9th,2020. 9:46pm",
  amount:"₦100,000"
},{
  id:6,
  date:"dec. 20,2023. 11:34pm",
bankdetails:"0014(0212243711)",
accountname:"olaolu adedeji",
contact:"+2348078868319",
email:"olamigokephys@gmail.com",
fulfiled:"true",
fulfiledby:"olamigokephys@gmail.com",
timefulfiled:"june 9th,2020. 9:46pm",
amount:"₦100,000"
},];




  
document.getElementById("test1").innerHTML = users.map(user => { 
  return `<div style="background-color: #FFFFFF;width:48%;height: 150px; text-align: center;margin: 3px; border-radius: 8px;">
    <div style="display: flex;flex-direction: row;justify-content: center;margin-top:10px;"><p>${user.name}<p style="color: #FA6230;font-size: 8px;background-color:#FFEFEA;">${user.verified}</p></p></div>
    <div style="display: flex;flex-direction: column;background-color: #F6F8FA; margin: 10px;border-radius: 4px;width: 145px;height:59px;">
        <div style="display: flex;flex-direction: row;justify-content: center;"> <i class="fa-solid fa-magnifying-glass"></i>
            <p >${user.contact}</p></div>
            <div style="display: flex;flex-direction: row;justify-content: center;">
                <i class="fa-solid fa-magnifying-glass"></i>
               <p>${user.email}</p></div>

    </div>
    <div style="background-color: #FA6230;height: 20px;width:145px;color:black;margin: 10px;border-radius: 4px;">${user.prof}</div>

  </div>`;
}).join('');

/*
document.getElementById("test2").innerHTML = users.map(user => { 
  return `<div style="background-color: #FFFFFF;width:19.3%;height: 150px; text-align: center; border-radius: 8px;border:1px solid #DEDEDE;margin:3px;">
    <div style="display: flex;flex-direction: row;justify-content: center;margin-top:10px;"><p>${user.name}<p style="color: #FA6230;font-size: 8px;">${user.verified}</p></p></div>
    <div style="display: flex;flex-direction: column;background-color: #F6F8FA; margin: 10px;border-radius: 4px;width: 159px;height:60px;">
        <div style="display: flex;flex-direction: row;justify-content: center;"> <i class="fa-solid fa-magnifying-glass"></i>
            <p >${user.contact}</p></div>
            <div style="display: flex;flex-direction: row;justify-content: center;">
                <i class="fa-solid fa-magnifying-glass"></i>
               <p>${user.email}</p></div>

    </div>
    <div style="background-color: #FA6230;height: 20px;width:159px;color:black;margin: 10px;border-radius: 4px;">${user.prof}</div>

  </div>`;
}).join('');*/



document.getElementById("test5").innerHTML = users.map(user => { 
  return `<div style="background-color: #FFFFFF;width:19.3%;height: 250px; text-align: center; border-radius: 8px;border:1px solid #DEDEDE;margin:3px;">
  <img src=${user.image1}  style="border-radius: 90%;width: 58px;height: 58px;margin-top: 25px;"/> 
 
    
  <div style="display: flex;flex-direction: column;margin: 10px;border-radius: 4px;width: 159px;height:60px;">
        <div style="display: flex;flex-direction: row;justify-content: center;"> <i class="fa-solid fa-magnifying-glass"></i>
            <p>${user.apple}</p></div>
            <div style="display: flex;flex-direction: row;justify-content: center;">
                <i class="fa-solid fa-magnifying-glass"></i>
               <p>${user.link}</p></div>

    </div>
    <div style="background-color: #FA6230;height: 25px;width:160px;color:#FFFFFF;margin: 10px;">edit company</div>
    <div style="background-color: #FDE6E6;height: 25px;width:160px;color:#EA0000;margin: 10px;">deactivate</div>

  </div>`;
}).join('');





document.getElementById("table-body").innerHTML =users.map(item => `
        <tr style="margin-left: 50px;">
            <td>${item.id}</td>
            <td>${item.email}</td>
            <td>300</td>
            <td>${item.price}</td>
        </tr>
    `).join('');


    
document.getElementById("table-body2").innerHTML =users.map(item => `
<tr style="margin-left: 50px;height: 50px;">
    <td>${item.id}</td>
    <td>${item.email}</td>
    <td>${item.amount}</td>
    <td>june 18th,2020. 9:46pm</td>
</tr>
`).join('');


document.getElementById("table-body3").innerHTML =users.map(item => `
        <tr style="margin-left: 50px;height: 50px;">
            <td>${item.id}</td>
            <td>${item.useremail}</td>
            <td>${item.amount}</td>
            <td>${item.date}</td>
            <td>${item.bankdetails}</td>
            <td>${item.accountname}</td>
            <td>${item.fulfiled}</td>
            <td>${item.fulfiledby}</td>
            <td>${item.timefulfiled}</td>
        </tr>
    `).join('');
    
document.getElementById("table-body4").innerHTML =users.map(item => `
<tr style="margin-left: 50px;height: 50px;">
    <td>${item.id}</td>
    <td>another one(12)</td>
    <td>1</td>
    <td>${item.amount}</td>
    <td>false</td>
    <td>all users</td>
    <td>june 9th,2020. 9:46pm</td>
    <td>june 9th,2020. 9:46pm</td>
    <td ><div style="background-color: #FA6230;color: #FFFFFF;height: 25px;padding-top :-5px;padding :10px;
    border-radius: 4px;" > view beneficiaries</div>
    </td>
</tr>
`).join('');



document.getElementById("table-body5").innerHTML =users.map(item => `
        <tr style="margin-left: 50px;height: 50px;">
            <td>${item.id}</td>
            <td>${item.useremail}</td>
            <td>${item.amount}</td>
            <td>${item.date}</td>
            <td>${item.bankdetails}</td>
            <td>${item.accountname}</td>
            <td>${item.fulfiled}</td>
            <td>${item.fulfiledby}</td>
            <td>${item.timefulfiled}</td>
        </tr>
    `).join('');



    
document.getElementById("table-body6").innerHTML =users.map(item => `
<tr style="margin-left: 50px;height: 50px;">
    <td>${item.id}</td>
    <td>${item.useremail}</td>
    <td>${item.amount}</td>
    <td>${item.date}</td>
    <td>${item.bankdetails}</td>
    <td>${item.accountname}</td>
    <td>${item.fulfiled}</td>
    <td>${item.fulfiledby}</td>
    <td>${item.timefulfiled}</td>
</tr>
`).join('');
  
  
  
  
      
  document.getElementById("test3").innerHTML = users.map(user => { 
    return `<div style="width:18%;height: 215px;background-color: #FFFFFF;border-radius: 4px;text-align: center;margin:3px;border:1px solid #DEDEDE;">
    <img src=${user.image}  style="border-radius: 90%;width: 80px;height: 80px;margin-top: 25px;"/>
    <p>${user.user}</p>
    <div style="background-color: #F6F8FA;margin-top: 25px;margin: 13px;width: 150px;display: flex;flex-direction: column;justify-content: space-between;"> 
   <p>${user.contact}</p>
      <p>${user.email}</p></div
      <div style="width: 25px;background-color:red;">
      </div>
  
  </div>`;
  }).join('');
  

  
document.getElementById("test4").innerHTML = users.map(user => { 
  return `<div style="background-color: #FFFFFF;width:19.3%;height: 200px; text-align: center; border-radius: 8px;border:1px solid #DEDEDE;margin:3px;">
    <div style="display: flex;flex-direction: row;margin-top:10px;margin-left:30px;"><p>${user.name}</p><p style="color: #FA6230;font-size: 8px;">${user.verified}</p></div>
    <div style="display: flex;flex-direction: column;background-color: #F6F8FA; margin: 10px;border-radius: 4px;width: 159px;height:60px;">

        <div style="display: flex;flex-direction:row;"> <img src="./images/call.png"  width="15px" height="15px"/> <p>${user.contact}</p> </div>
        <div style="display: flex;flex-direction:row;"> <img src="./images/mail.png"  width="15px" height="15px"/> <p>${user.email}</p> </div>
            


    </div>
    <div style="background-color: #FA6230;height: 20px;width:159px;color:#FFFFFF;margin: 10px;border-radius: 4px;">Assign To Self</div>
    <div style="background-color: #F6F8FA;height: 25px;width:160px;color:#FA6230;margin: 10px;">Assign To Self</div>
  </div>`;
}).join('');





document.getElementById("test6").innerHTML = users.map(user => { 
  return `<div style="background-color: #FFFFFF;width:19.3%;height: 150px; text-align: center; border-radius: 8px;border:1px solid #DEDEDE;margin:3px;">
    <div style="display: flex;flex-direction: row;margin-top:10px;margin-left:30px;"><p>${user.name}</p><p style="color: #FA6230;font-size: 8px;">${user.verified}</p></div>
    <div style="display: flex;flex-direction: column;background-color: #F6F8FA; margin: 10px;border-radius: 4px;width: 159px;height:60px;">

        <div style="display: flex;flex-direction:row;"> <img src="./images/call.png"  width="15px" height="15px"/> <p>${user.contact}</p> </div>
        <div style="display: flex;flex-direction:row;"> <img src="./images/mail.png"  width="15px" height="15px"/> <p>${user.email}</p> </div>
            


    </div>
    <div style="background-color: #FA6230;height: 20px;width:159px;color:#FFFFFF;margin: 10px;border-radius: 4px;">Enter Chat</div>
  </div>`;
}).join('');

     


























    /**
     * 
     * 
  

document.getElementById("test5").innerHTML = users.map(user => { 
  return `<div style="background-color: #FFFFFF;width:19.3%;height: 150px; text-align: center; border-radius: 8px;border:1px solid #DEDEDE;margin:3px;">
  <img src=${user.image1}/> 
  <div style="display: flex;flex-direction: row;justify-content: center;margin-top:10px;"><p>${user.apple}<p style="color: #FA6230;font-size: 8px;">${user.verified}</p></p></div>
    <div style="display: flex;flex-direction: column;background-color: #F6F8FA; margin: 10px;border-radius: 4px;width: 159px;height:60px;">
        <div style="display: flex;flex-direction: row;justify-content: center;"> <i class="fa-solid fa-magnifying-glass"></i>
            <p >${user.link}</p></div>
            <div style="display: flex;flex-direction: row;justify-content: center;">
                <i class="fa-solid fa-magnifying-glass"></i>
               <p>${user.email}</p></div>

    </div>
    <div style="background-color: #FA6230;height: 20px;width:159px;color:#FFFFFF;margin: 10px;border-radius: 4px;">edit company</div>
    <div style="background-color: #FDE6E6;height: 20px;width:159px;color:#EA0000;margin: 10px;border-radius: 4px;">deactivate</div>

  </div>`;
}).join('');

     */
  
  
  
  
  