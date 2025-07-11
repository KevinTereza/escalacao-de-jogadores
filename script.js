const form = document.getElementById("lineup-form");
const lineupBtn = document.getElementById("lineup-button");
const removeBtn = document.getElementById("remove-button");
const teamList = document.getElementById("team-list");
const team = [];

function lineUpPlayer(ev) {
    ev.preventDefault();

    const playerName = document.getElementById("player-name").value;
    const playerNumber = document.getElementById("player-number").value;
    const playerPosition = document.getElementById("player-position").value;

    const userConfirm = confirm(`Você quer escalar o jogador "${playerName}", número ${playerNumber} e posição ${playerPosition}?`)

    if (userConfirm) {
        const numberTest = team.findIndex((p) => p.number === playerNumber)
        if (numberTest === -1) {
            const newPlayer = {
            name: playerName,
            number: playerNumber,
            position: playerPosition
            };

            const playerInfo = document.createElement("ul");
            playerInfo.id = `player-${newPlayer.number}`;

            const infoName = document.createElement("li");
            infoName.innerText = `Nome: ${newPlayer.name}`;

            const infoNumber = document.createElement("li");
            infoNumber.innerText = `Camisa: ${newPlayer.number}`;

            const infoPosition = document.createElement("li");
            infoPosition.innerText = `Posição: ${newPlayer.position}`;

            playerInfo.append(infoName, infoNumber, infoPosition);
            teamList.appendChild(playerInfo);
            team.push(newPlayer);
            alert("✅ Jogador escalado!")
            form.reset(); 
        } else {
            alert("⚠️ Já existe um jogador com este mesmo número!")
        }
    } else {
        alert("❌ Escalação cancelada!")
    }
}

function removePlayer(ev) {
    ev.preventDefault();

    const playerNumber = document.getElementById("player-number-remove").value;
    const numberIndex = team.findIndex((p) => p.number === playerNumber)
    if (numberIndex !== -1) {
        const player = team[numberIndex];

        const userConfirm = confirm(`Você quer remover o jogador "${player.name}" do time?`);
        if (userConfirm) {
            const playerInfo = document.getElementById(`player-${playerNumber}`);
            team.splice(numberIndex, 1);
            teamList.removeChild(playerInfo);
            alert("✅ Jogador removido!")
            form.reset();
        } else {
            alert("❌ Operação cancelada!")
        }
    } else {
        alert("⚠️ Jogador não encontrado!")
    }

}
    

lineupBtn.addEventListener("click", lineUpPlayer);
removeBtn.addEventListener("click", removePlayer);