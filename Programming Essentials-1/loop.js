var password="wordpass";
var response;
var entryCount=0;
var enrtyLimit=3;
var error=false;

while(response!=password && !error){
    if(entryCount < enrtyLimit){
        response=window.prompt("Enter Password");
        entryCount++;
}else {
    error=true;
    }
}
if(error){
    alert("Too many Entries");
}else{
    alert("You got it");
}
