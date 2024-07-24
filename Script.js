
function validateForm(event) {
  event.preventDefault(); // Prevent form submission if validation fails

  // Fetching input values
  const bankname = document.getElementById('bankname').value.trim();
  const amount = document.getElementById('amount').value.trim();
  const bankref = document.getElementById('bankref').value.trim();
  const userref = document.getElementById('userref').value.trim();
  const adminopt = document.getElementById('adminopt').value.trim();

  // Resetting previous errors
  document.getElementById('banknameerror').textContent = '';
  document.getElementById('amounterror').textContent = '';
  document.getElementById('bankreferror').textContent = '';
  document.getElementById('userreferror').textContent = '';
  document.getElementById('adminopterror').textContent = '';

  // Validation
  let isValid = true;
  if (bankname === '') {
      document.getElementById('banknameerror').textContent = 'Bank name is required';
      isValid = false;
  }
  if (amount === '') {
      document.getElementById('amounterror').textContent = 'Amount is required';
      isValid = false;
  }
  if (bankref === '') {
      document.getElementById('bankreferror').textContent = 'Bank reference is required';
      isValid = false;
  }
  if (userref === '') {
      document.getElementById('userreferror').textContent = 'User reference is required';
      isValid = false;
  }
  if (adminopt === '') {
      document.getElementById('adminopterror').textContent = 'Admin OTP is required';
      isValid = false;
  }

  // If all fields are valid, navigate to the new page
  if (isValid) {
      // Here you can redirect to a new page
      // window.location.href = 'new_page.html'; // Change 'new_page.html' to your desired page
      window.open('./Initiatenewdebitorder.html', '_self');
  }
}



function openDrawer() {
  document.getElementById("myTab").style.width = "350px";
  document.getElementById("dashboard").style.marginLeft = "0px";
}
function closeDrawer() {
  document.getElementById("myTab").style.width = "0";
  document.getElementById("dashboard").style.marginLeft= "0";
}
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



      
function openDialog2() {
  document.getElementById('myModal2').style.display = 'block';
}

function closeDialog2() {
  document.getElementById('myModal2').style.display = 'none';
}


function openDialog3() {
  document.getElementById('myModal3').style.display = 'block';
}

function closeDialog3() {
  document.getElementById('myModal3').style.display = 'none';
}


function openDialog4() {
  document.getElementById('myModal4').style.display = 'block';
}

function closeDialog4() {
  document.getElementById('myModal4').style.display = 'none';
}


function openDialog5() {
  document.getElementById('myModal5').style.display = 'block';
}

function closeDialog5() {
  document.getElementById('myModal5').style.display = 'none';
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
  closeDialog();
  //window.open(`Addnewcountry.html`, "_self");
}

function submitForm2() {
  //closeDialog();
  window.open(`./Editdeals.html`, "_self");
}



function submitForm3() {
  closeDialog4();
  window.open(`./Addnewdeal.html`, "_self");
}


function submitForm4() {
  //closeDialog();
 
}

function submitForm5() {
  //closeDialog();
  window.open(`./Addnewcountry.html`, "_self");
}


function submitForm6() {
  //closeDialog();
  window.open(`./Editcountry.html`, "_self");
}

function submitForm7() {
  //closeDialog();
  window.open(`./Addnewdeal.html`, "_self");
}


function submitForm8() {
  //closeDialog();
  window.open(`./Assigntoothers.html`, "_self");
}


function submitForm9() {
  //closeDialog();
  window.open(`./Chat.html`, "_self");
}


function submitForm10() {
  //closeDialog();
  window.open(`./Transaction.html`, "_self");
}


function submitForm11() {
  const inputField=document.getElementById('myInput');

inputField.addEventListener('click', function() {

  window.open(`./search.html`, "_self");
})
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
    country:"USA",
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"Apple Inc.",
    link:"Apple.com",
      user:"Admin1",
    name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    users:"Admin",
    staff:"Staff",
    price:"$10,000.00",
    digit:"100",
    parentcurrency:"parent currency: $",
    naira:"naira value: 380.00",
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
    
  },{
    id:2,
    country:"CDA",
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"Apple Inc.",
    link:"Apple.com",
    user:"Admin2",
     name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    users:"Admin",
    staff:"Staff",
    price:"$10,000.00",
    digit:"100",
    parentcurrency:"parent currency: $",
    naira:"naira value: 380.00",
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
      
  },{
    id:3,
    country:"USA",
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"Google",
    link:"Apple.com",
      user:"Admin3",
     name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    users:"Admin",
    staff:"Staff",
    price:"$10,000.00",
    
    digit:"100",
    parentcurrency:"parent currency: $",
    naira:"naira value: 380.00",
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
   
      
  },{
    id:4,
    country:"USA",
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"Apple Inc.",
    link:"Apple.com",
      user:"Admin4",
    name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    users:"Admin",
    staff:"Staff",
    price:"$10,000.00",
    
    digit:"100",
    parentcurrency:"parent currency: $",
    naira:"naira value: 380.00",
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
    
  },
  {
    id:5,image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"Apple Inc.",
    country:"CDA",
    link:"Apple.com",
    user:"Admin5",
    users:"Admin",
    staff:"Staff",
    name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile" ,
    price:"$10,000.00"  ,
    
    digit:"100",
    parentcurrency:"parent currency: $",
    naira:"naira value: 380.00",
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
  },{
    id:6,
    country:"USA",
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"Apple Inc.",
    link:"Apple.com",
    user:"Admin6",
    name:"Ayo",
    users:"Admin",
    staff:"Staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    price:"$10,000.00",
    
    digit:"100",
    parentcurrency:"parent currency: $",
    naira:"naira value: 380.00",
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
  },
  {
    id:7,
    country:"USA",
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"Apple Inc.",
    link:"Apple.com",
    user:"Admin7",
    name:"Ayo",
    users:"Admin",
    staff:"Staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    price:"$10,000.00",
    
    digit:"100",
    parentcurrency:"parent currency: $",
    naira:"naira value: 380.00",
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
  },{
    id:8,
    country:"CDA",
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"Apple Inc.",
    link:"Apple.com",
    user:"Admin8",
    name:"Ayo",
    users:"Admin",
    staff:"Staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    price:"$10,000.00",
    
    digit:"100",
    parentcurrency:"parent currency: $",
    naira:"naira value: 380.00",
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
  },{
    id:9,
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"Apple Inc.",
    link:"Apple.com",
    user:"Admin9",
    name:"Ayo",
    users:"Admin",
    staff:"Staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    price:"$10,000.00",
    country:"CDA",
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
  },{
    id:10,
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"Apple Inc.",
    link:"Apple.com",
    user:"Admin10",
    name:"Ayo",
    users:"Admin",
    staff:"Staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    price:"$10,000.00",
    country:"USA",
    digit:"100",
    parentcurrency:"parent currency: $",
    naira:"naira value: 380.00",
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
  },{
    id:11,
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    apple:"Apple Inc.",
    link:"Apple.com",
    user:"Admin11",
    name:"Ayo",
    users:"Admin",
    staff:"Staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    price:"$10,000.00",
    country:"USA",
    digit:"100",
    parentcurrency:"parent currency: $",
    naira:"naira value: 380.00",
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
  },
];

    


const users3=[{
  id:1,
    date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  email:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
  
},{
  id:2,
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  email:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
},{
  id:3,
 
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  email:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
},{
  id:4,
  
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  email:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
  
},
{
  id:5,
  
  date:"Dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"Olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"Olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
},{
  id:6,
  date:"Dec. 20,2023. 11:34pm",
bankdetails:"0014(0212243711)",
accountname:"Olaolu Adedeji",
contact:"+2348078868319",
email:"Olamigokephys@gmail.com",
fulfiled:"True",
fulfiledby:"Olamigokephys@gmail.com",
timefulfiled:"June 9th,2020. 9:46pm",
amount:"₦100,000"
},];


document.getElementById("table-body").innerHTML = users.map(item => {

  return `
  
<tr style="margin-left: 50px;">
    <td>${item.id}</td>
    <td>${item.email}</td>
    <td>300</td>
    <td>${item.price}</td>
</tr>
  `;
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
  productDiv.style.height = "185px";
  productDiv.style.width = "195px";
  productDiv.style.textAlign = "center";
  productDiv.style.borderRadius = "8px";
  productDiv.style.border = "1px solid #DEDEDE";
  productDiv.style.margin = "5px";
  productDiv.style.padding="20px 20px 20px 18px"

  productDiv.innerHTML = `
    
    <div style="display: flex;flex-direction: row;justify-content: center;color:#000000;font-weight: 700;gap:5px;"><p>${user.name}</p>
    <div style="color: #FA6230;font-size: 8px;background-color:#FFEFEA;height:15px;width:50px ;border-radius: 8px;padding: 3px;margin-top: 2px;">
    <p>${user.verified}</p></div>
    </div>
    <div class="test1hash">
    <div class="userdiv1"> 
    <img src="./images/call.png"  class="test1img" />  
        <p class="test1p">${user.contact}</p></div>
        <div class="userdiv2">
        <img src="./images/mail.png"  class="test1img"/>  
           <p class="test1p">${user.email}</p></div>

</div>
    <div class="test1prof2" onclick="redirectToProductDetail(${user.id})">${user.prof}</div>

    `;

  productsContainer.appendChild(productDiv);
});
}

renderProductItems();






document.getElementById("test1").innerHTML = users.map(user => { 
  return `<div class="test1div">
    <div style="display: flex;flex-direction: row;justify-content: center;margin-top:10px;color:#000000;font-weight: 700;gap:5px;"><p>${user.name}</p>
    <div style="color: #FA6230;font-size: 8px;background-color:#FFEFEA;height:15px;width:50px ;border-radius: 8px;padding: 3px;margin-top: 2px;"><p>${user.verified}</p></div>
    </div>
    <div class="test1hash">
        <div class="userdiv1"> 
        <img src="./images/call.png"  class="test1img" />  
            <p class="test1p">${user.contact}</p></div>
            <div class="userdiv2">
            <img src="./images/mail.png"  class="test1img"/>  
               <p class="test1p">${user.email}</p></div>

    </div>
    <div class="test1prof">${user.prof}</div>

  </div>`;
}).join('');



document.getElementById("table-body2").innerHTML = users.map(item => {

  return `
  
<tr style="margin-left: 50px;height: 50px;">
<td>${item.id}</td>
<td>${item.email}</td>
<td>${item.amount}</td>
<td>June 18th,2020. 9:46pm</td>
</tr>
  `;
}).join('');




document.getElementById("table-body3").innerHTML = users.map(item => {

  return `
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
  `;
}).join('');



document.getElementById("test4").innerHTML = users.map(user => { 
  return `<div class="div4">
    <div style="display: flex;flex-direction: row;margin-top:10px;margin-left:30px;gap:10px;">
    <p style="font-weight: 700;color: #000000;">${user.name}</p>
    <div style="color: #FA6230;font-size: 8px;background-color:#FFEFEA;height:15px;width:50px ;border-radius: 8px;padding: 3px;margin-top: 2px;">
    <p style="color: #FA6230;font-size: 8px;">${user.verified}</p></div>
    </div>
    <div class="test1hash3">

        <div style="display: flex;flex-direction:row;margin-left: 12px;gap:5px;"> <img src="./images/call.png"   class="test1img"/> <p class="test1p">${user.contact}</p> </div>
        <div style="display: flex;flex-direction:row;margin-left: 12px;margin-top: 5px;gap:5px;"> <img src="./images/mail.png"   class="test1img"/> <p class="test1p">${user.email}</p> </div>  
    </div>
    <div class="test2prof">Assign To Self</div>

    <div class="testprof" onclick="submitForm8()">Assign To Others</div>

    </div>`;
}).join('');






document.getElementById("test6").innerHTML = users.map(user => { 
  return `<div class="div1">
  <div style="display: flex;flex-direction: row;margin-top:10px;margin-left:30px;gap:10px;">
  <p style="font-weight: 700;color: #000000;">${user.name}</p>
  <div style="color: #FA6230;font-size: 8px;background-color:#FFEFEA;height:15px;width:50px ;border-radius: 8px;padding: 3px;margin-top: 2px;">
  <p style="color: #FA6230;font-size: 8px;">${user.verified}</p></div>
  </div>

   
    <div class="test5hash">
        <div style="display: flex;flex-direction:row;margin-left: 12px;gap:5px;"> <img src="./images/call.png"  width="15px" height="15px"/> <p class="test1p">${user.contact}</p> </div>
        <div style="display: flex;flex-direction:row;margin-left: 12px;margin-top: 5px;gap:5px;"> <img src="./images/mail.png"  width="15px" height="15px"/> <p class="test1p">${user.email}</p> </div>
            
    </div>
    <div class="test2prof" onclick="submitForm9()">Enter Chat</div>
  </div>`;
}).join('');




document.getElementById("table-body6").innerHTML = users.map(item => {

  return `
  
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
  `;
}).join('');




document.getElementById("table-body5").innerHTML = users.map(item => {

  return `
  
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
  `;
}).join('');





document.getElementById("table-body4").innerHTML = users.map(item => {

  return `
  
<tr style="margin-left: 50px;height: 50px;">
<td>${item.id}</td>
<td>Another One(12)</td>
<td>1</td>
<td>${item.amount}</td>
<td>False</td>
<td>All Users</td>
<td>June 9th,2020. 9:46pm</td>
<td>June 9th,2020. 9:46pm</td>
<td >
<div class="tablebtn"><p>View Beneficiaries</p></div>

</td>
</tr>
  `;
}).join('');




document.getElementById("test3").innerHTML = users.map(user => { 
  return `<div class="div0">
  <img src=${user.image}  style="border-radius: 90%;width: 80px;height: 80px;margin-top: 25px;"/>
  <p style="
  font-weight: 700;">${user.user}</p>
  <div class="test2hash"> 
  <div style="display: flex;flex-direction: row;gap:5px;margin-left:8px;"> 
    <img src="./images/call.png"  class="test1img" />  
        <p class="test1p">${user.contact}</p></div>
        <div style="display: flex;flex-direction: row;gap:5px;margin-left: 8px;">
        <img src="./images/mail.png"  class="test1img"/>  
           <p class="test1p">${user.email}</p></div>

    </div>
    <div style="width: 25px;background-color:red;">
    </div>
<div style="display: flex;flex-direction: row;padding :0px;gap:10px;justify-content: center;margin-top:15px;">
<div style="background-color:#FFEFEA;  width: 60px;border-radius: 8px;height:20px;color:#FA6230;padding-top :4px; font-size: 11px;" >${user.users}</div>
<div style="background-color:#FFEFEA;  width: 60px;border-radius: 8px;height:20px;color:#FA6230;padding-top :4px; font-size: 11px;" >${user.staff}</div>
</div>
</div>`;
}).join('');




































document.getElementById("test5").innerHTML = users.map(user => { 
  return `<div class="div0">
  <img src=${user.image1}  style="border-radius: 90%;width: 58px;height: 58px;margin-top: 25px;"/> 
 
    
  <div style="display: flex;flex-direction: column;margin: 10px;border-radius: 4px;width: 159px;height:60px;">
        <div style="display: flex;flex-direction: row;justify-content: center;">
            <p style="color:#000000;font-weight:600;font-size: 18px;">${user.apple}</p></div>
            <div style="display: flex;flex-direction: row;justify-content: center;">

               <p style="color:#414141; font-size: 15px;">${user.link}</p></div>

    </div>
    <div class="test5div2" onclick="submitForm5()">Edit Company</div>
    <div class="test5div">Deactivate</div>

  </div>`;
}).join('');






document.getElementById("test9").innerHTML = users.map(user => {

  return `
  <div class="div0">
      <img src=${user.image}  style="border-radius: 90%;width: 80px;height: 80px;margin-top: 25px;"/>
      <p style="font-weight: 700;">${user.user}</p>
      <div class="test2hash"> 
      <div style="display: flex;flex-direction: row;gap:5px;margin-left:8px;"> 
        <img src="./images/call.png"  class="test1img" />  
            <p class="test1p">${user.contact}</p></div>
            <div style="display: flex;flex-direction: row;gap:5px;margin-left: 8px;">
            <img src="./images/mail.png"  class="test1img"/>  
               <p class="test1p">${user.email}</p></div>
        </div>
        <div style="width: 25px;background-color:red;">
        </div>
      <div style="display: flex;flex-direction: row;padding:0px;gap:10px;justify-content: center;">
        <div style="background-color:#FFEFEA;  width: 60px;border-radius: 8px;height:20px;color:#FA6230;padding-top:4px; font-size: 11px;" >${user.users}</div>
        <div style="background-color:#FFEFEA;  width: 60px;border-radius: 8px;height:20px;color:#FA6230;padding-top:4px; font-size: 11px;" >${user.staff}</div>
      </div>
      </div>
  `;
}).join('');



document.getElementById("test10").innerHTML = users.map(user => {

  return `
  <div class="div0">
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
</div>
  `;
}).join('');





