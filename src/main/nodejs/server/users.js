module.exports = {
    getUsers: function(){
    var people = [];

    var name = ["Adam", "Abe", "Maria", "Rose", "Mario", "Luigi"];
    var surname = ["Lincoln", "Franklin", "Jackson", "Miyazaki", "M'bebe"];

    for (var index = 0; index<=10; index++) {
        people.push({
        "name":name[index]+ " " + surname[index],
        "disclosableInfo":"Lorem ipsum dolor sit amet, consectetur adipiscing elit," + 
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini" +
        "m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo c"+
        "onsequat."
        });
    }
    return people;
    }
}