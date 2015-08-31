var bio = {
	"name" : "JL Scott",
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
	"display" : function() {
		var formattedName = HTMLheaderName.replace("%data%", this.name);
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		var formattedBioPic = HTMLbioPic.replace("%data%", this.pictureURL);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBioPic);

		var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);

		if(this.skills.length > 0) {
			var formattedSkills;
			$("#header").append(HTMLskillsStart);
			for(skill in this.skills) {
				formattedSkills = HTMLskills.replace("%data%", this.skills[skill]);
				$("#skills").append(formattedSkills);
			}
		}
	}
};

var work = {
	"jobs" : [
		// {
		// 	"employer" : "",
		// 	"title" : "",
		// 	"location" : "",
		// 	"dates" : "",
		// 	"description" : ""
		// },
		{
			"employer" : "Binghamton University (SUNY)",
			"title" : "IT Specialist",
			"location" : "Binghamton, NY",
			"dates" : "November 2000 - Present",
			"description" : "Was good, Now Sucks"
		},
		{
			"employer" : "The Haworth Press",
			"title" : "Internet Promotions Coordinator",
			"location" : "Binghamton, NY",
			"dates" : "January 1997 - August 2000",
			"description" : "Handle online book and journal promotions for academic publisher"
		},
		{
			"employer" : "Artistic Greetings, Inc.",
			"title" : "Computer Operator",
			"location" : "Elmira, NY",
			"dates" : "March 1994 - December 1996",
			"description" : "Operations staff"
		}
	],
	"display" : function() {
		if(this.jobs.length > 0) {
			for(job in this.jobs) {
				$("#workExperience").append(HTMLworkStart);
				var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
				var formattedWorkTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
				var formattedEmployerTitle = formattedWorkEmployer+formattedWorkTitle;
				var formattedWorkLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
				var formattedWorkDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
				var formattedWorkDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);

				$(".work-entry:last").append(formattedEmployerTitle);
				$(".work-entry:last").append(formattedWorkLocation);
				$(".work-entry:last").append(formattedWorkDates);
				$(".work-entry:last").append(formattedWorkDescription);
			}
		}
	}
}

var projects = {
	"projects" : [
		// {
		// 	"title" : "",
		// 	"dates" : "",
		// 	"description" : "",
		// 	"images" : ["", "", "", ""]
		// },
		{
			"title" : "About Me",
			"dates" : "August 14, 2015",
			"description" : "Introductory project, Udacity Front End Developer Nanodegree Program",
			"images" : ["images/proj0-lg.jpg", "images/proj2-lg.jpg"]
		},
		{
			"title" : "Online Portfolio",
			"dates" : "August 25, 2015",
			"description" : "Personal Portfolio Project, Udacity Front End Developer Nanodegree Program",
			"images" : ["images/proj1-lg.jpg", "images/proj2-lg.jpg"]
		}
	],
	"display" : function() {
		if(this.projects.length > 0) {
			for(project in this.projects) {
				$("#projects").append(HTMLprojectStart);
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
				var formattedProjectDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
				var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);

				$(".project-entry:last").append(formattedProjectTitle);
				$(".project-entry:last").append(formattedProjectDates);
				$(".project-entry:last").append(formattedProjectDescription);

				if(this.projects[project].images.length > 0) {
					for(image in this.projects[project].images) {
						var formattedProjectImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
						$(".project-entry:last").append(formattedProjectImage);
					}
				}
			}
		}
	}
}

var education = {
	"schools" : [
		// {
		// 	"name" : "",
		// 	"location" : "",
		// 	"degree" : "",
		// 	"majors" : ["", "", ""],
		// 	"dates" : "",
		// 	"url" : "",
		// 	"onlineCourses" : [
		// 		{
		// 			"title" : "",
		// 			"school" : "",
		// 			"dates" : "",
		// 			"url" : ""
		// 		}
		// 	]
		// },
		{
			"name" : "SUNY Albany",
			"location" : "Albany, NY",
			"degree" : "",
			"majors" : ["", "", ""],
			"dates" : "1984-1985",
			"url" : "",
			"onlineCourses" : [
				{
					"title" : "",
					"school" : "",
					"dates" : "",
					"url" : ""
				}
			]
		},
		{
			"name" : "Nassau Community College",
			"location" : "Uniondale, NY",
			"degree" : "",
			"majors" : ["", "", ""],
			"dates" : "1986",
			"url" : "",
			"onlineCourses" : [
				{
					"title" : "",
					"school" : "",
					"dates" : "",
					"url" : ""
				}
			]
		},
		{
			"name" : "SUNY New Paltz",
			"location" : "New Paltz, NY",
			"degree" : "",
			"majors" : ["", "", ""],
			"dates" : "1987-88",
			"url" : "",
			"onlineCourses" : [
				{
					"title" : "",
					"school" : "",
					"dates" : "",
					"url" : ""
				}
			]
		}
	],
	"display" : function() {
		if(this.schools.length > 0) {
			for(school in this.schools) {
				$("#education").append(HTMLschoolStart);
				var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[school].name);
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
				var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors);

				$(".education-entry:last").append(formattedSchoolName);
				$(".education-entry:last").append(formattedSchoolDegree);
				$(".education-entry:last").append(formattedSchoolDates);
				$(".education-entry:last").append(formattedSchoolLocation);
				$(".education-entry:last").append(formattedSchoolMajor);
			}
		}
	}
}

bio.display();
work.display();
projects.display();
education.display();

//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1];
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

function locationizer(work_obj) {
	var locations = [];
	for (job in work_obj.jobs) {
		locations.push(work_obj.jobs[job].location);
	}
	return locations;
}
