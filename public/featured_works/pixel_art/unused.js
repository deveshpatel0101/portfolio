var colorPicker = $('#colorPicker');
var color = colorPicker[0].value;
var hover = 0;
var click = 0;

$('#sizePicker').on('submit', function(e) {
    e.preventDefault();
    var height = e.target.elements.height.value;
    var width = e.target.elements.width.value;
    makeGrid(height, width);
});

function makeGrid(height, width) {
    var canvas = $('#pixelCanvas');
    var heightString = '';
    for (var i = 0; i < height; i++) {
        var widthString = '';
        for (var j = 0; j < width; j++) {
            widthString += '<td></td>';
        }
        heightString += '<tr>' + widthString + '</tr>';
    }
    canvas.html(heightString);
}

colorPicker.on('change', function(e) {
    color = e.target.value;
});

$('#pixelCanvas').on('click', 'td', function(e) {
    if (hover === 1) {
        click = 1;
        hover = 0;
    } else if (hover === 2) {
        click = 2;
        hover = 0;
        this.removeAttribute('style');
    }
});

$('#pixelCanvas').on('mouseover', 'td', function(e) {
    if (!$(this).css('--color')) {
        $(this).css('--color', color);
        hover = 1;
    } else {
        hover = 2;
    }
    $(this).on('mouseout', function(e) {
        if (click === 1) {
            click = 0;
        } else if (click === 2) {
            this.removeAttribute('style');
            click = 0;
        } else if (hover === 1) {
            this.removeAttribute('style');
        }
    });
});