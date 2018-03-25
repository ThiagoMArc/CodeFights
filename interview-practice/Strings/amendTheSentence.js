function amendTheSentence(s) {

    var regex = /([A-Z])/g;
    
    return s.replace(regex,' $1').toLowerCase().trim();
        
}
