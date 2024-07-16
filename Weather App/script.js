
// select
const searchBtn = document.querySelector("#search");
const searchInput = document.querySelector("input");
const tempratureElem = document.querySelector(".temprature");
const locationElem = document.querySelector(".location");
const emojiImg = document.querySelector(".emoji");
// event listener
searchBtn.addEventListener("click", async function () {
    const location = searchInput.value;
    if (location != "") {
        // data get
        const data = await fetchWeather(location)
        //update data inside my dom

        if (data != null) {
            // do nothing
            updateDOM(data);
        } 
        searchInput.value = "";
    }
})

function updateDOM(data) {
    /***********************filter required data*********************/
    console.log("i will update the dom", data);
    const temp = data.current.temp_c;
    const location = data.location.name;
    const timeData = data.location.localtime;
    const [date, time] = timeData.split(" ");
    const iconLink = data.current.condition.icon;
    const condition = data.current.condition.text;
    console.log("``````````````````````````");
    console.log("temp: ", temp, "location : ", location, "Date:", date);
    console.log("Time ", time, "link", iconLink)
    console.log("``````````````````````````");
    /*********************update the dom*************************/
    tempratureElem.textContent = temp +"°C";
    locationElem.textContent = location;
    emojiImg.src = iconLink;

}

async function fetchWeather(location) {
    const url = `http://api.weatherapi.com/v1/current.json?key=280816837c6944288bf43915241607&q=${location}&aqi=no`
    const response = await fetch(url);
    if (response.status == 400) {
        alert("location is invalid");
        return null;
    } else if (response.status == 200) {
        const json = await response.json();
        console.log(json);
        return json;
    }
}

/***
 * {
    "location": {
        "name": "Roorkee",
        "region": "Uttarakhand",
        "country": "India",
        "lat": 29.87,
        "lon": 77.88,
        "tz_id": "Asia/Kolkata",
        "localtime_epoch": 1721111963,
        "localtime": "2024-07-16 12:09"
    },
    "current": {
        "last_updated_epoch": 1721111400,
        "last_updated": "2024-07-16 12:00",
        "temp_c": 36.1,
        "temp_f": 96.9,
        "is_day": 1,
        "condition": {
            "text": "Patchy rain nearby",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
            "code": 1063
        },
        "wind_mph": 6.7,
        "wind_kph": 10.8,
        "wind_degree": 132,
        "wind_dir": "SE",
        "pressure_mb": 1000,
        "pressure_in": 29.54,
        "precip_mm": 0.12,
        "precip_in": 0,
        "humidity": 51,
        "cloud": 62,
        "feelslike_c": 44.3,
        "feelslike_f": 111.7,
        "windchill_c": 36.1,
        "windchill_f": 96.9,
        "heatindex_c": 44.3,
        "heatindex_f": 111.7,
        "dewpoint_c": 24.4,
        "dewpoint_f": 76,
        "vis_km": 10,
        "vis_miles": 6,
        "uv": 8,
        "gust_mph": 8.1,
        "gust_kph": 13
    }
}
 */