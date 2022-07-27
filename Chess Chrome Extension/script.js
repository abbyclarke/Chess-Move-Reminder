async function fetchData() {
    let user = ""
    const res=await fetch (`https://api.chess.com/pub/player/${user}/games`);
    const record=await res.json();
    
    const table = document.getElementById('chessTable')
    const tbody = document.getElementsByTagName("tbody")[0]

    let numGames = record.games.length

    if (numGames === 0) {
        let row = document.createElement('tr')
        tbody.appendChild(row)
        row.appendChild(createTd("No active games"))
        row.appendChild(createTd("-"))
        row.appendChild(createTd("-"))
        row.appendChild(createTd("-"))
    }
    
    for (let game = 0; game < numGames; game++) {
        let row = document.createElement('tr')
        tbody.appendChild(row)

        let player1 = record.games[game].black
        let player2 = record.games[game].white 
        let playerBlack = player1.substr(33)
        let playerWhite = player2.substr(33)
        let moveDate = new Date(record.games[game].move_by * 1000)
        let turn = record.games[game].turn

        row.appendChild(createTd(playerBlack))
        row.appendChild(createTd(playerWhite))
        row.appendChild(createTd(turn))
        row.appendChild(createTd(moveDate.toLocaleString()))


    }
    
    function createTd(text) {
        let td = document.createElement('td')
        td.textContent = text
        return td
    }

}
fetchData();