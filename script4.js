function loadGames2() {

    fetch('https://api.openligadb.de/getmatchdata/68267')
        .then(response => response.json())
        .then(json => fillGames2(json))

}

function fillGames2(data) {
    console.log(data);
    
    let output = '<div class="Matches3  " id="games3">' +
    '<div class="componentTable1">'+ data.team1.teamName +'' +
    '<div class="wappenMatch"><img src="'+ data.team1.teamIconUrl +'" alt="" height="60px" width="60px"></div>' +
    '<div class="score">' + data.goals[0].goalGetterName +','+ data.goals[0].matchMinute +','+ data.goals[1].goalGetterName +' ,'+ data.goals[1].matchMinute +' </div>' +
    '</div>' +
    '<div class="vs">'+ data.goals[3].scoreTeam1 + ':'+ data.goals[3].scoreTeam2 + '</div>' +
    '<div class="componentTable2">'+ data.team2.teamName +'' +
    '<div class="wappenMatch"><img src="'+ data.team2.teamIconUrl +'" alt="" height="60px" width="60px"></div>' +
     '<div class="score">' + data.goals[2].goalGetterName +','+ data.goals[2].matchMinute +','+ data.goals[3].goalGetterName +' ,'+ data.goals[3].matchMinute +''+
    '</div>' +
     '</div>' +
    '</div>'
    
   

  

   
    console.log(output)

    document.getElementById("games3").innerHTML += output;
}

loadGames2();