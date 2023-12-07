function loadMatches() {

    fetch('https://api.openligadb.de/getbltable/laliga1/2023')
        .then(response => response.json())
        .then(json => fillTable(json))
}


function fillTable(data) {
    console.log(data);
    let output = '<div class="component">' +
        '<div class="Uberschr" style="font-size: x-large;">Tabelle LALIGA</div>' +
        '<div class="Sieg"> S</div>' +
        '<div class="Unent"> U</div>' +
        '<div class="Nied"> N</div>' +
        '<div class="Games"> SP</div>' +
        '<div class="pk">PK</div>' +
        '</div>'
    data.forEach((team, index) => {
        output +=
            '<div class="component">' + team.teamName +
            '<div class="wappen"><img src="' + team.teamIconUrl + '" alt="" height="35px" width="35px">' +
            '</div><div class="pk">' + team.points + '</div> <div class="Games">' + team.matches + '</div> <div class="Sieg">' + team.won + '</div>' +
            '<div class="Unent">' + team.draw + '</div> <div class="Nied">' + team.lost + '</div> </div>';
    });
    document.getElementById("table").innerHTML = output;
}

loadMatches();

/*

<div class="component">FC Barcelona
                <div class="wappen"><img src="Barca.png" alt="" height="35px" width="35px"></div>
                <div class="pk">20</div>
                <div class="Games">6</div>
                <div class="Sieg">6</div>
                <div class="Unent">2</div>
                <div class="Nied">0</div>

            </div>

*/