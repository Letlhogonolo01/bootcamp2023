window.onload = function () {

  //  The code bellow is for the dev skills, tools and languages
  let devSkills = new Array(
    { img: "assets/icons/html-5.png", name: "<b>HTML", level: "<b>4" },
    { img: "assets/icons/css3.png", name: "<b>CSS", level: "<b>3" },
    { img: "assets/icons/javascript.png", name: "<b>JAVASCRIPT", level: "<b>2" },
    { img: "assets/icons/angular.png", name: "<b>ANGULAR", level: "<b>3" },
    { img: "assets/icons/ionic.png", name: "<b>IONIC", level: "<b>3" },
    { img: "assets/icons/bootstrap.png", name: "<b>BOOTSTRAP", level: "<b>4" },
    { img: "assets/icons/figma.png", name: "<b>FIGMA", level: "<b>3" },
    { img: "assets/icons/git.png", name: "<b>GIT", level: "<b>4" }
  );

  let listUl = "<div style='width:250px'>";
  for (let i = 0; i < devSkills.length; i++) {
    console.log(devSkills[i].name);
    listUl +=
      "<table style='width: 100%; margin: 8px;'><tr><td rowspan='3' style='width:150px'><img src='" +
      devSkills[i].img +
      "' alt='' style='width: 100px; height: 100px; object-fit: cover;' />" +
      "</td></tr> <tr><td>name: " +
      devSkills[i].name +
      "</td></tr> <tr><td>level: " +
      devSkills[i].level +
      "</td></tr></table><br>";
  }
  listUl += "</div>";
  document.getElementById("devSkills").innerHTML = listUl;


  //  The code bellow is for the contact form
  var form = document.getElementById("my-form");

  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset();
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              status.innerHTML = data["errors"]
                .map((error) => error["message"])
                .join(", ");
            } else {
              status.innerHTML =
                "Oops! There was a problem submitting your form";
            }
          });
        }
      })
      .catch((error) => {
        status.innerHTML = "Oops! There was a problem submitting your form";
      });
  }
  form.addEventListener("submit", handleSubmit);

  // // The array below is for the address on the footer
  // var address = ["Braamfischerville", "Roodepoort", "1872"];
  // document.getElementById('card-text-location').innerHTML =
  // "Braamfischerville" + ", <br>" + "Roodepoort" + ", <br>" + "1872";

  // document.body.innerHTML = new Date();
  // console.log('hello world')
};
