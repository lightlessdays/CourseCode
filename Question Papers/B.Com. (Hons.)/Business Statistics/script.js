const urlString = "https://docs.google.com/gview?embedded=true&url=https://www.dhruvbadaya.in/CourseCode/Question%20Papers";
const courseString = "B.Com.%20(Hons.)"
const subjectString = "Business Statistics"

const buttonLinks = {
    "2023": `${urlString}/${courseString}/${subjectString}/2023.pdf`,
    "2022": `${urlString}/${courseString}/${subjectString}/2022.pdf`,
    "2021": `${urlString}/${courseString}/${subjectString}/2021.pdf`,
     "2020": `${urlString}/${courseString}/${subjectString}/2020.pdf`,
     "2019": `${urlString}/${courseString}/${subjectString}/2019.pdf`,
     "2018": `${urlString}/${courseString}/${subjectString}/2018.pdf`,
     "2017": `${urlString}/${courseString}/${subjectString}/2017.pdf`,
     "2016": `${urlString}/${courseString}/${subjectString}/2016.pdf`,
     "2015": `${urlString}/${courseString}/${subjectString}/2015.pdf`,
     "2014": `${urlString}/${courseString}/${subjectString}/2014.pdf`,
    // Add more buttons and links here as needed
};



const buttonsContainer = document.getElementById('buttons-container');

// Loop through the buttonLinks object and create buttons dynamically
for (const buttonText in buttonLinks) {
    const button = document.createElement('button');
    button.textContent = buttonText;
    button.classList.add('button');
    button.addEventListener('click', () => {
        window.location.href = buttonLinks[buttonText];
    });
    buttonsContainer.appendChild(button);
}
