
window.onload = function () {
    nodes = document.querySelectorAll('.container div');
    nodes.forEach(element => {
        element.onclick = clickDiv;

    });

}
let nodes = document.querySelectorAll('.container div');
index = Array.from(nodes).indexOf(this);
writeX = true;
writeO = true;
function clickDiv() {
    let errorNode = document.querySelector(`div#error`);
    if (this.innerText === 'O' || this.innerText === 'X') {
        errorNode.innerText = 'Error!';
        errorNode.classList.add('error');
    } else {
        errorNode.innerText = '';
        errorNode.classList.remove('error');
        if (writeX) {
            this.innerText = 'X';
            this.classList.add('classX');
            console.log('He escrito X');
            writeX = false;
            writeO = true;
            winX();

        } else if (writeO) {
            this.innerText = 'O';
            this.classList.add('classO');
            console.log('He escrito O');
            writeO = false;
            writeX = true;
            winO();
        }
    }
}

function winX() {
    let node = document.querySelector(`div#isWinner`);

    if (nodes[0].innerText === 'X' && nodes[4].innerText === 'X' && nodes[8].innerText === 'X') {
        node.innerText = 'Gana X';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    } else if (nodes[0].innerText === 'X' && nodes[1].innerText === 'X' && nodes[2].innerText === 'X') {
        node.innerText = 'Gana X';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    } else if (nodes[0].innerText === 'X' && nodes[3].innerText === 'X' && nodes[6].innerText === 'X') {
        node.innerText = 'Gana X';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    } else if (nodes[1].innerText === 'X' && nodes[4].innerText === 'X' && nodes[7].innerText === 'X') {
        node.innerText = 'Gana X';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    } else if (nodes[3].innerText === 'X' && nodes[4].innerText === 'X' && nodes[5].innerText === 'X') {
        node.innerText = 'Gana X';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    } else if (nodes[2].innerText === 'X' && nodes[5].innerText === 'X' && nodes[8].innerText === 'X') {
        node.innerText = 'Gana X';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    } else if (nodes[2].innerText === 'X' && nodes[4].innerText === 'X' && nodes[6].innerText === 'X') {
        node.innerText = 'Gana X';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    } else if (nodes[6].innerText === 'X' && nodes[7].innerText === 'X' && nodes[8].innerText === 'X') {
        node.innerText = 'Gana X';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    }
}

function winO() {
    let node = document.querySelector(`div#isWinner`);

    if (nodes[0].innerText === 'O' && nodes[4].innerText === 'O' && nodes[8].innerText === 'O') {
        node.innerText = 'Gana O';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    } else if (nodes[0].innerText === 'O' && nodes[1].innerText === 'O' && nodes[2].innerText === 'O') {
        node.innerText = 'Gana O';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    } else if (nodes[0].innerText === 'O' && nodes[3].innerText === 'O' && nodes[6].innerText === 'O') {
        node.innerText = 'Gana O';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    } else if (nodes[1].innerText === 'O' && nodes[4].innerText === 'O' && nodes[7].innerText === 'O') {
        node.innerText = 'Gana O';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    } else if (nodes[3].innerText === 'O' && nodes[4].innerText === 'O' && nodes[5].innerText === 'O') {
        node.innerText = 'Gana O';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    } else if (nodes[2].innerText === 'O' && nodes[5].innerText === 'O' && nodes[8].innerText === 'O') {
        node.innerText = 'Gana O';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    } else if (nodes[2].innerText === 'O' && nodes[4].innerText === 'O' && nodes[6].innerText === 'O') {
        node.innerText = 'Gana O';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    } else if (nodes[6].innerText === 'O' && nodes[7].innerText === 'O' && nodes[8].innerText === 'O') {
        node.innerText = 'Gana O';
        node.classList.add('win')
        writeX = false;
        writeO = false;
    }
}
/*

Combinaciones Win:

1. 0, 4, 8
2. 0, 1, 2
3. 0, 3, 6
4. 1, 4, 7
5. 3, 4, 5
6. 2, 5, 8
7, 2, 4, 6
8. 6, 7, 8

*/

/* function isWinner() {
    const combinacionesWin = [[0, 4, 8], [0, 1, 2], [0, 3, 6], [1, 4, 7], [3, 4, 7], [2, 5, 8], [2, 4, 6], [6, 7, 8]];

}
isWinner(); */