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
    $("#time8 .description").val(localStorage.getItem("time8"));
    $("#time9 .description").val(localStorage.getItem("time9"));
    $("#time10 .description").val(localStorage.getItem("time10"));
    $("#time11 .description").val(localStorage.getItem("time11"));
    $("#time12 .description").val(localStorage.getItem("time12"));
    $("#time1 .description").val(localStorage.getItem("time1"));
    $("#time2 .description").val(localStorage.getItem("time2"));
    $("#time3 .description").val(localStorage.getItem("time3"));
    $("#time4 .description").val(localStorage.getItem("time4"));
    $("#time5 .description").val(localStorage.getItem("time5"));

    timeTracker();
})


    


