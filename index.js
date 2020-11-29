function pictureResize() {
    var screenWidth = $(document).width();
    var picHeight = (screenWidth / 16) * 9;
    $(".carousel-item img").css("height", picHeight + "px");

}

function changable() {
    var screenWidth = $(document).width();
    console.log(screenWidth);
    if (screenWidth < 900) {
        $("#changable").children().not("h7").removeClass("col-md-3").addClass("col-md-6");
        $("#hiddenRow").removeClass("d-none").addClass("d-block");
        // d-block      css ->  display: block
        // d-none       css ->  display: none
        // d-inline     inline-block
    } else {
        $("#changable").children().not("h7").removeClass("col-md-6").addClass("col-md-3");
        $("#hiddenRow").removeClass("d-block").addClass("d-none");
    }

}

// Page load
$(document).ready(function () {
    pictureResize();
    $("footer").children().not("h7").addClass("py-4");
    changable();
});

// Resize
$(document).resize(function () {
    pictureResize();

    changable();
});
