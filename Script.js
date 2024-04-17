function showsidebar(){
  const hyi=document.querySelector('.hyi')
  hyi.style.display='flex'
}
function hidesidebar(){
  const hyi=document.querySelector('.hyi')
  hyi.style.display='none'
}
function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
  document.querySelector(".content").style.marginLeft = "250px";
}



function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
  document.querySelector(".content").style.marginLeft= "0";
}

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




const users=[{
    id:1,
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"apple inc.",
    link:"apple.com",
      user:"Admin1",
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
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"apple inc.",
    link:"apple.com",
    user:"Admin1",
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
    id:3,
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"Google",
    link:"Apple.com",
      user:"Admin1",
     name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile",
    users:"admin",
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
    id:4,
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"apple inc.",
    link:"apple.com",
      user:"Admin1",
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
    
  },
  {
    id:5,image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"apple inc.",
    link:"apple.com",
    user:"Admin1",
    users:"admin",
    staff:"staff",
    name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile" ,
    price:"$10,000.00"  ,
    
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
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"apple inc.",
    link:"apple.com",
    user:"Admin1",
    name:"Ayo",
    users:"admin",
    staff:"staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile",
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
  },
  {
    id:7,
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"apple inc.",
    link:"apple.com",
    user:"Admin1",
    name:"Ayo",
    users:"admin",
    staff:"staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile",
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
    id:8,
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"apple inc.",
    link:"apple.com",
    user:"Admin1",
    name:"Ayo",
    users:"admin",
    staff:"staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile",
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
    id:9,
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"apple inc.",
    link:"apple.com",
    user:"Admin1",
    name:"Ayo",
    users:"admin",
    staff:"staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile",
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
    id:10,
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"apple inc.",
    link:"apple.com",
    user:"Admin1",
    name:"Ayo",
    users:"admin",
    staff:"staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile",
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
    id:11,
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"apple inc.",
    link:"apple.com",
    user:"Admin1",
    name:"Ayo",
    users:"admin",
    staff:"staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",
    prof:"View Profile",
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
  },
];

  



  
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
  return `<div class="test1div">
    <div style="display: flex;flex-direction: row;justify-content: center;margin-top:10px;color:#000000;font-weight: 700;"><p>${user.name}<p style="color: #FA6230;font-size: 8px;background-color:#FFEFEA;height:9px;">${user.verified}</p></p></div>
    <div class="test1hash">
        <div style="display: flex;flex-direction: row;justify-content: center;"> 
        <img src="./images/call.png"  class="test1img" />  
            <p class="test1p">${user.contact}</p></div>
            <div style="display: flex;flex-direction: row;justify-content: center;">
            <img src="./images/mail.png"  class="test1img"/>  
               <p class="test1p">${user.email}</p></div>

    </div>
    <div class="test1prof">${user.prof}</div>

  </div>`;
}).join('');

function redirectToProductDetail(productId) {
 // window.location.href = `product-detail.html?id=${productId}`;

window.open(`product-detail.html?id=${productId}`, "_self");
}

function renderProductItems() {
// Render users on the page
const productsContainer = document.getElementById("test2");
users.forEach(user => {
  const productDiv = document.createElement("div");
  productDiv.style.backgroundColor = "#FFFFFF";
  productDiv.style.height = "150px";
  productDiv.style.textAlign = "center";
  productDiv.style.borderRadius = "8px";
  productDiv.style.border = "1px solid #DEDEDE";
  productDiv.style.margin = "3px";

  productDiv.innerHTML = `
    <div style="display: flex;flex-direction: row;justify-content: center;margin-top:10px;color:#000000;font-weight: 700;">
      <p >${user.name}</p>
      <p style="color: #FA6230;font-size: 8px;background-color:#FFEFEA;height:9px;">${user.verified}</p>
    </div>
    <div class="test2div">
      <div style="display: flex;flex-direction: row;justify-content: center;padding-top:18px;">
      <img src="./images/call.png"  width="15px" height="15px" />
        <p class="test1p">${user.contact}</p>
      </div>
      <div style="display: flex;flex-direction: row;justify-content: center;">
      <img src="./images/mail.png"  width="15px" height="15px" />
        <p class="test1p">${user.email}</p>
      </div>
    </div>
    <div class="test2prof" onclick="redirectToProductDetail(${user.id})">${user.prof}</div>
  `;

  productsContainer.appendChild(productDiv);
});
}

renderProductItems();



document.getElementById("test5").innerHTML = users.map(user => { 
  return `<div class="div0">
  <img src=${user.image1}  style="border-radius: 90%;width: 58px;height: 58px;margin-top: 25px;"/> 
 
    
  <div style="display: flex;flex-direction: column;margin: 10px;border-radius: 4px;width: 159px;height:60px;">
        <div style="display: flex;flex-direction: row;justify-content: center;"> <i class="fa-solid fa-magnifying-glass"></i>
            <p>${user.apple}</p></div>
            <div style="display: flex;flex-direction: row;justify-content: center;">
                <i class="fa-solid fa-magnifying-glass"></i>
               <p>${user.link}</p></div>

    </div>
    <div class="test5div2">edit company</div>
    <div class="test5div">deactivate</div>

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
        <tr class="table-body3">
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
    return `<div class="div0">
    <img src=${user.image}  style="border-radius: 90%;width: 80px;height: 80px;margin-top: 25px;"/>
    <p>${user.user}</p>
    <div class="test3div"> 
    <div style="display: flex;flex-direction: row;justify-content: center;">
    <img src="./images/call.png"  width="15px" height="15px" />
    <p class="test1p">${user.contact}</p></div>
    <div style="display: flex;flex-direction: row;justify-content: center;">
    <img src="./images/mail.png"  width="15px" height="15px" />
      <p class="test1p">${user.email}</p></div></div>
      <div style="width: 25px;background-color:red;">
      </div>
  
  </div>`;
  }).join('');
  

  
document.getElementById("test4").innerHTML = users.map(user => { 
  return `<div class="div0">
    <div style="display: flex;flex-direction: row;margin-top:10px;margin-left:30px;"><p>${user.name}</p><p style="color: #FA6230;font-size: 8px;">${user.verified}</p></div>
    <div class="test4div">

        <div style="display: flex;flex-direction:row;"> <img src="./images/call.png"   class="test1img"/> <p class="test1p">${user.contact}</p> </div>
        <div style="display: flex;flex-direction:row;"> <img src="./images/mail.png"   class="test1img"/> <p class="test1p">${user.email}</p> </div>
            


    </div>
    <div class="test4div2">Assign To Self</div>
    <div class="test4div3">Assign To Self</div>
  </div>`;
}).join('');





document.getElementById("test6").innerHTML = users.map(user => { 
  return `<div class="div0">
    <div style="display: flex;flex-direction: row;margin-top:10px;margin-left:30px;"><p>${user.name}</p><p style="color: #FA6230;font-size: 8px;">${user.verified}</p></div>
    <div class="test4div">
        <div style="display: flex;flex-direction:row;"> <img src="./images/call.png"  width="15px" height="15px"/> <p class="test1p">${user.contact}</p> </div>
        <div style="display: flex;flex-direction:row;"> <img src="./images/mail.png"  width="15px" height="15px"/> <p class="test1p">${user.email}</p> </div>
            
    </div>
    <div class="test4div2">Enter Chat</div>
  </div>`;
}).join('');

     
  /*
  
  <script>
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




  const staffmanagement=[{
    id:1,
    "image":require("./images/33fe647a46f9bf668322f8c1d94ed937.png"),
    user:"Admin1",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",  
  },{
    id:2,
    "image":require("./images/Frame 1000003225.png"),
    user:"Admin1",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"user123@gmail.com",  
  }]



    
document.getElementById("test3").innerHTML = staffmanagement.map(user => { 
  return `<div style="height: 210px;width: 50%;background-color: #FFFFFF;border-radius: 4px;text-align: center;">
  <img src=${user.image}  style="border-radius: 90%;width: 80px;height: 80px;margin-top: 25px;"/>
  <p>${user.user}</p>
  <div style="background-color: #F6F8FA;margin-top: 25px;margin: 15px;width: 244px;display: flex;flex-direction: column;justify-content: space-between;"> <i class="fa-solid fa-magnifying-glass"></i>
 <p>${user.contact}</p>
 <i class="fa-solid fa-magnifying-glass"></i>
    <p>${user.email}</p></div>

</div>`;
}).join('');

    </script> */


























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