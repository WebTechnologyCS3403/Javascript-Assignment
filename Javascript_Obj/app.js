//Objects
person1 = {
    FirstName: "Vikas",
    LastName: "Gond",
    OfficeAddress: "Vikas Nagar Luknow,UP"
};
 person2 = {
    FirstName: "Sundar",
    LastName: "Pichai",
    OfficeAddress: "Mountain View, Silicon Valley"
};
 person3 = {
    FirstName: "Ratan",
    LastName: "Tata",
    OfficeAddress: "Tata Mesion, Mumbai"
};

document.write("<p> Name: <b>"+person1.FirstName+" "+person1.LastName+"</b> Addresss:<b>"+person1.OfficeAddress+"</b></p><br>");
document.write("<p> Name: <b>"+person2.FirstName+" "+person2.LastName+"</b> Addresss:<b>"+person2.OfficeAddress+"</b></p><br>");
document.write("<p> Name: <b>"+person3.FirstName+" "+person3.LastName+"</b> Addresss:<b>"+person3.OfficeAddress+"</b></p>");
//Function to Print Data in Console
function printPerson(){
console.log(person1);
console.log(person2);
console.log(person3);
}
printPerson();