
document.addEventListener('DOMContentLoaded', () => {


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
  
document.getElementById("test12").innerHTML = users.map(user => { 
  return `
    <div class="div0">
        <img src="${user.image}" style="border-radius: 90%; width: 80px; height: 80px; margin-top: 25px;" />
        <p style="font-weight: 700;">${user.user}</p>
        <div class="test2hash"> 
            <div style="display: flex; flex-direction: row; gap: 5px; margin-left: 8px;"> 
                <img src="images/call.png" class="test1img" />  
                <p class="test1p">${user.contact}</p>
            </div>
            <div style="display: flex; flex-direction: row; margin-top: 8px; gap: 5px; margin-left: 8px;">
                <img src="images/mail.png" class="test1img"/>  
                <p class="test1p">${user.email}</p>
            </div>
        </div>
        <div style="width: 25px; background-color: red;"></div>
        <div style="display: flex; flex-direction: row; padding: 0px; gap: 10px; justify-content: center;margin-top:15px;">
            <div style="background-color: #FFEFEA; width: 60px; border-radius: 8px; height: 20px; color: #FA6230; padding-top: 4px; font-size: 11px;">${user.users}</div>
            <div style="background-color: #FFEFEA; width: 60px; border-radius: 8px; height: 20px; color: #FA6230; padding-top: 4px; font-size: 11px;">${user.staff}</div>
        </div>
    </div>

`;
}).join('');



});