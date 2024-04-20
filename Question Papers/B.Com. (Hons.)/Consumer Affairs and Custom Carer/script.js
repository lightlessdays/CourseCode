const buttonLinks = {
    "2010": "2010.pdf",
    "2011": "2011.pdf",
    "2012": "2012.pdf",
    "2013": "2013.pdf",
    "2014": "2014.pdf",
    "2015": "2015.pdf",
    "2016": "2016.pdf",
    "2017": "2017.pdf",
    "2018": "2018.pdf",
    "2019": "2019.pdf",
    "2020": "2020.pdf",
    "2021": "2021.pdf",
    "2022": "2022.pdf",
    "2023": "2023.pdf"
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
