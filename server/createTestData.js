// import LoremIpsum from 'lorem-ipsum';
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const fetch = require("node-fetch");

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

const eventCategory = ["Cultural Fest", "Workshop", "Summit"];
const eventOrganisation = ["Amazon", "Samsung", "Google", "Sapient"];

function testDataJSON() {
    let eventJSON = {
        eventAmount: Math.floor(Math.random() * 1000) + 300,
        eventCategory: eventCategory[Math.floor(Math.random() * eventCategory.length)],
        eventDescription: lorem.generateSentences(5),
        eventEndDate: "2019-" + (Math.floor(Math.random() * 12) + 1) + "-" + (Math.floor(Math.random() * 12) + 2),
        eventEndTime: (Math.floor(Math.random() * 12) + 1) + ":" + (Math.floor(Math.random() * 12) + 10),
        eventName: lorem.generateWords(2),
        eventOrganisation: eventOrganisation[Math.floor(Math.random() * eventOrganisation.length)],
        eventStartDate: "2019-" + (Math.floor(Math.random() * 12) + 1) + "-" + (Math.floor(Math.random() * 12) + 2),
        eventStartTime: (Math.floor(Math.random() * 12) + 1) + ":" + (Math.floor(Math.random() * 12) + 10),
        eventStatusCode: "Registered",
        eventVenue: lorem.generateWords(3),
    }

    let json = JSON.stringify(eventJSON);

    fetch('http://localhost:3001/addNewEvent', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: json
    })
    console.log(eventJSON);
}

for (let i = 0; i < 20; i++) {
    testDataJSON();
}