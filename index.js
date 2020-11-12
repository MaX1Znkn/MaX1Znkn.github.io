let slope = document.getElementsByClassName('slope');
for (const iter of slope) {
    let img = document.createElement('img');
    if ( +iter.innerHTML >= 95 && +iter.innerHTML <= 105 ) {
        img.src = './images/apply.svg';
        img.alt = 'Apply'
        iter.append(img);
    } else {
        img.src = './images/refuse.svg';
        img.alt = 'Refuse'
        iter.append(img);
    }
}

let offset = document.getElementsByClassName('offset');
for (const iter of offset) {
    let img = document.createElement('img');
    if ( Math.abs(+iter.innerHTML) >= 0 && Math.abs(+iter.innerHTML) <= 20 ) {
        img.src = './images/apply.svg';
        img.alt = 'Apply'
        iter.append(img);
    } else {
        img.src = './images/refuse.svg';
        img.alt = 'Refuse'
        iter.append(img);
    }
}