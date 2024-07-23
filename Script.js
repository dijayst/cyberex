
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
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  closeDialog();
  //window.open(`Addnewcountry.html`, "_self");
}

function submitForm2() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  //closeDialog();
  window.open(`./Editdeals.html`, "_self");
}



function submitForm3() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  closeDialog4();
  window.open(`./Addnewdeal.html`, "_self");
}


function submitForm4() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  //closeDialog();
 
}

function submitForm5() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  //closeDialog();
  window.open(`./Addnewcountry.html`, "_self");
}


function submitForm6() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  //closeDialog();
  window.open(`./Editcountry.html`, "_self");
}

function submitForm7() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  //closeDialog();
  window.open(`./Addnewdeal.html`, "_self");
}


function submitForm8() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  //closeDialog();
  window.open(`./Assigntoothers.html`, "_self");
}


function submitForm9() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  //closeDialog();
  window.open(`./Chat.html`, "_self");
}


function submitForm10() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
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
    <div class="test1prof" onclick="redirectToProductDetail(${user.id})">${user.prof}</div>

    `;

  productsContainer.appendChild(productDiv);
});
}

renderProductItems();


/*

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
<div style="display: flex;flex-direction: row;padding :0px;gap:10px;justify-content: center;">
<div style="background-color:#FFEFEA;  width: 60px;border-radius: 8px;height:20px;color:#FA6230;padding-top :4px; font-size: 11px;" >${user.users}</div>
<div style="background-color:#FFEFEA;  width: 60px;border-radius: 8px;height:20px;color:#FA6230;padding-top :4px; font-size: 11px;" >${user.staff}</div>
</div>
</div>`;
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


*/



document.addEventListener("DOMContentLoaded", function() {
 
  

  const test1Element = document.getElementById("test1");
  const test3Element = document.getElementById("test3");
  const test4Element = document.getElementById("test4");
  const test5Element = document.getElementById("test5");
  const test6Element = document.getElementById("test6");
  const test7Element = document.getElementById("test7");
  const test8Element = document.getElementById("test8");
  const test9Element = document.getElementById("test9");
  const test10Element = document.getElementById("test10");
  const tablebodyElement = document.getElementById("table-body");
  const tablebody2Element = document.getElementById("table-body2");
  const tablebody3Element = document.getElementById("table-body3");
  const tablebody4Element = document.getElementById("table-body4");
  const tablebody5Element = document.getElementById("table-body5");
  const tablebody6Element = document.getElementById("table-body6");
 
  if(test1Element){
    test1Element.innerHTML = users.map(user => { 
      return `<div class="test1div">
        <div style="display: flex;flex-direction: row;justify-content: center;gap:5px;"><p style=" font-size: 16px;color:#000000;font-weight: 700">${user.name}</p>
        <div style="background-color:#FFEFEA;height:15px;width:50px ;border-radius: 25.6px;padding: 3px;margin-top: 2px;"><p style="font-size: 8px;font-weight: 700;color: #FA6230;">${user.verified}</p></div>
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
  }
  if (test3Element) {
    test3Element.innerHTML = users.map(user => { 
      return `<div class="div0">
      <img src=${user.image}  style="border-radius: 90%;width: 90px;height: 90px;margin-top: 18px;"/>
      <p style="font-weight: 700;margin-top: 8px; font-size:15px;">${user.user}</p>
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
      <div style="display: flex;flex-direction: row;padding:0px;gap:10px;justify-content: center;margin-top: 14px;">
        <div style="background-color:#FFEFEA;  width: 60px;border-radius: 8px;height:22px;color:#FA6230;padding-top:4px; font-size: 12px; font-weight: 500;" >${user.users}</div>
        <div style="background-color:#FFEFEA;  width: 60px;border-radius: 8px;height:22px;color:#FA6230;padding-top:4px; font-size: 12px; font-weight: 500;" >${user.staff}</div>
      </div>
      </div>`;
    }).join('');
  }
  
  if (test4Element) {
    test4Element.innerHTML = users.map(user => { 
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
  }

  if(test5Element){
    test5Element.innerHTML = users.map(user => { 
  return `<div class="div0">
  <img src=${user.image1}  style="border-radius: 90%;width: 90px;height: 90px;margin-top: 25px;"/> 
 
    
  <div style="display: flex;flex-direction: column;margin: 10px;border-radius: 4px;width: 159px;height:60px;">
        <div style="display: flex;flex-direction: row;justify-content: center;">
            <p style="color:#000000;font-weight:600;font-size: 16px;">${user.apple}</p></div>
            <div style="display: flex;flex-direction: row;justify-content: center;">

               <p style="color:#414141; font-size: 13px;">${user.link}</p></div>

    </div>
    <div class="test5div2" onclick="submitForm5()">Edit Company</div>
    <div class="test5div">Deactivate</div>

  </div>`;
}).join('');
  }


  if(test6Element){
    test6Element.innerHTML = users.map(user => { 
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

  }
  
  if(test7Element){
    test7Element.innerHTML = users.map(user => { 
     return `<div class="divd">
        <img src=${user.image1}  style="border-radius: 90%;width: 58px;height: 58px;"/> 
       
          
        <div style="display: flex;flex-direction: column;margin-top: 10px;border-radius: 4px;width: 159px;height:60px;">
              <div style="display: flex;flex-direction: row;justify-content: center;">
                  <p style="color:#000000;font-weight:700;font-size: 16px;">${user.country}</p></div>
                  <div style="display: flex;flex-direction: row;justify-content: center;">
      
                     <p style="color:#414141; font-size: 10px;white-space: nowrap;font-weight:500;">exchange per unit (CAD/naira)</p></div>
      
          </div>
          <div class="test5div3" onclick="submitForm6()">Edit Country</div>
          
      
        </div>`;
    }).join('');
    
  }
  if(test8Element){
    test8Element.innerHTML = users.map(user => { 
      return `<div class="divd">
     <P style="font-weight: 700;
  font-size: 18px;">${user.digit}</P>
     <div class="test1hash2">
       <p class="test1p">${user.parentcurrency}</p>
       <p class="test1p">${user.naira}</p>
     
    </div>
        <div class="test5div2" onclick="submitForm2()" >Edit Deals</div>
        
    
      </div>`;
    }).join('');
  }
  
  if (test9Element) {
    test9Element.innerHTML = users.map(user => { 
      return `<div class="div0">
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
      </div>`;
    }).join('');
  }

  
  if (test10Element) {
    test10Element.innerHTML = users.map(user => { 
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





  }
if(tablebodyElement){
  tablebodyElement.innerHTML =users.map(item => `
<tr style="margin-left: 50px;">
    <td>${item.id}</td>
    <td>${item.email}</td>
    <td>300</td>
    <td>${item.price}</td>
</tr>
`).join('');}



if(tablebody2Element){
  tablebody2Element.innerHTML =users.map(item => `
<tr style="margin-left: 50px;height: 50px;">
<td>${item.id}</td>
<td>${item.email}</td>
<td>${item.amount}</td>
<td>June 18th,2020. 9:46pm</td>
</tr>
`).join('');}


if(tablebody3Element){
  tablebody3Element.innerHTML =users.map(item => `
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
`).join('');}


if(tablebody4Element){
  tablebody4Element.innerHTML =users.map(item => `
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
`).join('');}



if(tablebody5Element){
  tablebody5Element.innerHTML =users.map(item => `
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
`).join('');}




if(tablebody6Element){
  tablebody6Element.innerHTML =users.map(item => `
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
`).join('');}





});





     










  /*
  
      document.getElementById("test7").innerHTML = users.map(user => { 
        return `<div class="divd">
        <img src=${user.image1}  style="border-radius: 90%;width: 58px;height: 58px;margin-top: 25px;"/> 
       
          
        <div style="display: flex;flex-direction: column;margin: 10px;border-radius: 4px;width: 159px;height:60px;">
              <div style="display: flex;flex-direction: row;justify-content: center;">
                  <p style="color:#000000;font-weight:600;font-size: 18px;">${user.country}</p></div>
                  <div style="display: flex;flex-direction: row;justify-content: center;">
      
                     <p style="color:#414141; font-size: 12px;white-space: nowrap;">exchange per unit (CAD/naira)</p></div>
      
          </div>
          <div class="test5div3" onclick="submitForm6()">Edit Country</div>
          
      
        </div>`;
      }).join('');
      
    document.getElementById("test8").innerHTML = users.map(user => { 
      return `<div class="divd">
     <P style="margin-top:40px;font-weight: 700;">${user.digit}</P>
     <div class="test1hash2">
       <p class="test1p">${user.parentcurrency}</p>
       <p class="test1p">${user.naira}</p>
     
    </div>
        <div class="test5div2" onclick="submitForm2()" >Edit Deals</div>
        
    
      </div>`;
    }).join('');







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
    email:"User123@gmail.com",  
  },{
    id:2,
    "image":require("./images/Frame 1000003225.png"),
    user:"Admin1",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",  
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

     






<section id="contract" class="tabcontent">
    <div class="flexcontainer1" >
        <div class="staffcontainer"><p>Giftcard Transaction</p>
            <p class="dashtext">Wed 7th March, 2024</p>
           </div>
           
            <input class="search10" placeholder="Search" />
         
    </div>
    
    <div style="background-color: #FA6230;color: #FFFFFF;margin-top: 25px;height: 40px;text-align: center;width: 200px;padding-top: 10px;border-radius: 4px;" onclick="submitForm10()">Go Back</div>
   <div style="display: flex;flex-direction: row;margin-top: 50px;">
    <img src="images/Frame 10.png" width="54px" height="54px" style="border-radius: 4px;"/>
    <div style="display: flex;flex-direction: column;gap: 10px;margin-left: 15px;margin-top: 8px;">
    <p>Ayo</p>
<div style="display: flex;flex-direction: row;gap: 8px;"><div style="width: 15px;height: 15px;background-color: #68D391;border-radius: 10px;"></div><p >Online</p>
</div>
</div>
   </div>
    
   <div style="display: flex;flex-direction: column;gap: 8px;margin-top: 15px;margin-left: 460px;">
    <div style="display: flex;flex-direction: row; gap: 10px;">
        <p class="chatp">Hello leonard, what giftcard would you like to trade today?</p> 
        <img src="images/Frame 117.png" height="50px" width="50px" style="margin-top: -5px;"/>
    </div>
   
        <div class="chatopt"><p >Apple Card</p></div>
        <div class="chatopt"><p>Amazon Card</p></div>
        <div class="chatopt"><p>Itunes Card</p></div>
        <div class="chatopt"><p>Google Pay card</p></div>
        
  
       
   </div>
   
<div style="display: flex;flex-direction: row;gap: 10px;margin-top: 10px;border-radius: 6px;">
    <img src="images/Frame 10.png" height="50px" width="50px" style="border-radius: 4px;"/>  <p style="border-radius: 6px;background-color:#FA6230 ; color:#FFFFFF;height: 40px;width: 200px;padding-top: 10px;padding-left: 23px;margin-top: 5px;">Google Pay card</p>
</div>
<div style="display: flex;flex-direction: row;gap: 10px;margin-top: 10px;margin-left: 460px;">
    <p class="chatp">Hello leonard, what giftcard would you like to trade today?</p><img src="images/Frame 117.png" height="50px" width="50px" style="margin-top: -5px;"/>
</div>
<div style="display: flex;flex-direction: row;margin-top: 10px;gap: 10px;">
    <img src="images/Frame 10.png" width="50px" height="50px" style="border-radius: 4px;"/>
    <img src="images/Message Item.png" width="250px" height="154px" style="border-radius: 4px;"/>
   
</div>
  </section>
  


  
  <section id="contract" class="tabcontent">
    
<div class="menu">
    <div   onclick="openDrawer()">
        <i class="fa-solid fa-bars fa-2xl"></i>
    </div>
    </div>
    <div class="flexcontainer1" >
        <div class="staffcontainer"><p>Assign Transaction</p>
            <p class="dashtext">Wed 7th March, 2024</p>
           </div>
           
            <input class="search10" placeholder="Search" />
         
    </div>
    
    <div id="test7" style="display: flex;flex-wrap: wrap;padding: 10px;border-radius: 8px;height: 210px;margin-top:15px;width:100%;">
           
    </div>


  </section>








  
 

  */