// current day to be displayed
var currentDate = moment().format ("dddd, MMM Do YYYY");
$("#currentDay").html(currentDate);

// function for saving to local storage using JQuery for similar values
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var time = $(this).parent().attr("id");
        var task = $(this).siblings(".description").val();

        // saving to local storage
        localStorage.setItem(time, task);
    })


    // function for tracking time 
    function timeTracker() {
        // used to get current time
        var currentTime = moment().hour();

        // loops over time in html
        $(".time-block").each(function() {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            // runs to check if time has passed and will add appropriate class
            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    // getting items from local storage 
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})


    


