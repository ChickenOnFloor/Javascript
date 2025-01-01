const elements = document.querySelectorAll('.card');
let currentPlayer = '0'
const board = Array(9).fill(null);

function checkWinner(){
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for(const combo of winningCombinations){
        const [a, b, c] = combo;
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
            console.log(board[a])
            return board[a]
        }
    }
    return board.includes(null)? null : 'Draw';
}

elements.forEach((element, index) => {
    element.addEventListener("click",() => {
        const h1 = element.querySelector('h1')
        if(!board[index] && !checkWinner()){
            currentPlayer = currentPlayer === "X"? "0": "X";
            console.log(currentPlayer)
            h1.innerText = currentPlayer
            board[index] = currentPlayer;
            playertyp = currentPlayer === "0"? "(Player 1) Turn": "(Player 2) Turn";
            texttyp = currentPlayer === "X"? "(Player 1)": "(Player 2)";
            document.querySelector(".Winner").innerText = playertyp
            
            const winner = checkWinner();
            if(winner){
                const winhead = document.querySelector('.Winner')
                winhead.innerText = winner === "Draw"? "Its A Draw": `${texttyp} Wins`
            }
        }
    })
});

document.querySelector('.reset').addEventListener("click", () =>{
    const e = document.querySelectorAll('.card')
    e.forEach((element, index) => {
        board[index] = null
        element.querySelector('h1').innerText = ""
        currentPlayer = "X"
        const winhead = document.querySelector('.Winner')
        winhead.innerText = "(Player 1) Turn"
    })
})
