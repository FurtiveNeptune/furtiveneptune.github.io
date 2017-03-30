var bio = {
  "name": "Sean O'Dell",
  "role": "Web Developer",

  "contacts": {
    "mobile": "678.662.8219",
    "email": "amsean.odell@gmail.com",
    "linkedIn": "Sean O'Dell",
    "github": "FurtiveNeptune",
    "location": "Atlanta, Georgia"
  },
  "bioPic": "images/ne.jpg",
  "welcomeMessage": "I'm currently an intern in Atlanta. Methods of contact above.",
  "skills": ['HTML/CSS', 'JavaScript', 'React', 'Redux', 'Java']
};

var work = {
  "jobs": [
    {
      "employer": "ThingTech",
      "title": "Junior Developer Intern",
      "location": "Atlanta, Georgia, United States",
      "datesWorked": "August 2016 - Present",
      "description": "Develop stuff using computers and stuff."
    },
    {
      "employer": "Graham Spray Equipment",
      "title": "Installation Technician",
      "location": "Douglasville, Georgia, United States",
      "datesWorked": "February 2015 - August 2016",
      "description": "Install and repair spray trucks and units, as well as manage staff."
    },
    {
      "employer": "Todd Vanvekoven",
      "title": "Audio/Visual Technician",
      "location": "Greater Atlanta Area, United States",
      "datesWorked": "2013 - 2014",
      "description": "Install speakers, power boxes, touch screens, and projecters in classrooms for schools across the Atlanta area."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Weather App",
      "datesWorked":  "August 2016",
      "description": "A simple intro to React.",
      "images": ["images/weather.png"],
      "url": "www.google.com"
    },
    {
      "title": "Mockup to Article",
      "datesWorked": "March 2016",
      "description": "Change the existing website to be more responsive and have a clean layout.",
      "images": ["images/mockup.png"],
      "url": "www.google.com"
    }
    // {
    //   "title": "Animal Card",
    //   "datesWorked": "February 2016",
    //   "description": "Build a basic website about your favorite animal.",
    //   "images": ["images/animal.png"],
    //   "url": "www.google.com"
    // }
  ]
};

var education = {
  "schools": [
    {
      "name": "Alexander High School",
      "datesAttended": "August 2010 - May 2014",
      "location": "Douglasville, Georgia, United States",
      "degree": "High School Diploma",
      "major": "It was high school...",
      "url": "www.google.com"
    }
  ],
  "onlineCourses": [
    {
      "school": "Udacity",
      "title": "Front-End Web Developer Course",
      "completed": "November 2016",
      "url": "https://www.udacity.com/"
    },
    {
      "school": "Udemy",
      "title": "Intro to React",
      "completed": "September 2016",
      "url": "www.udemy.com"
    },
    {
      "school": "Udacity",
      "title": "Intro to Javascript",
      "completed": "May 2016",
      "url": "https://www.udacity.com/"
    },
    {
      "school": "Udacity",
      "title": "Intro to HTML and CSS",
      "completed": "March 2016",
      "url": "https://www.udacity.com/"
    }
  ]
};

//Bio
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedContactInfo = [];

formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  for(var i in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  }
}

for(var i in formattedContactInfo) {
  $("#topContacts").append(formattedContactInfo[i]);
  $("#footerContacts").append(formattedContactInfo[i]);
}

//Work

function displayWork() {

  if(work.jobs.length > 0) {

    $("#workExperience").append(HTMLworkStart);

    for(var i in work.jobs) {

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
      var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

      $(".work-entry:last").append(formattedEmployerWorkTitle);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedDatesWorked);
      $(".work-entry:last").append(formattedWorkDescription);
    }
  }
}

displayWork();

//Projects

projects.display = function() {

  if(projects.projects.length > 0) {

    for(var i in projects.projects) {

      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

      for(var img in projects.projects[i].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
};

projects.display();

//Education

education.display = function() {

  if(education.schools.length > 0 || education.onlineCourses.length > 0) {

    for(var i in education.schools) {

      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);

    }

    if(education.onlineCourses.length > 0) {

      $("#education").append(HTMLonlineClasses);

      for(i in education.onlineCourses) {

        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
      }
    }
  }
};

education.display();

$("#mapDiv").append(googleMap);
