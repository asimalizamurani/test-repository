const h2 = document.querySelector('h2')

let big = true;
h2.addEventListener('click', function(e) {
    if(big === true) {
        h2.style.fontSize = '3rem';
        big = false
    } else if(big === false) {
        h2.style.fontSize = '2rem';
        big = true;
    }
})