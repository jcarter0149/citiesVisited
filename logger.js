const cityDatabase = {}

cityDatabase.cities = []

cityDatabase.cities.push(
    {
        name: "Lexington, KY",
        year: 2018,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Lexington_Downtown_Area_Panorama.jpg/1280px-Lexington_Downtown_Area_Panorama.jpg",
        topFive:"Kentucky Horse Park, Ashland, Keeneland, Waveland State Historic Site, Mary Todd Lincoln House",
        continent: "North America"
        
    },
    {
        name: "Erbil, Iraq",
        year: 2017,
        image: "https://goo.gl/zMW4KA",
        topFive: "Kuedish Textile Museum, Syriac Heritage Museum, Erbil Gem Museum, Citadel of Erbil, Qalat",
        continent: "Asia"
    },
    {
        name: "Fayetteville, NC",
        year: 2016,
        image: "https://goo.gl/ddLAVR",
        topFive: "Cape Fear Botanical Garden, Fantasy Lake Waterpark, Airborne & Special Operations Museum, John F. Kennedy Special Warefare Museum, Cape Fear River Trail",
        continent: "North America"
    },
    {
        name: "Columbia, SC",
        year: 2015,
        image: "https://goo.gl/VMWjDd",
        topFive: "Congaree National Park, Riverbanks Zoo, EdVenture, South Carolina State Museum, Dreher Island State Park",
        continent: "North America",
    },
    {
        name: "Zarqa, Jordan",
        year: 2015,
        image: "https://goo.gl/kiLmgS",
        topFive: "Petra, Jerash, Dead Sea, Amman, Aqaba",
        continent:"Asia"
    },
    {
        name: "Kuwait City, Kuwait",
        year: 2015,
        image: "https://goo.gl/efKqSE",
        topFive: "Kuwait Towers, Grand Mosque, Souq al Mubarakeya, Kuwait Zoo, Kuwait National Museum", 
        continent: "Asia"        
    },
    {
        name: "Seattle, WA",
        year: 2013,
        image: "https://goo.gl/oGmZ6w",
        topFive: "Space Needle, Pike Place Market, Puget Sound, Chihuly Garden and Glass, Museum of Pop Culture",
        continent: "North America",
    },
    {
        name: "Tacoma, WA",
        year: 2013,
        image: "https://goo.gl/1Wsab7",
        topFive: "Mount Rainier National Park, Puget Sound, Point Defiance Zoo & Aquarium, Point Defiance Park, Museum of Glass",
        continent: "North America"
    },
    {
        name: "Kansas City, Missouri",
        year: 2018,
        image: "https://goo.gl/4fdvoZ",
        topFive: "Nelson-Atkins Museum of Art, Worlds of Fun, Kansas City Zoo, Science City at Union Station, Union Station Kansas City",
        continent: "North America"
    },
    {
        name: "Portland, OR",
        year: 2013,
        image: "https://goo.gl/BKW4fy",
        topFive: "Lewis and Clark National and State Park, Oregon Museum of Science, Oregin Zoo, Pittock Mansion, Lan Su Chinese Garden",continent: "North America"
    }
)

localStorage.setItem(
    "CityDatabase",
    JSON.stringify(cityDatabase)
)

