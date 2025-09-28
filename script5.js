
const boxes = document.querySelectorAll('.box');
const resetbtn = document.getElementById('reset');
const msg = document.getElementById('msg'); // Assuming you have an element with id="msg"
const msgcontainer = document.querySelector('.msg-container'); // Assuming you have a container for messages
let currentplayer = 'x';

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box.textContent === "") {
            box.textContent = currentplayer;
            checkwinpattern();
            currentplayer = currentplayer === 'x' ? '0' : 'x';
        }
    });
});

const checkwinpattern = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].textContent;
        let pos2val = boxes[pattern[1]].textContent;
        let pos3val = boxes[pattern[2]].textContent;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            alert(`${pos1val} is the winner`);
            showwinner(pos1val);
            disableboxes();
            return;
        }
    }
};

const showwinner = (winner) => {
    console.log(winner);
    msg.innerText = `Winner is ${winner}`;
    msgcontainer.classList.remove('hide');
};
const disableboxes = () => {
    boxes.forEach(box => {
        box.style.pointerEvents = "none";
    });
};
const enableboxes = () => {
    boxes.forEach(box => {
        box.textContent = "";
        box.style.pointerEvents = "auto";
    });
    msgcontainer.classList.add('hide');
    currentplayer = 'x';
};
resetbtn.addEventListener('click', () => {
    enableboxes();
});
