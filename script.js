"use strict";

window.addEventListener("DOMContentLoaded", loadJson);

const allStudents = [];
let studentObj = {
  firstName: "",
  lastName: "",
  middleName: "",
  mickName: "",
  photo: "",
  house: "",
};

loadJson();

function loadJson() {
  fetch("https://petlatkea.dk/2021/hogwarts/students.json")
    .then((res) => res.json())
    .then(gotData);
}

function gotData(data) {
  data.forEach(showStudent);
}

function showStudent(student) {
  console.log(student);
}
