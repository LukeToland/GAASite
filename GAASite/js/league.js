$(document).ready(function() {
    $("#dropdown").change(function() {
        var selVal = $(this).val();
        $("#textboxDiv").html('');
        if(selVal > 0) {

            for(var i = 1; i<= selVal; i++) {
            
                $("#textboxDiv").append('Team '+i+': '+ '<input type="text" class="teamNames" id="textVal['+i+']" value="" /><br>');
            }
      	 $("#textboxDiv").append('<br><button type="button" id="btnSubmit" name="btnSubmit">Submit</button>');
        }
    });


});

//Button submit click -- Used because dom has already been loaded
$( document ).on( "click", "#btnSubmit", function() {

    var empty = false;

    //check if textboxes are empty
    $('.teamNames').each(function() {
           var team =  $(this).val();
           //teams.push(team);
           if(team=="")
           {
              empty = true;
           }
           id++;
    });

    //If textboxes are full 
    if(empty == false)
    {
       //Iterate through dom elements to retrieve team names
      var teams=[];
      var seasons=[];
      var id=0;
       $('.teamNames').each(function() {
             var team =  $(this).val();
             //teams.push(team);

             //Push to teams
             teams.push({"id":  id+1, "name":team});

             //Push each team to season
             seasons.push({"id:": id+1, "name":team, "points":"0"});
             //alert(id + team);
             id++;
      });

      // Put objects into storage
      localStorage.setItem('teams', JSON.stringify(teams));  
      localStorage.setItem('season', JSON.stringify(seasons));  
      runFixtures();

    }   
    else
    {
      alert("Fill all teams");
    }

} ); 

//Fixtures into local storage
function runFixtures()
{
    /* Automatically create results
     * n+1 plays n+2 
     * n+3 players n+4
     */
     homeMatches();
     awayMatches();
   
}

//Results from local storage
function homeMatches()
{
   //Get teams from local storage
   var retrievedObject = localStorage.getItem('teams');    
   var retrievedSeason = localStorage.getItem('season');    
   //Assign teams to array
   var array = JSON.parse(retrievedObject);
   var seasonArray = JSON.parse(retrievedSeason);

   var homeMatches=[];
    for(var i=0;i<array.length-1; i++) { 
        //  $('#fixtures').append(array[i].name+" - "+ array[i+1].name+"<br/>");  

        for (var j = i + 1; j < array.length; j++)
        { 
              if(array[i].name!==array[j].name)
              {
                  //Result calculation
                  var homeResult = Math.floor(Math.random() * (6 - 0)) + 1;
                  var awayResult = Math.floor(Math.random() * (6 - 0)) + 1;

                  //Add to array matches
                  homeMatches.push({"homeID":  array[i].id, "homeTeam":array[i].name, "homeResult":homeResult, "awayResult":awayResult ,"awayID":array[j].id, "awayTeam":array[j].name});

                  //Figure out who wins
                  if(homeResult > awayResult)
                  {
                      //Home team wins
                      seasonArray[i].points = (parseInt(seasonArray[i].points) || 0) + 3;
                  }
                  else if(homeResult < awayResult)
                  {
                      //Away team wins
                      seasonArray[j].points = (parseInt(seasonArray[j].points) || 0) + 3;
                  }
                  else
                  {
                      //Draw
                      seasonArray[i].points = (parseInt(seasonArray[i].points) || 0) + 1;
                      seasonArray[j].points = (parseInt(seasonArray[j].points) || 0) + 1;

                  }


                  //Show fixtures & results
                  $('#resultsTable').append('<tr><td>'+array[i].name+"</td><td> "+" v "+"</td><td> "+array[j].name+'</td></tr>');
                  //$('#fixtures').append(array[i].name+" "+homeResult+" - "+ awayResult+" "+array[j].name+"<br/>");  
              }
            
            
        }
       
       
    }

      // Put the object into storage
    localStorage.setItem('homeMatches', JSON.stringify(homeMatches));
    localStorage.setItem('season', JSON.stringify(seasonArray));
    // Retrieve the object from storage
    //var rhomeMatches = localStorage.getItem('homeMatches');

    //console.log('homeMatches: ', JSON.parse(rhomeMatches));
    //console.log(rhomeMatches.length);

}

//Results from local storage
function awayMatches(array)
{
  //Get teams from local storage
   var retrievedObject = localStorage.getItem('teams');    
   var retrievedSeason = localStorage.getItem('season');    
   //Assign teams to array
   var array = JSON.parse(retrievedObject);
   var seasonArray = JSON.parse(retrievedSeason);
      
    var awayMatches=array.reverse();
    var matches=[];
    for(var i=0;i<awayMatches.length-1; i++) { 
    

        for (var j = i + 1; j < awayMatches.length; j++)
        { 
              if(awayMatches[i].name!==awayMatches[j].name)
              {
                  //Result calculation
                  var homeResult = Math.floor(Math.random() * (6 - 0)) + 1;
                  var awayResult = Math.floor(Math.random() * (6 - 0)) + 1;


                  //Add to array matches
                  matches.push({"homeID":  awayMatches[i].id, "homeTeam":awayMatches[i].name, "homeResult":homeResult, "awayResult":awayResult ,"awayID":awayMatches[j].id, "awayTeam":awayMatches[j].name});

                  //Figure out who wins
                  if(homeResult > awayResult)
                  {
                      //Home team wins
                      seasonArray[i].points = (parseInt(seasonArray[i].points) || 0) + 3;
                  }
                  else if(homeResult < awayResult)
                  {
                      //Away team wins
                      seasonArray[j].points = (parseInt(seasonArray[j].points) || 0) + 3;
                  }
                  else
                  {
                      //Draw
                      seasonArray[i].points = (parseInt(seasonArray[i].points) || 0) + 1;
                      seasonArray[j].points = (parseInt(seasonArray[j].points) || 0) + 1;

                  }

                  //Show fixtures & results
                  //$('#fixtures').append(awayMatches[i].name+" "+homeResult+" - "+ awayResult+" "+awayMatches[j].name+"<br/>");  
                 // $('#resultsTable').append('<tr><td>'+array[i].name+" "+homeResult+" - "+ awayResult+" "+array[j].name+'</td></tr>');
                  $('#resultsTable').append('<tr><td>'+array[i].name+"</td><td> "+" v "+"</td><td> "+array[j].name+'</td></tr>');
              }
            
            
        }
       
       
    }

      // Put the object into storage
    localStorage.setItem('awayMatches', JSON.stringify(matches));
    localStorage.setItem('season', JSON.stringify(seasonArray));

    // Retrieve the object from storage
    //var rawayMatches = localStorage.getItem('awayMatches');

    //console.log('rawayMatches: ', JSON.parse(awayMatches));
    //console.log(awayMatches.length);
}



