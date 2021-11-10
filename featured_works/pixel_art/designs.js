// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var colorPicker = $('#colorPicker');
var color = colorPicker[0].value;

$('#sizePicker').on('submit', function(e) {
    e.preventDefault();
    var height = e.target.elements.height.value;
    var width = e.target.elements.width.value;
    makeGrid(height, width);
});

function makeGrid(height, width) {
  // Your code goes here!
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
   if(this.getAttribute('style')) {
        var rgbPicker = hexToRgb(color);
        var rgbApplied = this.getAttribute('style').split(':')[1].split(';')[0];
        rgbApplied = rgbApplied.split('rgb(')[1];
        rgbApplied = rgbApplied.split(', ');
        rgbApplied[2] = rgbApplied[2].split(')')[0];
    }
    if (!this.getAttribute('style')) {
        $(this).css({'background-color': color}); 
    }  else {
        $(this).css({'background-color': color});
    }
});

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}