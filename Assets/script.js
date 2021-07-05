// Current time at top
{
    var day = moment().format("llll");
    $("#currentDay").append(day);
}

//Business hour timeblocks
var momentTime = moment().startOf("day").add(8, "hour");
var hour = moment().format("H");

for (var i = 9; i < 18; i++) {
    var hourRow = momentTime.add(1, "hour").format("hh A");
    var textBlock;

    // Colour code text blocks to indicate whether it is in the past, present, or future
    if (hour == i) {
        textBlock = 'present';
    } else if (hour > i) {
        textBlock = 'past';
    } else if (hour < i) {
        textBlock = 'future';
        }

    var hourBlocks =
        `<container class="row" id='hour-${i}'>
            <div class="col-1"></div>
            <div class="hour col-1">${hourRow}</div>
            <textarea class="description col-8 ${textBlock} hour-${i}"></textarea>
            <button class="saveBtn col-1 btn-primary"> <img src="Assets/disc.jpg" style="width:50px;height:50px;" alt=""></button>
            <div class="col-1">
            </div> 
        </container>
        <p></p>`
        ;

    $(".container").append(hourBlocks);
};

//Save text button
$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});

//Loop for text
for (var i = 9; i < 18; i++) {
    $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
}
