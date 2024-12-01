'use strict';
const students = [
  {
    name: 'Ali',
    id: '1287298',
  },
  {
    name: 'Saleem',
    id: '876532',
  },
  {
    name: 'Abdullah',
    id: '123456',
  },
];




const student = document.getElementById("helloworld")

for (let i = 0; i < students.length; i++) {

  const school = document.createElement("option")
  school.value = students[i].id
  school.textContent = students[i].name;
  student.appendChild(school);

}