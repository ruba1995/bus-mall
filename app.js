'use strict';



var arrayOfBusMall = [];
var leftBusMallImg = document.getElementById('left_BusMall_img');
var rightBusMallImg = document.getElementById('right_BusMall_img');
var centerBusMallImg = document.getElementById('center_BusMall_img');
var BusMallection = document.getElementById('all_BusMall');
var trialsleft = 25;

var BusMallOfList = document.getElementById('BusMallList'); 
var button = document.getElementById('button');
button.style.display= 'none';


function BusMall(name, image) {
    this.image = image;
    this.name = name;
    this.url = 'images/' + image;
    this.counter = 0;
    this.timeShown = 0;

    arrayOfBusMall.push(this);
}

function renderBusMall(leftImage, centerImage, rightImage) {
    leftBusMallImg.setAttribute('src', arrayOfBusMall[leftImage].url);
    arrayOfBusMall[leftImage].timeShown++;
    rightBusMallImg.setAttribute('src', arrayOfBusMall[rightImage].url);
    arrayOfBusMall[rightImage].timeShown++;
    centerBusMallImg.setAttribute('src', arrayOfBusMall[centerImage].url);
    arrayOfBusMall[centerImage].timeShown++;
}

function pickABusMall() {
    var leftImage = Math.round(Math.random() * (arrayOfBusMall.length - 1))

    do {
        var centerImage = Math.round(Math.random() * (arrayOfBusMall.length - 1))
        } while (centerImage === leftImage);
        do {
            var rightImage = Math.round(Math.random() * (arrayOfBusMall.length - 1))
    } while (rightImage === centerImage || rightImage === leftImage);


    renderBusMall(leftImage, rightImage, centerImage);

}

function checkBusMall(objectIndicator) {
    for (var index = 0; index < arrayOfBusMall.length; index++) {
        if (arrayOfBusMall[index].url === objectIndicator) {
            arrayOfBusMall[index].counter++;
            trialsleft--;
        }
    }
}

function countBusMall(event) {
    
    var targetId = event.target.id;
    if (trialsleft !== 0) {
        if (targetId === 'left_BusMall_img' || targetId === 'right_BusMall_img' || targetId === 'center_BusMall_img') {
            var objectIndicator = event.target.getAttribute('src');
            checkBusMall(objectIndicator);
            pickABusMall();
        }

    } else {
        BusMallection.removeEventListener('click', countBusMall);
        console.log(arrayOfBusMall);
        button.style.display = 'block';
      
    }
}


new BusMall('Bag', 'bag.jpg');
new BusMall('Banana', 'banana.jpg');
new BusMall('Bathroom', 'bathroom.jpg');
new BusMall('Boots', 'boots.jpg');
new BusMall('Breakfast', 'breakfast.jpg');
new BusMall('Bubblegum', 'bubblegum.jpg');
new BusMall('Chair', 'chair.jpg');
new BusMall('Cthulhu', 'cthulhu.jpg');
new BusMall('Dog-duck', 'dog-duck.jpg');
new BusMall('Dragon', 'dragon.jpg');
new BusMall('Pen', 'pen.jpg');
new BusMall('Pet Sweep', 'pet-sweep.jpg');
new BusMall('Scissors', 'scissors.jpg');
new BusMall('Shark', 'shark.jpg');
new BusMall('Sweep', 'sweep.png');
new BusMall('Tauntaun', 'tauntaun.jpg');
new BusMall('Unicorn', 'unicorn.jpg');
new BusMall('Usb', 'usb.gif');
new BusMall('Water Can', 'water-can.jpg');
new BusMall('Wine Glass', 'wine-glass.jpg');



pickABusMall();
BusMallection.addEventListener('click', countBusMall);


function list(event){
    event.preventDefault();
    var ul = document.createElement("ul");
    BusMallOfList.appendChild(ul);
    for (var j =0; j<arrayOfBusMall.length; j++){
      var li = document.createElement("li");
      li.textContent = arrayOfBusMall[j].name + " had "+arrayOfBusMall[j].counter +" votes, and was seen "+ arrayOfBusMall[j].timeShown +" times.";
      ul.appendChild(li);
    } 
  }
button.addEventListener('click', list);