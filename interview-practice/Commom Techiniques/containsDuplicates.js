function containsDuplicates(a) {
    
    return Array.from(new Set(a)).length !== a.length;

}
