//calendar
var calendar = document.querySelector('.calendar');
var days = document.querySelector('.days');
var years = document.querySelector('.years');
var week_day = document.querySelector('.week_day');
var months = document.querySelector('.months');

var date = new Date();

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']




// dark mode Toggle
var dark_mode_switch = document.querySelector('.dark-mode-switch');
var body = document.querySelector('body');
var dark_mode_switch_circle = document.querySelector('.dark-mode-switch-circle');

dark_mode_switch.addEventListener('click', () => {
    body.classList.toggle('dark');
    dark_mode_switch_circle.classList.toggle('dark_mode_switch_circle_move');

})


//Calendar
function body_days() {
    //this line is to wipe those calendar out before run to a new one
    // if there is no such a wiper, it will be another calendar create under it
    days.innerHTML = ''

    //calendar title year and month
    let cYear = date.getFullYear(); //get current year
    let cMonth = date.getMonth(); //get current month (get month is start at 0-11 same as array[])

    // let cDay = date.getDate();//get current day
    years.innerHTML = cYear;
    months.innerHTML = month_names[cMonth];
    // var todoInput = document.querySelector('.todoInput')


    //calendar body
    //1. get frist day of each month
    let now_day = new Date(cYear, cMonth, 1); 
    //get the first date start at which date (Sun/Mon/tue/...)
    let first_day = now_day.getDay(); 

    //get empty div for those days that are not there 
    //so the actual day will start at right place.  
    for (var i = 0; i < first_day; i++) {
        var divs = document.createElement('div');
        days.appendChild(divs);
        divs.innerHTML = '';

    }

    //2. get how many days for each month (the end of each month)
    //month + 1 : get the first day of next month and use '0' to move to the current month's last day

    let the_last_day_of_month = new Date(cYear, cMonth + 1, 0).getDate();
    for (var i = 1; i <= the_last_day_of_month; i++) {

        // create <div> element
        let divs = document.createElement('div');
        divs.setAttribute('index', i);

        days.appendChild(divs);
        var span = '<span></span><span></span><span></span><span></span>';
        divs.innerHTML = i + span;


        //current date corlor
        let date2 = new Date();
        if (i == date2.getDate() && cMonth == date2.getMonth() && cYear == date2.getFullYear()) {
            divs.style.color = '#b96c8f'
        }
    
    }

}
body_days();



// next and prev month
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');

prev.addEventListener('click', () => {
    //setMonth : setMonth to a different month
    //prev : getMonth - 1 

    date.setMonth(date.getMonth() - 1);
    body_days();


})

next.addEventListener('click', () => {
    //setMonth : setMonth to a different month
    //prev : getMonth - 1 

    date.setMonth(date.getMonth() + 1);
    body_days();


})







