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
})

// function for tracking time 
function timeTracker() {
    // used to get current time
    var currentTime = moment().hour();

    // loops over time in html
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
    })
}
