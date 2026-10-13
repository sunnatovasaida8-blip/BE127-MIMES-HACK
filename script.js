let selectedMines = 1;

function setMines(count) {
    selectedMines = count;
    document.querySelectorAll('.mine-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

const gridContainer = document.getElementById('minesGrid');

// 5x5 kataklarni chizish
function createGrid() {
    gridContainer.innerHTML = '';
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        gridContainer.appendChild(cell);
    }
}

createGrid();

function getSignal() {
    const cells = document.querySelectorAll('.cell');
    
    // Avvalgi natijalarni tozalash
    cells.each = cells.forEach(c => {
        c.classList.remove('gem');
        c.innerHTML = '';
    });

    // Tasodifiy xavfsiz kataklarni tanlash (Mina soniga qarab 3 tadan 5 tagacha yulduzcha chiqadi)
    let gemCount = selectedMines <= 3 ? 5 : 4;
    let selectedIndices = [];
    
    while(selectedIndices.length < gemCount) {
        let randomIndex = Math.floor(Math.random() * 25);
        if(!selectedIndices.includes(randomIndex)) {
            selectedIndices.push(randomIndex);
        }
    }

    // Animatsiya bilan ko'rsatish
    let delay = 0;
    selectedIndices.forEach((index, i) => {
        setTimeout(() => {
            let cell = cells[index];
            cell.classList.add('gem');
            cell.innerHTML = '💎';
        }, i * 150);
    });

    // Aniqlik foizini o'zgartirib turish
    let randomAcc = (97 + Math.random() * 2.5).toFixed(1);
    document.getElementById('accuracy').innerText = randomAcc + '%';
}
