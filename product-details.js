


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
      window.open('Initiatenewdebitorder.html', '_self');
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


const users=[{
    id:1,
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
    user:"Admin1",
      user1:"User 1",
      btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
      deactivate:"Deactivate",
      no:1, 
      image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
      apple:"Apple Inc.",
      link:"Apple.com",
        user:"Admin1",
      timestamp:"Sep, 20 2023. 8:29pm",
      type:"Debit",
      Bat:"$10,000.00",
    name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    users:"Admin",
    staff:"staff",
    price:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
    
  },{
    id:2,
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
   
      user:"Admin1",
     name:"Ayo", image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
   
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    users:"Admin",
    staff:"staff",
    price:"$10,000.00",
    apple:"Apple Inc.",
    link:"Apple.com",
      user:"Admin1",
    user1:"User 2",
    btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
    deactivate:"Deactivate",
    no:2,
    timestamp:"Sep, 20 2023. 8:29pm",
    type:"Credit",
    Bat:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
      
  },{
    id:3,
   
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
   image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
   
       user:"Admin1",
     name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    users:"Admin",
    price:"$10,000.00",
    apple:"Apple Inc.",
    link:"Apple.com",
      user:"Admin1",
    user1:"User 3",
    btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
    deactivate:"Deactivate",
    no:3,
    timestamp:"Sep, 20 2023. 8:29pm",
    type:"Credit",
    Bat:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
   
      
  },{
    id:4,
   
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
   
    user:"Admin1",
    name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    users:"Admin",
    staff:"staff",
    price:"$10,000.00",
    apple:"Apple Inc.",
    link:"Apple.com",
      user:"Admin1",
    user1:"User 4",
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
   
    btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
    deactivate:"Deactivate",
    no:4,
    timestamp:"Sep, 20 2023. 8:29pm",
    type:"Debit",
    Bat:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
    
  },
  {
    id:5,
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
   
   
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
   
    user:"Admin1",
    users:"Admin",
    staff:"staff",
    name:"Ayo",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile" ,
    price:"$10,000.00"  ,
    apple:"Apple Inc.",
    link:"Apple.com",
      user:"Admin1",
    user1:"User 5",
    btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
    deactivate:"Deactivate",
    no:5,
    timestamp:"Sep, 20 2023. 8:29pm",
    type:"Debit",
    Bat:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
  },{
    id:6,
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
   
   
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
   
    user:"Admin1",
    name:"Ayo",
    users:"Admin",
    staff:"staff",
    apple:"Apple Inc.",
    link:"Apple.com",
      user:"Admin1",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    price:"$10,000.00",
    user1:"User 6",
    btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
    deactivate:"Deactivate",
    no:6,
    timestamp:"Sep, 20 2023. 8:29pm",
    type:"Debit",
    Bat:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  apple:"Apple Inc.",
  link:"Apple.com",
    user:"Admin1",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
  },{
    id:7,
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
   
   
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
   
    user:"Admin1",
    name:"Ayo",
    users:"Admin",
    staff:"staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    price:"$10,000.00",
    user1:"User 7",
    apple:"Apple Inc.",
    link:"Apple.com",
      user:"Admin1",
    btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
    deactivate:"Deactivate",
    no:7,
    timestamp:"Sep, 20 2023. 8:29pm",
    type:"Credit",
    Bat:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  apple:"Apple Inc.",
  link:"Apple.com",
    user:"Admin1",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
  },{
    id:8,
    image1:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
   
   
    image:"./images/33fe647a46f9bf668322f8c1d94ed937.png",
   
    user:"Admin1",
    name:"Ayo",
    users:"Admin",
    staff:"staff",
    verified:"Unverified",
    contact:"+2348078868319",
    email:"User123@gmail.com",
    prof:"View Profile",
    price:"$10,000.00",
    user1:"User 8",
    btcaddress:"2nadyy3246essch567mr6yethdhfdsdfax3f",
    deactivate:"Deactivate",
    no:5,
    apple:"Apple Inc.",
    link:"Apple.com",
      user:"Admin1",
    timestamp:"Sep, 20 2023. 8:29pm",
    type:"Credit",
    Bat:"$10,000.00",
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
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
            
            <img  src=${product.image} class="productdetailimg" alt="profile"/>
            <div  style="display: flex;flex-direction:column;margin-left:10px;line-height:0px;">
            <h1>${product.user1}</h1>
            <div style="display: flex;flex-direction:row; ">
            <div  class="productdetailhash">
            <div  style="display: flex;flex-direction:row;">
            <div style="display: flex;flex-direction:row;"> <img src="./images/call.png"  width="15px" height="15px" style=" margin-top: 22px;"/> <p class="test1pp">${product.contact}</p> </div>
            <div style="display: flex;flex-direction:row;"><img src="./images/mail.png"  width="15px" height="15px" style=" margin-top: 22px;margin-left:10px;"/><p class="test1pp">${product.email}</p></div></div>
           <div style="display: flex;flex-direction:row;margin-top:-5px"><img src="./images/Group.png"  width="15px" height="15px" style=" margin-top: 15px;"/> <p  class="test1pp1">${product.btcaddress}</p> <img src="./images/file_copy.png"  width="15px" height="15px" style=" margin-top: 15px; margin-left: 15px;"/> </div> 
            </div>
            <div class="deactive ">
            <p >Deactivate</p></div>
            </div>
                <!-- Add other detailed product information here -->
            </div>

        `;
       
    } else {
        productDetail.innerHTML = "<p>Product not found</p>";
       
    }
  }
  
  renderProductDetail();
  
  document.getElementById("table-body13").innerHTML = users.map(item => {

    return `
<tr style="margin-left: 50px;height: 50px;">
    <td>${item.no}</td>
    <td>${item.timestamp}</td>
    <td class="${item.type === 'Debit' ? 'Debit' : 'credit'}">${item.type}</td>
    <td>${item.Bat}</td>
</tr>`;
}).join('');

  
  

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
}



function submitForm2() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  //closeDialog();
  window.open(`Editdeals.html`, "_self");
}



function submitForm3() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  closeDialog4();
  window.open(`Addnewdeal.html`, "_self");
}


function submitForm4() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  //closeDialog();
  window.open(`Editcountry.html`, "_self");
}

function submitForm5() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  //closeDialog();
  window.open(`Addnewcountry.html`, "_self");
}

function submitForm6() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  //closeDialog();
  window.open(`Editcountry.html`, "_self");
}

function submitForm7() {
  // You can handle form submission here if needed
  // For demonstration purposes, this function just closes the dialog
  //closeDialog();
  window.open(`Addnewdeal.html`, "_self");
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
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  email:"olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
  
},{
  id:2,
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  email:"olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
},{
  id:3,
 
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  email:"olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
},{
  id:4,
  
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  email:"olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
  
},
{
  id:5,
  
  date:"dec. 20,2023. 11:34pm",
  bankdetails:"0014(0212243711)",
  accountname:"Olaolu Adedeji",
  contact:"+2348078868319",
  useremail:"olamigokephys@gmail.com",
  fulfiled:"True",
  fulfiledby:"olamigokephys@gmail.com",
  timefulfiled:"June 9th,2020. 9:46pm",
  amount:"₦100,000"
},{
  id:6,
  date:"dec. 20,2023. 11:34pm",
bankdetails:"0014(0212243711)",
accountname:"Olaolu Adedeji",
contact:"+2348078868319",
email:"olamigokephys@gmail.com",
fulfiled:"True",
fulfiledby:"olamigokephys@gmail.com",
timefulfiled:"June 9th,2020. 9:46pm",
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
    <td>June 18th,2020. 9:46pm</td>
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
  return `<div class="div0">
  <img src=${user.image}  style="border-radius: 90%;width: 80px;height: 80px;margin-top: 25px;"/>
  <p style="
  font-weight: 700;">${user.user}</p>
  <div class="test1hash"> 
  <div style="display: flex;flex-direction: row;margin-left: 15px;">
  <img src="./images/call.png"  width="15px" height="15px" />
  <p class="test1p">${user.contact}</p></div>
  <div style="display: flex;flex-direction: row;margin-left: 12px;margin-top: 5px;">
  <img src="./images/mail.png"  width="15px" height="15px" />
    <p class="test1p">${user.email}</p></div></div>
    <div style="width: 25px;background-color:red;">
    </div>
<div style="display: flex;flex-direction: row;justify-content: space-between;padding :10px;">
<div style="background-color:#FFEFEA;  width: 60px;border-radius: 8px;height:25px;color:#FA6230;padding :3px; font-size: 14px;" >${user.users}</div>
<div style="background-color:#FFEFEA;  width: 60px;border-radius: 8px;height:25px;color:#FA6230;padding :3px; font-size: 14px;" >${user.staff}</div>
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
  
  
  
  
  