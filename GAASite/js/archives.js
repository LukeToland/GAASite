$(document).ready(function() {

    //GHet away matches
        var retrievedObject = localStorage.getItem('homeMatches');
        //Array
        var array = JSON.parse(retrievedObject);
        if(array.length>0){

          for(var i = 0; i< array.length; i++){
              $('#resultsTable').append('<tr><td>'+array[i].homeTeam+"</td><td> "+array[i].homeResult+" - "+ array[i].awayResult+"</td><td> "+array[i].awayTeam+'</td></tr>');
          }
        }

    //Get home matches
     var retrievedObject2 = localStorage.getItem('awayMatches');
         //Array
        var array2 = JSON.parse(retrievedObject2);
         if(array2.length>0){
           for(var i = 0; i< array2.length; i++){
               $('#resultsTable').append('<tr><td>'+array2[i].homeTeam+"</td><td> "+array2[i].homeResult+" - "+ array2[i].awayResult+"</td><td> "+array2[i].awayTeam+'</td></tr>');
           }
        }
});