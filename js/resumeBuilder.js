var name = "JL Scott";
var role = "iOS Developer";

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
	"pictureURL" : "images/jls.jpg"
};

var work = {
	"jobs" : [
		{
			"employer" : "",
			"title" : "",
			"location" : "",
			"dates" : "",
			"description" : ""
		},
		{
			"employer" : "Binghamton University (SUNY)",
			"title" : "IT Specialist",
			"location" : "Binghamton, NY",
			"dates" : "November 2000 - Present"
			"description" : "Was good, Now Sucks"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "",
			"dates" : "",
			"description" : "",
			"images" : ["", "", "", ""]
		},
		{
			"title" : "",
			"dates" : "",
			"description" : "",
			"images" : ["", "", "", ""]
		},
	]
}

var education = {
	"schools" : [
		{
			"name" : "",
			"location" : "",
			"degree" : "",
			"majors" : ["", "", ""],
			"dates" : "",
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
	]
}

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

console.log(work["position"]);
console.log(education.schoolName);

var formattedWorkExperience = HTMLworkEmployer.replace("%data%", work.employer);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schoolName)

$("#workExperience").append(formattedWorkExperience);
$("#education").append(formattedSchoolName);