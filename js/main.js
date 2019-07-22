let open = document.getElementById('open-btn'),
    nameValue = document.getElementsByClassName('name-value')[0],
    budgetValue = document.getElementsByClassName('budget-value')[0],
    goodsValue = document.getElementsByClassName('goods-value')[0],
    itemsValue = document.getElementsByClassName('items-value')[0],
    employersValue = document.getElementsByClassName('employers-value')[0],
    discountValue = document.getElementsByClassName('discount-value')[0],
    isopenValue = document.getElementsByClassName('isopen-value')[0],

    mainFunctions = document.getElementsByClassName('main-functions'),
    goodsItem = document.getElementsByClassName('goods-item'),
    chooseItem = document.querySelector('.choose-item'),
    timeValue = document.querySelector('.time-value'),
    countBudget = document.querySelector('.count-budget-value'),
    hireEmployers = document.querySelectorAll('.hire-employers-item'),
    buttons = mainFunctions[0].getElementsByTagName('button');

let goodsBtn = buttons[0],
    budgetBtn = buttons[1],
    employersBtn = buttons[2];

let money,
    name,
    time,
    price;

open.addEventListener('click', () => {
    money = +prompt("Ваш бюджет?", '');
        while(isNaN(money) || money == '' || money == null){
            money = +prompt("Ваш бюджет?");
        }
        budgetValue.textContent = money;
        nameValue.textContent = prompt("Название вашего магазина?", '').toUpperCase();
        goodsBtn.removeAttribute('disabled');
        budgetBtn.removeAttribute('disabled');
        employersBtn.removeAttribute('disabled');
});

goodsBtn.addEventListener('click', () => {
    for(let i = 0; i < goodsItem.length; i++){
        let a = goodsItem[i].value;
        if(isNaN(a) && (typeof(a)) != null && a.length < 50){
            console.log('Все верно!');
            mainList.shopGoods[i] = a;
            goodsValue.textContent = mainList.shopGoods;
        } else {
            i = goodsItem.length;
        }
    }
});

chooseItem.addEventListener('change', () => {
    let items = chooseItem.value;
    if(isNaN(items) && items != ''){
        mainList.shopItems = items.split(",");
        mainList.shopItems.sort();
        itemsValue.textContent = mainList.shopItems;
    }
});

timeValue.addEventListener('change', () => {
    let time = timeValue.value;
    if(time < 0){
        mainList.open = false;
    } else if (time > 8 && time< 20){
        console.log('время работать!');
        mainList.open = true;
    } else if(time < 24){
        mainList.open = false;
    } else {
        mainList.open = false;
    }
    
    if(mainList.open == true) {
        isopenValue.style.backgroundColor = 'green';
    } else{
        isopenValue.style.backgroundColor = 'red';
    }
});

budgetBtn.addEventListener('click', () => {
    countBudget.value = money/30;
});

employersBtn.addEventListener('click', () => {
    for(let i=0; i< hireEmployers.length; i++) {
        name =  hireEmployers[i].value;
        mainList.employers[i] = name;
        if(mainList.employers[i] != ''){
            employersValue.textContent += mainList.employers[i] + ', ';
        }
    }
});

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: true,
    shopItems: [],

    makeDiscount: function makeDiscount() {
        if(mainList.discount == true) {
            price = (price/100)*80;
            discountValue.style.backgroundColor = 'green';
        }
    }
};
mainList.makeDiscount();
// document.addEventListener('change', () => {
//     mainList.makeDiscount();
// });