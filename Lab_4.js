let isSubscribed = "user is subscribed";

var barColors = ["red", "green","blue"];

window.onload = setTimeout( function(){
    if (!(document.cookie === isSubscribed)) {
        let modal = document.querySelector("#openModal");
        modal.style.opacity = 1;
        modal.style.pointerEvents = "auto";
    }
}, 3000);

function closeModal(){
    let modal = document.querySelector("#openModal");
    modal.style.display = "none";
}

function subscribe(){
    alert("Ви підписалися!)");
    document.cookie = isSubscribed;
    closeModal();
}
function notsubscribe(){
    alert("Ви не підписалися!)");
    document.cookie = isSubscribed;
    closeModal();
}

function openCart(){
    let cart = document.querySelector("#cart");
    cart.style.display = "block";

    let inner = "";

    let cartBody = document.querySelector("#cartBody");
    cartArr.forEach(elem => {
        inner += "<div><p>"+elem.name+"</p><img src='"+elem.url+"'></div>";
    });

    cartBody.innerHTML = inner;

    new Chart("myChart", {
        type: "pie",
        data: {
          labels: ["fruits","vegetables","sweets"],
          datasets: [{
            backgroundColor: barColors,
            data: [cartArr.filter(x => x.category == 0).length, cartArr.filter(x => x.category == 1).length, cartArr.filter(x => x.category == 2).length]
          }]
        },
        options: {
          title: {
            display: true,
            text: "Cart"
          }
        }
      });
}

function closeCart(){
    let cart = document.querySelector("#cart");
    cart.style.display = "none";
}


/* Creating Fruits*/

let fruits = [
    {
        name: "banana",
        url: "https://img.freepik.com/premium-photo/a-nice-and-very-yellow-isolated-banana-on-black-background_158593-52.jpg",
        id: 0
    },
    {
        name: "lemon",
        url: "https://st2.depositphotos.com/3743699/10443/i/600/depositphotos_104437506-stock-photo-a-slice-of-lemon-with.jpg",
        id: 1
    },
    {
        name: "laura",
        url: "https://ogorodsadovod.com/sites/default/files/imagecache/resizeimgpost-500-500/u79/2015/09/kivano3.jpg",
        id: 2
    },
    {
        name: "avocado",
        url: "https://img.freepik.com/premium-photo/macro-shot-of-fresh-avocados-cut-in-a-half-on-the-black-background_124865-9975.jpg",
        id: 3
    },
];

function getFruits(){
    let divInfo = document.querySelector("#fruits");
    let inner = "";
    for(let i = 0; i < fruits.length ; i++){
        let img = "<img title='Friuts' src='" + fruits[i].url + "'><button onclick='addProduct(0, "+i+")'>Buy</button>";
        inner = inner + img;
    }
    divInfo.innerHTML = inner;
}


/* Creating Vegetables*/

let vegetables = [
    {
        name: "cabbage",
        url: "https://thumbs.dreamstime.com/b/cabbage-black-background-copy-space-cabbage-black-background-149430218.jpg",
        id: 0
    },
    {
        name: "pepper",
        url: "https://img.freepik.com/premium-photo/red-pepper-on-a-black-background-paprika-the-species-capsicum-annuum-copy-space_76255-483.jpg",
        id: 1
    },
    {
        name: "carrot",
        url: "https://img.freepik.com/premium-photo/ripe-vegetable-root-vegetable-carrot-on-black-background_648344-4107.jpg",
        id: 2
    },
    {
        name: "tomato",
        url: "https://img.freepik.com/premium-photo/cherry-tomatoes-on-a-branch-on-a-black-background-water-drops-on-tomatoes_232060-332.jpg",
        id: 3
    },
];

function getVegetables(){
    let divInfo = document.querySelector("#vegetables");
    let inner = "";
    for(let i = 0; i < vegetables.length ; i++){
        let img = "<img title='Vegetables' src='" + vegetables[i].url + "'><button onclick='addProduct(1, "+i+")'>Buy</button>";
        inner = inner + img;
    }
    divInfo.innerHTML = inner;
}

/* Creating Sweets*/

let sweets = [
    {
        name: "Candy",
        url: "https://st4.depositphotos.com/25633882/31000/i/450/depositphotos_310005956-stock-photo-coloured-sweets-in-white-pot.jpg",
        id: 0
    },
    {
        name: "M & M's",
        url: "https://thumbs.dreamstime.com/b/%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%82%D1%8B-m-%D0%B0%D1%80%D0%B0%D1%85%D0%B8%D1%81%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BC%D0%B0%D1%81%D0%BB%D0%B0-118483888.jpg",
        id: 1
    },
    {
        name: "Skittles",
        url: "https://thumbs.dreamstime.com/b/%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%82%D1%8B-skittles-%D0%BD%D0%B0-%D1%87%D0%B5%D1%80%D0%BD%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-118483905.jpg",
        id: 2
    },
    {
        name: "cake",
        url: "https://img.freepik.com/premium-photo/beautiful-birthday-cake-on-black-background_322920-1049.jpg",
        id: 3
    },
];

function getSweets(){
    let divInfo = document.querySelector("#sweets");
    let inner = "";
    for(let i = 0; i < sweets.length ; i++){
        let img = "<img title='Sweets' src='" + sweets[i].url + "'><button onclick='addProduct(2, "+i+")'>Buy</button>";
        inner = inner + img;
    }
    divInfo.innerHTML = inner;
}


function addProduct(category, id){
    alert("Ви придбали товар! Перевірте свою корзину)");
    switch (category){
        case 0: cartArr.push({
            name: fruits.find(x => x.id == id).name, 
            url: fruits.find(x => x.id == id).url, 
            id: id, 
            category: category});
            break;
        case 1: cartArr.push({
            name: vegetables.find(x => x.id == id).name, 
            url: vegetables.find(x => x.id == id).url, 
            id: id, 
            category: category});
            break;
        case 2: cartArr.push({
            name: sweets.find(x => x.id == id).name, 
            url: sweets.find(x => x.id == id).url, 
            id: id, 
            category: category});
            break;
    }
}

let cartArr = [];