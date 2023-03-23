const header=document.querySelector(".header");
const navbtns=document.querySelector(".navbtns");
const contactbtn=document.querySelector(".contactbtn");
const querydiv=document.querySelector(".querydiv");
const closeicon=document.querySelector(".closeicon");
const servicetextpart=document.querySelector(".servicetextpart");
const menurow=document.querySelector(".menurow");
const reservebtn=document.querySelector(".reservebtn");
const reservetable=document.querySelector(".reservetable");
const reserveclosebtn=document.querySelector('.reserveclosebtn');
const reservetxtpart=document.querySelector('.reservetxtpart');

const data= [

    {
        id:1,
        name:"Cakes",
        para:"A party without cake is really just a meeting.",
        img:"Cake.png"
    },

    {
        id:2,
        name:"Cookies",
        para:"The right bite. Making everyday more of a treat",
        img:"Cookie.png"
    },

    {
        id:3,
        name:"Breads",
        para:"Soft, Delicious. A nutritious approach to end hunger",
        img:"Bread.png"
    },

    {
        id:4,
        name:"Rolls",
        para:"Unroll happiness with every bite of our roll cakes.",
        img:"Roll.png"
    },

    {
        id:5,
        name:"Dessert",
        para:"We’ll get your inner child excited with every bite!",
        img:"Dessert.png"
    },

     {
        id:6,
        name:"Pies",
        para:"The Perfect Combination of Sweet and Savory.",
        img:"Pie.png"
    }

];

const showData=data.map((curr)=>{
    return`
            <div class="carddiv col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1rem 2rem; gap: 1rem; border-radius: 3rem;">
                <div class="cardimg">
                    <img src=${curr.img} alt=${curr.name}>
                </div>
                <h3 class="cardheading">${curr.name}</h3>
                <p class="cardtopic">${curr.para}</p>
            </div>

    `
}).join("");

menurow.innerHTML=showData;




navbtns.addEventListener('click', function(){
    header.classList.toggle('active');
});

contactbtn.addEventListener('click', function(){
    querydiv.classList.add('show');
});

closeicon.addEventListener('click', function(){
    querydiv.classList.remove('show');
});

reservebtn.addEventListener('click', function(){
    reservetable.classList.add('display');
});

reserveclosebtn.addEventListener('click', function(){
    reservetable.classList.remove('display');
});



