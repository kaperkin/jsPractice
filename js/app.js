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
if(new Boolean(bool)){
  bool = true
} else {
  bool = false
}
var test = new Boolean(bool);
return test
}

$('#booWho').click(function(){
  var testTrue = booWho(true);
  var testArray = booWho([1,2,3]);
  $('#booWhoOutput').append("<p>Should return 'true' Return: " + testTrue + "<p>");
  $('#booWhoOutput').append("<p>Should return 'false' Return: " + testArray + "<p>");
})


  // END BOO WHO

}(jQuery));
