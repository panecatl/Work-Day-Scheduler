// current day to be displayed
var currentDate = moment().format ("dddd, MMM Do YYYY");
$("#currentDay").html(currentDate);

$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var time = $(this).parent().attr("id");
        var task = $(this).siblings(".description").val();

        // saving to local storage
        localStorage.setItem(time, task);
    })
})
