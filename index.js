const rover = {
    direction: 'N',
    position: { x: 0, y: 0},
    travelLog: []
};

const obstacles = [
    ['','','','','','','','','x',''],
    ['','','','','','','','','',''],
    ['','','x','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','x','','','',''],
    ['','','','','','','','','',''],
    ['','','','','x','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['x','','','','','','','','',''],
];

function turnLeft(rover) {
    let newDirection = '';
    switch (rover.direction) {
        case 'N':
            newDirection = 'W';
            break;
        case 'E':
            newDirection = 'N';
            break;
        case 'S':
            newDirection = 'E';
            break;
        case 'W':
            newDirection = 'S';
            break;
    }
    rover.direction = newDirection;
    console.log(`Rover has turned left, he's now facing ${rover.direction}`);
}

function turnRight(rover) {
    let newDirection = '';
    switch (rover.direction) {
        case 'N':
            newDirection = 'E';
            break;
        case 'E':
            newDirection = 'S';
            break;
        case 'S':
            newDirection = 'W';
            break;
        case 'W':
            newDirection = 'N';
            break;
    }
    rover.direction = newDirection;
    console.log(`Rover has turned right, he's now facing ${rover.direction}`);
}

function moveForward(rover) {
    if (rover.direction === 'W' && rover.position.x > 0) {
        if (!obstacles[rover.position.y][rover.position.x - 1]) {
            rover.position.x--;
            logNewPosition(rover, 'forward');
        } else {
            console.log(`Rover can't make this move: there is an obstacle`)
        }        
    } else if (rover.direction === 'E' && rover.position.x < 9) {
        if (!obstacles[rover.position.y][rover.position.x + 1]) {
            rover.position.x++;
            logNewPosition(rover, 'forward');
        } else {
            console.log(`Rover can' make this move: there is an obstacle`)
        }
    } else if (rover.direction === 'N' && rover.position.y > 0) {
        if (!obstacles[rover.position.y - 1][rover.position.x]) {
            rover.position.y--;
            logNewPosition(rover, 'forward');
        } else {
            console.log(`Rover can' make this move: there is an obstacle`)
        }
    } else if (rover.direction === 'S' && rover.position.y < 9) {
        if (!obstacles[rover.position.y + 1][rover.position.x]) {
            rover.position.y++;
            logNewPosition(rover, 'forward');
        } else {
            console.log(`Rover can' make this move: there is an obstacle`)
        }
    } else {
        console.log(`Rover is at position (${rover.position.x}; ${rover.position.y}), facing ${rover.direction}. It can't move forward without going off the grid!`);
    }
}

function moveBackward(rover) {
    if (rover.direction === 'W' && rover.position.x < 9) {
        rover.position.x++;
        logNewPosition(rover, 'backward');
    } else if (rover.direction === 'E' && rover.position.x > 0) {
        rover.position.x--;
       logNewPosition(rover, 'backward');
    } else if (rover.direction === 'N' && rover.position.y < 9) {
        rover.position.y--;
       logNewPosition(rover, 'backward');
    } else if (rover.direction === 'S' && rover.position.y > 0) {
        rover.position.y++;
       logNewPosition(rover, 'backward');
    } else {
        console.log(`Rover is at position (${rover.position.x}; ${rover.position.y}), facing ${rover.direction}. It can't move backward without going off the grid!`);
    }
}

function command(rover, commandList) {
    for (let i = 0; i < commandList.length; i++) {
        switch (commandList[i]) {
            case 'r':
                turnRight(rover);
                break;
            case 'l':
                turnLeft(rover);
                break;
            case 'f':
                moveForward(rover);
                break;
            case 'b':
                moveBackward(rover);
                break;
            default:
                console.log(`The '${commandList[i]}' move is not allowed!`);
        }
    }
    console.log(`Here is the history of Rover's moves: ${JSON.stringify(rover.travelLog)}`);
}
console.log(`Rover's initial position is at (${rover.position.x}, ${rover.position.y}), facing ${rover.direction}.`);
command(rover,'rrffffffffflfrfrf');

function logNewPosition(rover, move) {
    rover.travelLog.push({ x: rover.position.x, y: rover.position.y });
    console.log(`Rover has moved ${move}. His new position is (${rover.position.x}, ${rover.position.y})`);
}
