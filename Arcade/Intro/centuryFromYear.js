function centuryFromYear(year) {
    if(year%100 === 0){
       return Math.floor(year/100);
    }
    else{
       return Math.floor((year/100)+1);
    }
 }
 