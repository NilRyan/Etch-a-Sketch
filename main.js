const drawingBlock = document.querySelector('.drawing-block');
const reset = document.querySelector('.reset');
const color = document.querySelector('.color');
const random = document.querySelector('.random');
const colors = {
    babyblue: '#D3E7EE',
    royalblue: '#7097A8',
    brown: '#C6A477',
    beige: '#ECD59F',
};

//eraser
drawingBlock.addEventListener('click', function (e) {
    e.stopPropagation();
    e.target.style.backgroundColor = colors.beige;
})



// creation of divs
for (let i = 0; i < 256; i++) {
    const colorBlock = document.createElement('div');
    colorBlock.style.height = '1fr';
    colorBlock.style.width = '1fr';
    colorBlock.style.border = '0.2px solid darkblue';
    colorBlock.style.backgroundColor = colors.beige;
    colorBlock.style.margin = '0';

    drawingBlock.appendChild(colorBlock);
}

//for mobile
drawingBlock.addEventListener('touchstart', function (e) {
    e.target.style.backgroundColor = setColor(color, random);

})





//reset button
reset.addEventListener('click', () => {
    const select = document.querySelectorAll('.drawing-block div');
    for (let i = 0; i < select.length; i++) {
        select[i].style.backgroundColor = colors.beige;
    }

})
//toggle random button default off
random.addEventListener('click', function () {
    if (random.textContent.includes('on')) {
        random.textContent = 'random off';
    } else {
        random.textContent = 'random on';
    }
})
//button color picker
color.addEventListener('change', function () {
    console.log(color.value);
})
// random party color
drawingBlock.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    e.target.style.backgroundColor = setColor(color, random);
})

// color for mouseover 
function setColor(color, random) {
    if (random.textContent.includes('on')) {
        return getRandomColor();
    } else {
        return color.value;
    }
}


//random color generator:
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
