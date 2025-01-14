const form = document.getElementById('resumeform') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeoutput') as HTMLDivElement;

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone number') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;
    const address =(document.getElementById('address') as HTMLTextAreaElement).value;

    // Handle profile picture.value
    const profilePictureInput = document.getElementById('profilepicture') as HTMLInputElement;
    const file = profilePictureInput.files?.[0];

    let profilePictureUrl = '';
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profilePictureUrl = e.target?.result as string;
            displayResume();
        };
        reader.readAsDataURL(file);
    } else {
        displayResume();
    }

    // Function to display the resume
    function displayResume() {
        resumeOutput.innerHTML = `
            <h2> Resume</h2>
            <img src="${profilePictureUrl}" alt="Profile Picture" style="width: 100px; height: 100px; border-radius: 50%;" />
            <p><strong>name:</strong>${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
     <p><strong>address:</strong>${address}</p>

            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
    }
});
