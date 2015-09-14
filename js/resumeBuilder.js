// Biographical data / contact info / skills
var bio = {
	"name" : "James L. Scott",
	"role" : "iOS Developer",
	"welcomeMessage" : "I welcome you to this awesome resume!",
	"contacts" : {
		"mobile" : "607-759-2714",
		"email" : "jscott@jscott10.com",
		"github" : "jscott10",
		"twitter" : "@jscott10",
		"location" : "Endicott, NY"
	},
	"skills" : ["Swift", "PHP", "MySQL", "CSS", "HTML", "JavaScript"],
	"pictureURL" : "images/jls.jpg",

	// Create HTML formatted strings from bio.contacts object
	"htmlFormattedContacts" : function() {
		var formattedContacts = {
			"formattedMobile" : HTMLmobile.replace("%data%", this.contacts.mobile),
			"formattedEmail" : HTMLemail.replace("%data%", this.contacts.email),
			"formattedGithub" : HTMLgithub.replace("%data%", this.contacts.github),
			"formattedTwitter" : HTMLtwitter.replace("%data%", this.contacts.twitter),
			"formattedLocation" : HTMLlocation.replace("%data%", this.contacts.location),
		};
		return formattedContacts;
	},

	// Create HTML formatted strings from bio object
	// Create a node for the entry
	// Add formatted HTML strings to the node
	"displayHeader" : function() {
		var formattedName = HTMLheaderName.replace("%data%", this.name);
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		var formattedBioPic = HTMLbioPic.replace("%data%", this.pictureURL);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMessage);
		if(this.skills.length > 0) {
			var formattedSkills;
			// Create a new 'skills' node
			$("#header").append(HTMLskillsStart);
			// Append formatted HTML to the 'skills' node just created
			for(var skill in this.skills) {
				formattedSkills = HTMLskills.replace("%data%", this.skills[skill]);
				$("#skills").append(formattedSkills);
			}
		}
	},

	/*
	displayTopContacts() and displayFooterContacts() are implemented as 2 separate functions because they
	are updating 2 different sections of the page, and the contents of the sections might not always be the same
	(even though they are now.)

	htmlFormattedContacts is implemented as an object to allow iterating through the list in the 2 display functions.
	*/

	// Iterate through formattedContacts object and append each to #topContacts node
	"displayTopContacts" : function() {
		var formattedContacts = this.htmlFormattedContacts();
		for(var contact in formattedContacts) {
			$("#topContacts").append(formattedContacts[contact]);
		}
	},

	// Iterate through formattedContacts object and append each to #footerContacts node
	"displayFooterContacts" : function() {
		var formattedContacts = this.htmlFormattedContacts();
		for(var contact in formattedContacts) {
			$("#footerContacts").append(formattedContacts[contact]);
		}
	},

	"display" : function() {
		this.displayHeader();
		this.displayTopContacts();
		this.displayFooterContacts();
	}
};

var work = {
	"jobs" : [
		{
			"employer" : "Binghamton University (SUNY)",
			"title" : "IT Specialist",
			"location" : "Binghamton, NY",
			"dates" : "November 2013 - Present",
			"description" : "Provide technical support for university Learning Laboratory classroom, and support for related technology and services."
		},
		{
			"employer" : "Binghamton University (SUNY)",
			"title" : "Website Administrator",
			"location" : "Binghamton, NY",
			"dates" : "November 2000 - November 2013",
			"description" : "Administer and maintain university web server (Apache on Ubuntu) / database backend (MySQL, Filemaker Pro) / content for Continuing Education and Outreach department. Provide university services and desktop support for office staff in a mixed Windows/OS X environment."
		},
		{
			"employer" : "The Haworth Press",
			"title" : "Internet Promotions Coordinator",
			"location" : "Binghamton, NY",
			"dates" : "January 1997 - August 2000",
			"description" : "Create and administer all online advertising campaigns for publisher of academic books and journals. Maintain website (Microsoft FrontPage). Created online system for taking orders, subscriptions and journal sample requests."
		},
		{
			"employer" : "Artistic Greetings, Inc.",
			"title" : "Computer Operator",
			"location" : "Elmira, NY",
			"dates" : "March 1994 - December 1996",
			"description" : "Operations staff. Run reports, monitor processes. Review procedures with other staff/administrators to streamline operations."
		}
	]
};

// Display Employment section
work.display = function() {
	// Create HTML formatted strings from work object
	if(work.jobs.length > 0) {
		for(var job in work.jobs) {
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkEmployerTitle = formattedWorkEmployer+" "+formattedWorkTitle;
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedWorkDatesLocation = formattedWorkDates+formattedWorkLocation;
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			// Create a new 'work-entry' node
			$("#workExperience>section").append(HTMLworkStart);

			// Append formatted HTML to the 'work-entry' node just created
			$(".work-entry:last").append(formattedWorkEmployerTitle);
			$(".work-entry:last").append(formattedWorkDatesLocation);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}

var projects = {
	"projects" : [
		{
			"title" : "About Me",
			"dates" : "August 14, 2015",
			"description" : "Introductory project, Udacity Front End Developer Nanodegree Program",
			"images" : ["images/proj0-lg.jpg", "images/proj0a-lg.jpg", "images/proj0a-lg.jpg"]
		},
		{
			"title" : "Online Portfolio",
			"dates" : "August 25, 2015",
			"description" : "Personal Portfolio Project, Udacity Front End Developer Nanodegree Program",
			"images" : ["images/proj1-lg.jpg", "images/proj1a-lg.jpg", "images/proj1a-lg.jpg"]
		}
	]
};

// Display the Projects section
projects.display = function() {
	// Create HTML formatted strings from projects object
	if(projects.projects.length > 0) {
		var thisProject = [];
		for(var project in projects.projects) {
			thisProject = projects.projects[project];
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", thisProject.title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", thisProject.dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", thisProject.description);

			// Create a new 'project-entry' node
			$("#projects>section").append(HTMLprojectStart);

			// Append formatted HTML to the 'project-entry' node just created
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			if(thisProject.images.length > 0) {
				// Append the Bootstrap row div
				$(".project-entry:last").append(HTMLprojectImageStart);
				for(var image in thisProject.images) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%", thisProject.images[image]);
					$(".project-image-row:last").append(formattedProjectImage);
				}
			}
		}
	}
};

var education = {
	"schools" : [
		{
			"name" : "SUNY New Paltz",
			"location" : "New Paltz, NY",
			"degree" : "None",
			"majors" : ["Liberal Arts"],
			"dates" : "1987-88",
			"url" : ""
		},
		{
			"name" : "Nassau Community College",
			"location" : "Uniondale, NY",
			"degree" : "None",
			"majors" : ["Liberal Arts"],
			"dates" : "1986",
			"url" : ""
		},
		{
			"name" : "SUNY Albany",
			"location" : "Albany, NY",
			"degree" : "None",
			"majors" : ["Physics"],
			"dates" : "1984-1985",
			"url" : ""
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "July 2015-",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

// Display educations section
education.display = function() {
	// Create HTML formatted strings from schools object
	if(education.schools.length > 0) {
		var thisSchool = [];
		for(var school in education.schools) {
			thisSchool = education.schools[school];
			var formattedSchoolName = HTMLschoolName.replace("%data%", thisSchool.name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", thisSchool.degree);
			var formattedSchoolNameDegree = formattedSchoolName+" "+formattedSchoolDegree;
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", thisSchool.dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", thisSchool.location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", thisSchool.majors);

			// Create a new 'education-entry' node
			$("#education>section").append(HTMLschoolStart);

			// Append formatted HTML to the 'education-entry' node just created
			$(".education-entry:last").append(formattedSchoolNameDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}
	// Create HTML formatted strings from schools object
	if(education.onlineCourses.length > 0) {
		$("#education>section").append(HTMLonlineClasses);
		var thisCourse = [];
		for(var course in education.onlineCourses) {
			thisCourse = education.onlineCourses[course];
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", thisCourse.title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", thisCourse.school);
			var formattedOnlineTitleSchool = formattedOnlineTitle + " " + formattedOnlineSchool;
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", thisCourse.dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", thisCourse.url);

			// Create a new 'education-entry' node
			$("#education>section").append(HTMLschoolStart);

			// Append formatted HTML to the 'education-entry' node just created
			$(".education-entry:last").append(formattedOnlineTitleSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
}

function displayMap(gMap) {
	$("#mapSection").append(gMap);
}

// Functions can be called in any order, per specification
displayMap(googleMap);
education.display();
projects.display();
work.display();
bio.display();


// Not needed for project
// $("#main").append(internationalizeButton);

/*function inName(name) {
	name = name.trim().split(" ");
	name[2] = name[2];
	name[1] = name[1];
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	console.log(name[0]);
	console.log(name[1]);
	console.log(name[2]);

	return name[0] + " " + name[1] + " " + name[2];
}
*/
function locationizer(work_obj) {
	var locations = [];
	for (var job in work_obj.jobs) {
		locations.push(work_obj.jobs[job].location);
	}
	return locations;
}
