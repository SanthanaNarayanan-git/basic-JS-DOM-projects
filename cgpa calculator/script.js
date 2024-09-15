const subjects = [{
    name: "Calculus and Transforms", credits: 4
},
{
    name: "Data Structures", credits: 4
},
{
    name: "Physics", credits: 3
},
{
    name: "Digital System Design", credits: 3
},
{
    name: "Communication Skills", credits: 3
},
{
    name: "Physics Laboratory", credits: 1.50
},
    /*{
        name: "Data Structures Laboratory", credits: 1.50
    }, {
        name: "IT practices Laboratory", credits: 2
    },
    {
        name: "Proffesional skill - I", credits: 1
    },
    {
        name: "Tamils and Technologies", credits: 1
    }*/
];

function getMarks() {
    const container = document.getElementById("container");
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    const subject = document.getElementById("subject");
    let count = 0;
    while (count != (subjects.length)) {
        let newSubLabel = document.createElement("p");
        newSubLabel.innerHTML = subjects[count].name;
        subject.appendChild(newSubLabel);
        let newSubInput = document.createElement("input");
        newSubInput.type = "text";
        newSubInput.id = `sub${count}`;
        newSubInput.placeholder = "Enter your grades";
        subject.appendChild(newSubInput);
        count++;
    }
    const subBtn = document.createElement("button");
    subBtn.innerHTML = "Submit";
    subject.appendChild(subBtn);
    subBtn.addEventListener('click', calculateGPA);
}
function calculateGPA() {
    let count = 0;
    let totalgrade = 0;
    let totalCredit = 0;
    let total = 0;
    while (count < subjects.length) {
        const grade = document.getElementById(`sub${count}`).value;
        const credit = subjects[count].credits;
        totalgrade += Number(grade) * credit;
        totalCredit += credit
        total = totalgrade / totalCredit;
        count++;
    }
    total = total.toFixed(2);
    const subject = document.getElementById("subject");
    const result = document.createElement("h2");
    result.innerHTML = `Your CGPA is ${total}`;
    subject.appendChild(result);

}