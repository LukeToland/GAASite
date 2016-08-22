$(document).ready(function() {

        var retrievedObject = localStorage.getItem('season');
        //Array
        var array = JSON.parse(retrievedObject);
        var newArr = array.sort(dynamicSort("points"));


        if(newArr.length>0){
          for(var i = 0; i< newArr.length; i++){
              $('#table').append('<tr><td>'+(i+1)+'</td><td>'+newArr[i].name+'</td><td>'+newArr[i].points+'</td></tr>');
          }
      }

});

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (b,a) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}