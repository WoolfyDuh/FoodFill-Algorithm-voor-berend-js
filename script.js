const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;



var map = 
[[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 2, 2, 2, 2, 2, 2, 0, 0],
[0, 2, 0, 0, 0, 0, 2, 0, 0],
[0, 2, 0, 2, 0, 0, 2, 0, 0],
[0, 2, 0, 0, 2, 0, 2, 0, 0],
[0, 0, 2, 0, 0, 0, 2, 0, 0],
[0, 0, 0, 2, 2, 2, 2, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0]];

function fill(data, x, y, newValue) {

    // get target value 
    const target = data[x][y];
    function flow(x, y) { // bounds check what we were passed
        if (x >= 0 && x < data.length && y >= 0 && y < data[x].length) {
            if (data[x][y] === target) {
                data[x][y] = newValue; flow(x - 1, y);
                // check up 
                flow(x + 1, y);
                // check down 
                flow(x, y - 1);
                // check left 
                flow(x, y + 1);
                // check right
            }
        }
    }
    flow(x, y);
}

fill(map, 2, 2, 1);
for (var i = 0; i < map.length; i++) {
    var string = "";
    for (var j = 0; j < map[i].length; j++) {
        string += map[i][j];
    }
    console.log(string);
}
