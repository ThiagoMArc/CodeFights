function firstNotRepeatingCharacter(string) {
   
    var res = '_';
    for(var i=0; i<string.length; i++){
       var char = string.charAt(i);
       if(string.indexOf(char)== i && string.indexOf(char,i+1) == -1){
          res = char;
          break;
       }
    }
    return res;
    
 }
 