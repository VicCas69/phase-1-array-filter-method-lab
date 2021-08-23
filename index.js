function findMatching(collection, argument){
    return collection.filter(function(name){return name.toLowerCase()===argument.toLowerCase()});   
}

function fuzzyMatch(collection,letter){
    return collection.filter(function(startsWith){return startsWith.startsWith(letter)})
}

function matchName(collection,str){    
    return collection.filter(function(arg){return arg.name === str})
}