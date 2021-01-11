'use strict';



var arrayOfBusMall = [];
var leftBusMallImg = document.getElementById('left_BusMall_img');
var rightBusMallImg = document.getElementById('right_BusMall_img');
var centerBusMallImg = document.getElementById('center_BusMall_img');
var BusMallection = document.getElementById('all_BusMall');
var trialsleft = 5;

var shownImages = [];
var BusMallOfList = document.getElementById('BusMallList');
var BusMallCanvas = document.getElementById('BusMallChart').getContext('2d');
var button = document.getElementById('button');
button.style.display = 'none';


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


function renderChart() {

    var arrayOfBusMallNames = [];
    var arrayOfBusMallCount = [];
    var arrayOfBusMallShown = [];


    for (var i = 0; i < arrayOfBusMall.length; i++) {
        arrayOfBusMallNames.push(arrayOfBusMall[i].name);
        arrayOfBusMallCount.push(arrayOfBusMall[i].counter);
        arrayOfBusMallShown.push(arrayOfBusMall[i].timeShown);

    }

    var myChart = new Chart(BusMallCanvas, {
        type: 'bar',
        data: {
            labels: arrayOfBusMallNames,
            datasets: [
                {
                    label: '# of BusMall Clicks',
                    data: arrayOfBusMallCount,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                        

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'BusMall Times Shown',
                    data: arrayOfBusMallShown,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function checkAva (selectedBusMallName) {

    for (var index = 0; index < shownImages.length; index++) {
        if (shownImages[index].name === selectedBusMallName) {
            return true;
        }
    }
    return false;
}

renderChart();

function pickABusMall() {
    do {
        var leftImage = Math.round(Math.random() * (arrayOfBusMall.length - 1))
        var leftBusMallImgName = arrayOfBusMall[leftImage].name;

    } while (checkAva(leftBusMallImgName));

    do {
        var centerImage = Math.round(Math.random() * (arrayOfBusMall.length - 1))
        var centerBusMallImgName = arrayOfBusMall[centerImage].name;
    } while (centerImage === leftImage || checkAva(centerBusMallImgName));
    do {
        var rightImage = Math.round(Math.random() * (arrayOfBusMall.length - 1))
        var rightBusMallImgName = arrayOfBusMall[rightImage].name;
    } while (rightImage === centerImage || rightImage === leftImage || checkAva(rightBusMallImgName));

    shownImages = [];

  shownImages.push(
    arrayOfBusMall[leftImage],
    arrayOfBusMall[rightImage],
    arrayOfBusMall[centerImage]
  )

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


function list(event) {
    event.preventDefault();
    renderChart();
    var ul = document.createElement("ul");
    BusMallOfList.appendChild(ul);
    for (var j = 0; j < arrayOfBusMall.length; j++) {
        var li = document.createElement("li");
        li.textContent = arrayOfBusMall[j].name + " had " + arrayOfBusMall[j].counter + " votes, and was seen " + arrayOfBusMall[j].timeShown + " times.";
        ul.appendChild(li);
    }
}
button.addEventListener('click', list );