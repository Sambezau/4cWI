function loadGames() {

    fetch('https://api.openligadb.de/getmatchdata/68265')
        .then(response => response.json())
        .then(json => fillGames(json))

}

function fillGames(data) {
    console.log(data);
    
    let output = '<div class="Matches1" id="games">' +
    '<div class="componentTable1"><a href="Laliga.html" style="color: black;">'+ data.team1.teamName +'</a>' +
    '<div class="wappenMatch"><img src="'+ data.team1.teamIconUrl +'" alt="" height="60px" width="60px"></div>' +
    '<div class="score">' + data.goals[0].goalGetterName +','+ data.goals[0].matchMinute +' </div>' +
    '</div>' +
    '<div class="vs">'+ data.goals[2].scoreTeam1 + ':'+ data.goals[2].scoreTeam2 + '</div>' +
    '<div class="componentTable2"><a href="Laliga2.html" style="color: black;">'+ data.team2.teamName +'</a>' +
    '<div class="wappenMatch"><img src="'+ data.team2.teamIconUrl +'" alt="" height="60px" width="60px"></div>' +
    '<div class="score">' + data.goals[1].goalGetterName +','+ data.goals[1].matchMinute +','+ data.goals[2].matchMinute +''
    '</div>' +
     '</div>' +
    '</div>'
    
   

  

   
    console.log(output)

    document.getElementById("games").innerHTML = output;
}

loadGames();