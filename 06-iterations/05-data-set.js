var acmeCo = [
    { name: "Charde Marshall", position: "Regional Director", city: "San Francisco", dateJoined: "2008/10/16", salary: 470600, sex: "F", seniority: "management" },
    { name: "Paul Byrd", position: "Chief Financial Officer (CFO)", city: "New York", dateJoined: "2010/06/09", salary: 725000, sex: "M", seniority: "management" },
    { name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", city: "London", dateJoined: "2009/10/09", salary: 1200000, sex: "F", seniority: "management" }, 
    { name: "Tiger Nixon", position: "System Architect", city: "Edinburgh", dateJoined: "2011/04/25", salary: 320800, sex: "M", seniority: "senior" }, 
    { name: "Cedric Kelly", position: "Senior Javascript Developer", city: "Edinburgh", dateJoined: "2012/03/29", salary: 433060, sex: "M", seniority: "senior" },
    { name: "Haley Kennedy", position: "Senior Marketing Designer", city: "London", dateJoined: "2012/12/18", salary: 313500, sex: "F", seniority: "senior" },
    { name: "Brielle Williamson", position: "Integration Specialist", city: "New York", dateJoined: "2012/12/02", salary: 372000, sex: "F", seniority: "junior" },
    { name: "Garrett Winters", position: "Accountant", city: "Tokyo", dateJoined: "2011/07/25", salary: 170750, sex: "M", seniority: "junior" },
    { name: "Ashton Cox", position: "Junior Technical Author", city: "San Francisco", dateJoined: "2009/01/12", salary: 86000, sex: "M", seniority: "junior" },
    { name: "Airi Satou", position: "Accountant", city: "Tokyo", dateJoined: "2008/11/28", salary: 162700, sex: "F", seniority: "junior" },
    { name: "Michael Silva", position: "Marketing Designer", city: "London", dateJoined: "2012/11/27", salary: 198500, sex: "M", seniority: "junior" },
    { name: "Gloria Little", position: "Systems Administrator", city: "New York", dateJoined: "2009/04/10", salary: 237500, sex: "F", seniority: "junior" },
    { name: "Colleen Hurst", position: "Javascript Developer", city: "San Francisco", dateJoined: "2009/09/15", salary: 205500, sex: "F", seniority: "assistant" },
    { name: "Herrod Chandler", position: "Sales Assistant", city: "San Francisco", dateJoined: "2012/08/06", salary: 137500, sex: "M", seniority: "assistant" }, 
    { name: "Sonya Frost", position: "Software Engineer", city: "Edinburgh", dateJoined: "2008/12/13", salary: 103600, sex: "F", seniority: "assistant" },
    { name: "Jena Gaines", position: "Office Manager", city: "London", dateJoined: "2008/12/19", salary: 90560, sex: "F", seniority: "assistant" },
    { name: "Michelle House", position: "Integration Specialist", city: "Sydney", dateJoined: "2011/06/02", salary: 95400, sex: "F", seniority: "assistant" },
    { name: "Doris Wilder", position: "Sales Assistant", city: "Sydney", dateJoined: "2010/09/20", salary: 85600, sex: "F", seniority: "assistant" },
    { name: "Shou Itou", position: "Regional Marketing", city: "Tokyo", dateJoined: "2011/08/14", salary: 163000, sex: "M", seniority: "junior" },
    { name: "Gavin Joyce", position: "Developer", city: "Edinburgh", dateJoined: "2010/12/22", salary: 92575, sex: "M", seniority: "junior" },
    { name: "Brenden Wagner", position: "Software Engineer", city: "San Francisco", dateJoined: "2011/06/07", salary: 206850, sex: "M", seniority: "junior" },
    { name: "Yuri Berry", position: "Chief Marketing Officer (CMO)", city: "New York", dateJoined: "2009/06/25", salary: 675000, sex: "M", seniority: "management" },
    { name: "Gavin Cortez", position: "Team Leader", city: "San Francisco", dateJoined: "2008/10/26", salary: 235500, sex: "M", seniority: "senior" }, 
    { name: "Martena Mccray", position: "Post-Sales support", city: "Edinburgh", dateJoined: "2011/03/09", salary: 324050, sex: "F", seniority: "senior" },
    { name: "Fiona Green", position: "Chief Operating Officer (COO)", city: "San Francisco", dateJoined: "2010/03/11", salary: 850000, sex: "F", seniority: "management" },
    { name: "Unity Butler", position: "Marketing Designer", city: "San Francisco", dateJoined: "2009/12/09", salary: 85675, sex: "F", seniority: "assistant" },
    { name: "Tatyana Fitzpatrick", position: "Regional Director", city: "London", dateJoined: "2010/03/17", salary: 385750, sex: "F", seniority: "management" },
    { name: "Gavin Joyce", position: "Developer", city: "Edinburgh", dateJoined: "2010/12/22", salary: 92575, sex: "M", seniority: "junior" },
    { name: "Jena Gaines", position: "Office Manager", city: "London", dateJoined: "2008/12/19", salary: 90560, sex: "F", seniority: "assistant" }
  ];

// Filter all in management
let theManagement = [];

acmeCo.forEach(person => {
    if (person.seniority == 'management') {
        console.log(person.name);
        theManagement.push({name: person.name});
    }
})

console.log("The management")
console.log(theManagement);
console.log("");

// map names and salaries

let lowEarners = acmeCo.map( person => {
    return {name: person.name, salary: person.salary};
}).filter( person => person.salary < 100000);

console.log("Mapping of low earners")
console.log(lowEarners);
console.log("");

// total salary

let totalSalary = acmeCo.reduce((accumulative, employee) => 
    accumulative + employee.salary, 0
);

let total = 0;

acmeCo.forEach(person => {
    total = total + person.salary;
});

console.log("Total Salary")
console.log(totalSalary);
console.log(total);
console.log("");

// Names with salary > $200.000

let moreThan200 = acmeCo.map (person => {
    return {name: person.name, position: person.position, salary: person.salary};
}).filter( person => person.salary >= 600000);

console.log("More than 200K")
console.log(moreThan200);
console.log("");


// name and sex of all assistants

let theAssistants = acmeCo.map (person => {
    return {name: person.name, seniority: person.seniority, sex: person.sex};
}).filter( person => person.seniority == 'assistant' );

console.log("Assistantinfo");
console.log(theAssistants);
console.log("");






// Name, position and sex of all the assistants