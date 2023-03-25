
window.onload = function () {
    nodes = document.querySelectorAll('.container div');
    nodes.forEach(element => {
        element.onclick = clickDiv;

    });
}
nodes = document.querySelectorAll('.container div');
index = Array.from(nodes).indexOf(this);
writeX = true;
writeO = true;
function clickDiv() {

    if (this.innerText === 'O' || this.innerText === 'X') {
        alert("Error!!!");
    } else {

        if (writeX) {
            this.innerText = 'X';
            console.log('He escrito X');
            writeX = false;
            writeO = true;
            winX();

        } else if (writeO) {
            this.innerText = 'O';
            console.log('He escrito O');
            writeO = false;
            writeX = true;
            winO();
        }
    }
}

function winX() {


    if (nodes[0].innerText === 'X' && nodes[4].innerText === 'X' && nodes[8].innerText === 'X') {
        alert(`Gana X`);
        nodes[0].classList.add('win');
        nodes[4].classList.add('win');
        nodes[8].classList.add('win');
        writeX = false;
        writeO = false;
    } else if (nodes[0].innerText === 'X' && nodes[1].innerText === 'X' && nodes[2].innerText === 'X') {
        alert(`Gana X`);
        nodes[0].classList.add('win');
        nodes[1].classList.add('win');
        nodes[2].classList.add('win');
        writeX = false;
        writeO = false;
    } else if (nodes[0].innerText === 'X' && nodes[3].innerText === 'X' && nodes[6].innerText === 'X') {
        alert(`Gana X`);
        nodes[0].classList.add('win');
        nodes[3].classList.add('win');
        nodes[6].classList.add('win');
        writeX = false;
        writeO = false;
    } else if (nodes[1].innerText === 'X' && nodes[4].innerText === 'X' && nodes[7].innerText === 'X') {
        alert(`Gana X`);
        nodes[1].classList.add('win');
        nodes[4].classList.add('win');
        nodes[7].classList.add('win');
        writeX = false;
        writeO = false;
    } else if (nodes[3].innerText === 'X' && nodes[4].innerText === 'X' && nodes[5].innerText === 'X') {
        alert(`Gana X`);
        nodes[3].classList.add('win');
        nodes[4].classList.add('win');
        nodes[5].classList.add('win');
        writeX = false;
        writeO = false;
    } else if (nodes[2].innerText === 'X' && nodes[5].innerText === 'X' && nodes[8].innerText === 'X') {
        alert(`Gana X`);
        nodes[2].classList.add('win');
        nodes[5].classList.add('win');
        nodes[8].classList.add('win');
        writeX = false;
        writeO = false;
    } else if (nodes[2].innerText === 'X' && nodes[4].innerText === 'X' && nodes[6].innerText === 'X') {
        alert(`Gana X`);
        nodes[2].classList.add('win');
        nodes[4].classList.add('win');
        nodes[6].classList.add('win');
        writeX = false;
        writeO = false;
    } else if (nodes[6].innerText === 'X' && nodes[7].innerText === 'X' && nodes[8].innerText === 'X') {
        alert(`Gana X`);
        nodes[6].classList.add('win');
        nodes[7].classList.add('win');
        nodes[8].classList.add('win');
        writeX = false;
        writeO = false;
    }
}

function winO() {

    if (nodes[0].innerText === 'O' && nodes[4].innerText === 'O' && nodes[8].innerText === 'O') {
        alert(`Gana O`);
        nodes[0].classList.add('win');
        nodes[4].classList.add('win');
        nodes[8].classList.add('win');
        writeX = false;
        writeO = false;
    } else if (nodes[0].innerText === 'O' && nodes[1].innerText === 'O' && nodes[2].innerText === 'O') {
        alert(`Gana O`);
        nodes[0].classList.add('win');
        nodes[1].classList.add('win');
        nodes[2].classList.add('win');
        writeX = false;
        writeO = false;
    } else if (nodes[0].innerText === 'O' && nodes[3].innerText === 'O' && nodes[6].innerText === 'O') {
        alert(`Gana X`);
        nodes[0].classList.add('win');
        nodes[3].classList.add('win');
        nodes[6].classList.add('win');
        writeX = false;
        writeO = false;
    } else if (nodes[1].innerText === 'O' && nodes[4].innerText === 'O' && nodes[7].innerText === 'O') {
        alert(`Gana O`);
        nodes[1].classList.add('win');
        nodes[4].classList.add('win');
        nodes[7].classList.add('win');
        writeX = false;
        writeO = false;
    } else if (nodes[3].innerText === 'O' && nodes[4].innerText === 'O' && nodes[5].innerText === 'O') {
        alert(`Gana O`);
        nodes[3].classList.add('win');
        nodes[4].classList.add('win');
        nodes[5].classList.add('win');
        writeX = false;
        writeO = false;
    } else if (nodes[2].innerText === 'O' && nodes[5].innerText === 'O' && nodes[8].innerText === 'O') {
        alert(`Gana O`);
        nodes[2].classList.add('win');
        nodes[5].classList.add('win');
        nodes[8].classList.add('win');
        writeX = false;
        writeO = false;
    } else if (nodes[2].innerText === 'O' && nodes[4].innerText === 'O' && nodes[6].innerText === 'O') {
        alert(`Gana O`);
        nodes[2].classList.add('win');
        nodes[4].classList.add('win');
        nodes[6].classList.add('win');
        writeX = false;
        writeO = false;
    } else if (nodes[6].innerText === 'O' && nodes[7].innerText === 'O' && nodes[8].innerText === 'O') {
        alert(`Gana O`);
        nodes[6].classList.add('win');
        nodes[7].classList.add('win');
        nodes[8].classList.add('win');
        writeX = false;
        writeO = false;
    }
}
