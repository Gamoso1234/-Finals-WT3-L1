const users = {
  "Department Head": "SiEsD3ptH34d",
  "Faculty": "SiEsF4cu1ty",
  "Student Officer": "#CCSOAko",
  "Student": "3SapatNa!"
};

function checkUserAccess() {
  const role = prompt("Enter your role:");
  const password = prompt("Enter your password:");

  if (users.hasOwnProperty(role)) {
    if (users[role] === password) {
      console.log(`Welcome, ${role}!`);
    } else {
      console.error("Invalid password. Please try again.");
    }
  } else {
    console.warn("Invalid role. Please try again.");
  }
}

checkUserAccess();