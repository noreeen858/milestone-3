var form = document.getElementById('resumeform');
var resumeOutput = document.getElementById('resumeoutput');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevent the form from submitting
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone number').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('Skills').value;
    var address = document.getElementById('address').value;
    // Handle profile picture.value
    var profilePictureInput = document.getElementById('profilepicture');
    var file = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureUrl = '';
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePictureUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            displayResume();
        };
        reader.readAsDataURL(file);
    }
    else {
        displayResume();
    }
    // Function to display the resume
    function displayResume() {
        resumeOutput.innerHTML = "\n            <h2> Resume</h2>\n            <img src=\"".concat(profilePictureUrl, "\" alt=\"Profile Picture\" style=\"width: 100px; height: 100px; border-radius: 50%;\" />\n            <p><strong>name:</strong>").concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n     <p><strong>address:</strong>").concat(address, "</p>\n\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
    }
});
