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
const eventName = [
    "Apathesis",
    "Apocalypso",
    "Aria Safari",
    "Arise and Shinola",
    "Aromastotle",
    "Ass Texas",
    "Attila the Humm",
    "Aurora Tori Spelling",
    "Away we golf",
    "Bali Who",
    "Basking Bingo",
    "Beauteous Maximus",
    "Bébé Boom",
    "Bella Outdoors",
    "Below the Beltway",
    "Bible Quest",
    "Blog a Thong",
    "Book Bound",
    "Book Trials",
    "Bora Bora Boar Hunt",
    "Boston Fantastic",
    "Bowels and Whistles",
    "Brand Royalty",
    "Break a Peg Leg",
    "Bring Pluto Back!",
    "Buzzplosion",
    "Cabbage Training",
    "CactiDance",
    "Call it Green",
    "Camp Grandmada",
    "Campxotica",
    "Candidate For a Day",
    "Candle Opera",
    "Candlelight Virgil",
    "Candy Candy!",
    "Centigrand",
    "Chapter Elvis",
    "Cheering Larry",
    "Chewing Guam",
    "Chillennium",
    "Chiropractic Sojourn",
    "Christmas PeaceFest ",
    "Christmas Together",
    "Circuitship",
    "CircusRodeo",
    "Citroën to the Boën",
    "Club Hell Yea",
    "Coffee Dreamtime",
    "Coffee Rodeo",
    "Coffee RoundUp",
    "Coffee Tsunami"]
function testDataJSON() {
    let eventJSON = {
        eventAmount: Math.floor(Math.random() * 1000) + 300,
        eventCategory: eventCategory[Math.floor(Math.random() * eventCategory.length)],
        eventDescription: lorem.generateSentences(5),
        eventEndDate: "2019-" + (Math.floor(Math.random() * 12) + 1) + "-" + (Math.floor(Math.random() * 12) + 2),
        eventEndTime: (Math.floor(Math.random() * 12) + 1) + ":" + (Math.floor(Math.random() * 12) + 10),
        eventName: eventName[Math.floor(Math.random() * eventName.length)],
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