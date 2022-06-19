const enroll = document.getElementById("endroll_button");
enroll.addEventListener("click", endrolledStudentDetails);

const clear = document.getElementById("clear_button");
clear.addEventListener("click", cleardata);

var row = 1;
function endrolledStudentDetails(e) {
  let name = document.getElementById("studentname").value;
  const email = document.getElementById("studentemail").value;
  const website = document.getElementById("studentwebsite").value;
  const college = document.getElementById("studentcollege").value;
  const gendermale = document.getElementById("studentgendermale");
  const genderfemale = document.getElementById("studentgenderfemale");
  const skills = document.getElementById("skills");

  if (!name || !email || !website || !college) {
    alert("please fill all details");
    return;
  }
  const dispaly = document.getElementById("details_table");
  const newrow = dispaly.insertRow(row);
  const cell1 = newrow.insertCell(0);
  const cell2 = newrow.insertCell(1);

  if (gendermale.checked == true) {
    genderfemale.checked = false;
    var genderval = gendermale.value;
  } else if (genderfemale.checked == true) {
    gendermale.checked = false;
    var genderval = genderfemale.value;
  } else {
    alert("please select gender and skils");
  }
  let skillvalues = [];
  let checkBox = document.getElementById("skills").elements;
  for (let i = 0; i < checkBox.length; i++) {
    let currentCheckBoxId = checkBox[i].id;
    if (
      document.getElementById(currentCheckBoxId) &&
      document.getElementById(currentCheckBoxId).checked
    ) {
      skillvalues.push(document.getElementById(currentCheckBoxId).value);
    }
  }
  cell1.innerHTML =
    "<b>" +
    name +
    "<b><br>" +
    "<b>" +
    email +
    "<b><br>" +
    website +
    "<b><br>" +
    college +
    "<b><br>" +
    genderval +
    "<b><br>" +
    skillvalues.join() +
    "<b><br>";
  cell2.innerHTML = "<img src=user.jpg width='140px' height='120px'>";

  document.getElementById("studentname").value = "";
  document.getElementById("studentemail").value = "";
  document.getElementById("studentwebsite").value = "";
  document.getElementById("studentcollege").value = "";
  document.getElementById("studentgendermale").checked = false;
  document.getElementById("studentgenderfemale").checked = false;
  document.getElementById("skilljava").checked = false;
  document.getElementById("skill.net").checked = false;
  document.getElementById("skillpython").checked = false;
}
function cleardata() {
  document.getElementById("studentname").value = "";
  document.getElementById("studentemail").value = "";
  document.getElementById("studentwebsite").value = "";
  document.getElementById("studentcollege").value = "";
  document.getElementById("studentgendermale").checked = false;
  document.getElementById("studentgenderfemale").checked = false;
  document.getElementById("skilljava").checked = false;
  document.getElementById("skill.net").checked = false;
  document.getElementById("skillpython").checked = false;
}
