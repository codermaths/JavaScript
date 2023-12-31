var names = ["Usman", "Nana", "Fatima"];

for(var n of names) {
    console.log(n);
}
console.log("____________________________");

names.forEach(function(n, index) {
    console.log(index + " - " + n);
});