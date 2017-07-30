(function ($) {
  /*Missing Letters
  Find the missing letter in the passed letter range and return it.
  If all letters are present in the range, return undefined.
  */
  function fearNotLetter(str) {
    var missingLetter = "undefined";
    var nextChar = String.charCodeAt(str[0]);
    for(var i=0; i<str.length;i++){
      var strSubStart = String.charCodeAt(str[i]);
      if(strSubStart==nextChar){
        console.log("matching letter");
      } else {
        missingLetter = String.fromCharCode(nextChar);
      }
      nextChar = strSubStart+1;
    }
    return missingLetter;
  }

  $('#missingLetters').click(function(){
    var abce = fearNotLetter("abce");
    var abcdefghjklmno = fearNotLetter("abcdefghjklmno");
    console.log(abce);
    $('#abceOutput').append("<p>Should return 'd' Return: " + abce + "<p>");
    $('#abcdefghjklmnoOutput').append("<p>Should return 'i' Return: " + abcdefghjklmno + "<p>");
  })
  //END MISSING letters


      /* Boo Who
      Check if a value is classified as a boolean primitive. Return true or false.
  Boolean primitives are true and false.*/
function booWho(bool){
  var isIt;
   if(bool===true || bool===false){
     isIt = true;
   } else {
     isIt = false;
   }
   return isIt;
}

$('#booWho').click(function(){
  var testTrue = booWho(true);
  var testArray = booWho([1,2,3]);
  $('#booWhoOutput').append("<p>Should return 'true' Return: " + testTrue + "<p>");
  $('#booWhoOutput').append("<p>Should return 'false' Return: " + testArray + "<p>");
})
  // END BOO WHO

/* BEGIN Sorted Union
Write a function that takes two or more arrays and returns a new array of unique
values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their
original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array
should not be sorted in numerical order.
*/
function uniteUnique(arr) {
  var newArr = [];
  for(var i=0; i<arguments.length; i++){
    for(var a=0; a<arguments[i].length; a++){
      if(newArr.indexOf(arguments[i][a])==-1){
        newArr.push(arguments[i][a]);
      }
    }
  }
  return newArr;
}

$('#sortedUnion').click(function(){
  var test = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  $('#sortedUnionOutput').append("<p>Should return [1,3,2,5,4] Return: " + test + "<p>");
})


// END SORTED UNION

}(jQuery));
