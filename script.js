const urlString = "https://docs.google.com/gview?embedded=true&url=https://www.dhruvbadaya.in/CourseCode/Question%20Papers";

var URL = (window.location.href).replace("https://www.dhruvbadaya.in/CourseCode/Question%20Papers/","").replace("http://www.dhruvbadaya.in/CourseCode/Question%20Papers/","")
var list = URL.split("/")

const courseString = list[0]
const subjectString = list[1]

const buttonLinks = {
    "2023": `${urlString}/${courseString}/${subjectString}/2023.pdf`,
    "2022": `${urlString}/${courseString}/${subjectString}/2022.pdf`,
    // "2021": `${urlString}/${courseString}/${subjectString}/2021.pdf`,
    //  "2020": `${urlString}/${courseString}/${subjectString}/2020.pdf`,
     "2019": `${urlString}/${courseString}/${subjectString}/2019.pdf`,
     "2018": `${urlString}/${courseString}/${subjectString}/2018.pdf`,
    //  "2017": `${urlString}/${courseString}/${subjectString}/2017.pdf`,
    //  "2016": `${urlString}/${courseString}/${subjectString}/2016.pdf`,
    //  "2015": `${urlString}/${courseString}/${subjectString}/2015.pdf`,
    //  "2014": `${urlString}/${courseString}/${subjectString}/2014.pdf`,
    // Add more buttons and links here as needed
};

window.onload = () => {
updatePage();
}

function updatePage(){
        URL = (window.location.href).replace("https://www.dhruvbadaya.in/CourseCode/Question%20Papers/","").replace("http://www.dhruvbadaya.in/CourseCode/Question%20Papers/","")
   list = URL.split("/")

courseString = list[0]
subjectString = list[1]

    buttonLinks = {
    "2023": `${urlString}/${courseString}/${subjectString}/2023.pdf`,
    "2022": `${urlString}/${courseString}/${subjectString}/2022.pdf`,
    // "2021": `${urlString}/${courseString}/${subjectString}/2021.pdf`,
    //  "2020": `${urlString}/${courseString}/${subjectString}/2020.pdf`,
     "2019": `${urlString}/${courseString}/${subjectString}/2019.pdf`,
     "2018": `${urlString}/${courseString}/${subjectString}/2018.pdf`,
    //  "2017": `${urlString}/${courseString}/${subjectString}/2017.pdf`,
    //  "2016": `${urlString}/${courseString}/${subjectString}/2016.pdf`,
    //  "2015": `${urlString}/${courseString}/${subjectString}/2015.pdf`,
    //  "2014": `${urlString}/${courseString}/${subjectString}/2014.pdf`,
    // Add more buttons and links here as needed
};
}





function showLoader() {
    document.getElementById('overlay').style.display = 'block';
}

function hideLoader() {
    document.getElementById('overlay').style.display = 'none';
}



const buttonsContainer = document.getElementById('buttons-container');

// Loop through the buttonLinks object and create buttons dynamically
for (const buttonText in buttonLinks) {
    const button = document.createElement('button');
    button.textContent = buttonText;
    button.classList.add('button');
    button.addEventListener('click', () => {
        window.location.href = buttonLinks[buttonText];
         showLoader();
    // Simulate loading delay
    setTimeout(function() {
        while(true){
            updatePage();
            window.location.href = buttonLinks[buttonText];
        }
        hideLoader();
    }, 3000); // Change 3000 to your desired loading time in milliseconds
    });
    buttonsContainer.appendChild(button);
}
