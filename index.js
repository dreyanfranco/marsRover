/* 
if the rover wants to move to the left, its first move must be a turn. Its next move will then be a step forward.
*/// GRID 10x10

// Iteration 1 | The rover object
// Rover object goes here:

const rover = {
    defaultDirection: 'North',
    direction: ['North', 'South', 'East', 'West'],
    x: 0,
    y: 0,
    travelLog: [{x: 0, y: 0}]
};
  
// Iteration 2 | Turning the rover

function turnLeft(rover) {
    console.log('turnLeft was called!');
    switch (rover.defaultDirection) {
        case "North":
            rover.defaultDirection = rover.direction[3];
            break;
        case "West":
            rover.defaultDirection = rover.direction[1];
            break;
        case "South":
            rover.defaultDirection = rover.direction[2];
            break;
        case "East":
            rover.defaultDirection = rover.direction[0];
            break;
    }
    console.log(`Mars rover is facing ${rover.defaultDirection} after turning left`);
}
  
function turnRight(rover) {
    console.log('turnRight was called!');
    switch (rover.defaultDirection) {
        case "North":
            rover.defaultDirection = rover.direction[2];
            break;
        case "East":
            rover.defaultDirection = rover.direction[1];
            break;
        case "South":
            rover.defaultDirection = rover.direction[3];
            break;
        case "West":
            rover.defaultDirection = rover.direction[0];
            break;
    }
    console.log(`Mars rover is facing ${rover.defaultDirection} after turning right`);
}


// Iteration 3 | Moving the rover (Bonus: backwards) 

/*
moveForward() is a function of the rover’s current direction, and the movement forward.

For instance, if the rover is facing west and moves forward, we would decrease the rover’s x by 1.

If the rover is facing north and moves forward, we would decrease the rover’s y by 1.

If the rover is facing south and moves forward, we would increase the y by 1.

Fill in this logic in the moveForward() function. After each movement, console.log the rover’s coordinates so you can see where it is positioned
*/

function moveForward(rover) {
    console.log('moveForward was called');
    switch (rover.defaultDirection) {
        case "North":
            rover.y--;
            break;
        case "West":
            rover.x--;
            break;
        case "South":
            rover.y++;
            break;
        case "East":
            rover.x++;
            break;   
        }
        let newPosition = { x: rover.x, y: rover.y };
        rover.travelLog.push(newPosition);
        console.log(`Rover has position: x=${rover.x}, y=${rover.y}`);
}


function moveBackward(rover) {
    console.log('moveBackward was called');
    switch (rover.defaultDirection) {
        case "North":
            rover.y++; // try using ! to see if it works
            break;
        case "West":
            rover.x++; 
            break;
        case "South":
            rover.y--;
            break;
        case "East":
            rover.x--;
            break;
    }
    let newPosition = { x: rover.x, y: rover.y };
    rover.travelLog.push(newPosition);
    console.log(`Rover has position: x=${rover.x}, y=${rover.y}`);
}


// Iterarion 4 | Commands - Bonus: Validate inputs

//Use a loop to iterate over the string. 
// Inside this loop, write a switch or if statement to call the correct function. 
// For instance, if the letter is f, you are going to want to call the goForward() function.

function command(rover, orders) {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        switch (order) {
            case 'f':
                moveForward(rover, order);
                break;
            case 'b':
                moveBackward(rover, order);
                break;
            case 'l':
                turnLeft(rover, orders);
                break;
            case 'r':
                turnRight(rover, orders);
                break;
            default:
                console.log('Incorrect command. Please type either of this commands: f, b, l or r.');
        }
    }
    tracker(rover); // invoked tracker into command. I would need to invoker first function command with valid inputs for tracker(); to print in console.
}
// command(rover, "rffrfflfrff");

// Iteration 5 | Tracking

function tracker(rover) {
    for (let i = 0; i < rover.travelLog.length; i++) {
        console.log(`Rover has position: ${i}: x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
    }
    console.log(rover.travelLog); // it prints in the console movements into the array.
}