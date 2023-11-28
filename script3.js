function loadGames1() {

    fetch('https://api.openligadb.de/getmatchdata/68266')
        .then(response => response.json())
        .then(json => fillGames1(json))

}

function fillGames1(data) {
    console.log(data);
    
    let output = '<div class="Matches3" id="games2">' +
    '<div class="componentTable1">'+ data.team1.teamName +'' +
    '<div class="wappenMatch"><img src="'+ data.team1.teamIconUrl +'" alt="" height="60px" width="60px"></div>' +
    '<div class="score">' + data.goals[0].goalGetterName +','+ data.goals[0].matchMinute +','+ data.goals[2].matchMinute + ' </div>' +
    '</div>' +
    '<div class="vs">'+ data.goals[2].scoreTeam1 + ':'+ data.goals[2].scoreTeam2 + '</div>' +
    '<div class="componentTable2">'+ data.team2.teamName +'' +
    '<div class="wappenMatch"><img src="'+ data.team2.teamIconUrl +'" alt="" height="60px" width="60px"></div>' +
     '<div class="score">' + data.goals[1].goalGetterName +','+ data.goals[1].matchMinute +''+
    '</div>' +
     '</div>' +
    '</div>'
    
   

  

   
    console.log(output)

    document.getElementById("games2").innerHTML = output;
}

loadGames1();