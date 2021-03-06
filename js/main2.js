// Using Fetch

const background = document.querySelector('.background');
const author = document.querySelector('.author');
const icon = document.querySelector('.icon');
const details = document.querySelector('.description'); 
const period = document.querySelector('.period'); 
const app = document.querySelector('.main__container');
const quotes = document.querySelector('.quote__container');
const btnExpand = document.querySelector('.more');
const btnLabel = document.querySelector('.btn-more-label');
const arrow = document.querySelector('.arrow');

const URL_QUOTE = 'https://api.quotable.io/random';
const URL_TIMEZONE = 'https://worldtimeapi.org/api/ip';
const URL_LOCATION = 'https://freegeoip.app/json/';

// Generate quotes
function generateQuote(){
    fetch(URL_QUOTE)
    .then(function(quoteRes) {
        return quoteRes.json();
    })
    .then(function(quoteRes) {
        document.getElementById('quote').innerHTML = quoteRes.content; 
        document.querySelector('.author').innerHTML = quoteRes.author;
    })
    .catch(function(err) {
        console.log(err);
    });
    
}

setInterval(generateQuote(), 10000);


// Get current day and time
function getTime() {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();

    // Setting greeting and time of day
    let greeting = '';
    if (hour >= 5 && hour <= 11){
        greeting = 'morning';
    } else if (hour >= 12 && hour <= 17) {
        greeting = 'afternoon';
    } else {
        greeting = 'evening';
    }
    document.querySelector('.current__greeting').textContent = `good ${greeting}`

    // Background and icon
    if (hour >= 5 && hour <= 17) {
        background.classList.add('day');
        icon.src = '../assets/desktop/icon-sun.svg';
        icon.setAttribute('alt', 'sun icon');
        details.style.color = '#303030';
        details.style.background = 'rgba(255,255,255,0.8)';
    } else {
        background.classList.add('night');
        icon.src = '../assets/desktop/icon-moon.svg';
        icon.setAttribute('alt', 'moon night');
        details.style.color = '#fff';
        details.style.background = 'rgba(0,0,0, 0.75)';
    }

    // Time
    if (minute < 10) {
        minute = '0' + minute
    }
    if (hour=== 0) {
        hour = 12
        period.textContent = 'am';
    } else if (hour === 12) {
        period.textContent = 'pm';
    } else if (hour > 12) {
        hour -= 12;
        period.textContent = 'pm';
    } else {
        period.textContent = 'am';
    }
    document.querySelector('.time').textContent = `${hour}:${minute}`;

}

function getTimeZone() {
    fetch(URL_TIMEZONE)
    .then(function(regionRes) {
        return regionRes.json();
    })
    .then(function(regionRes) {
        //const regionName = regionRes.region_name;
        //const countryCode = regionRes.country_code;

        // Local Timezone
        document.querySelector('.time-zone').innerHTML = regionRes.abbreviation;

        // Details
        document.getElementById('timezone').innerHTML = regionRes.timezone;
        document.getElementById('year-day').innerHTML = regionRes.day_of_year;
        document.getElementById('week-day').innerHTML = regionRes.day_of_week;
        document.getElementById('week-number').innerHTML = regionRes.week_number;
    })
    .catch(function(err) {
        console.log(err);
    });
}
 
function getLocation(){
    fetch(URL_LOCATION)
    .then(function(locationRes) {
        return locationRes.json();
    })
    .then(function(locationRes) {
        //const ipLocation = locationRes.ip;
        const cityName = locationRes.city;
        const countryCode = locationRes.country_code;

        // Location
        document.querySelector('.current__location').textContent = `in ${cityName}, ${countryCode}`;
    })
    .catch(function(err) {
        console.log(err);
    });
}



generateQuote();
getTime();
getTimeZone();
getLocation();


// Event Listeners
btnExpand.addEventListener('click', () => {
    app.classList.toggle('transform');
    details.classList.toggle('transform');
    
    if (btnExpand.firstChild.nodeValue === 'More') {
        btnExpand.firstChild.nodeValue ='Less'
        details.style.display = 'block';
        //quotes.style.visibility = 'hidden';

    } else {
        btnExpand.firstChild.nodeValue = 'More'
        details.style.display = 'none';
        //quotes.style.visibility = 'visible';
    }
    arrow.classList.toggle('rotate');
});
    


// Random Quote
document.getElementById('refresh').addEventListener('click', generateQuote);
