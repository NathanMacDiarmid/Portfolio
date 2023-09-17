const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

// Paddle properties
const paddleWidth = 20;
const paddleHeight = 200;
let leftPaddleY = (canvas.height - paddleHeight) / 2;
let rightPaddleY = (canvas.height - paddleHeight) / 2;
const paddleSpeed = 5;

// Ball properties
const ballSize = 20;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 3;
let ballSpeedY = 3;

// Divider properties
const dividerWidth = 15;
const dividerHeight = 100;

// Variable to track which paddle controls the movement
let leftPaddleControls = true;

// Update function
function update() {
    // Move paddles based on alternating control
    if (leftPaddleControls) {
    if (ballY > leftPaddleY + paddleHeight / 2) {
        leftPaddleY += paddleSpeed;
    } else {
        leftPaddleY -= paddleSpeed;
    }
    } else {
        rightPaddleY = ballY - paddleHeight / 2;
    }

    // Toggle control to the other paddle
    leftPaddleControls = !leftPaddleControls;

    // Move ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collision with top and bottom walls
    if (ballY - ballSize / 2 < 0 || ballY + ballSize / 2 > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }

    // Ball collision with paddles
    if (
        ballX - ballSize / 2 < paddleWidth &&
        ballY > leftPaddleY &&
        ballY < leftPaddleY + paddleHeight
    ) {
        ballSpeedX = -ballSpeedX;
    }
    if (
        ballX + ballSize / 2 > canvas.width - paddleWidth &&
        ballY > rightPaddleY &&
        ballY < rightPaddleY + paddleHeight
    ) {
        ballSpeedX = -ballSpeedX;
    }

    // Ball out of bounds (score)
    if (ballX < 0 || ballX > canvas.width) {
        // Reset ball position
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        // Reset ball speed
        ballSpeedX = 3;
        ballSpeedY = 3;
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paddles
    ctx.fillStyle = "white";
    ctx.fillRect(0, leftPaddleY, paddleWidth, paddleHeight);
    ctx.fillRect(canvas.width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight);

    // Draw dividers
    ctx.fillRect(canvas.width / 2, 0, dividerWidth, dividerHeight);
    ctx.fillRect(canvas.width / 2, 150, dividerWidth, dividerHeight);
    ctx.fillRect(canvas.width / 2, 300, dividerWidth, dividerHeight);
    ctx.fillRect(canvas.width / 2, 450, dividerWidth, dividerHeight);
    ctx.fillRect(canvas.width / 2, 600, dividerWidth, dividerHeight);
    ctx.fillRect(canvas.width / 2, 750, dividerWidth, dividerHeight);
    ctx.fillRect(canvas.width / 2, 900, dividerWidth, dividerHeight);
    ctx.fillRect(canvas.width / 2, 1050, dividerWidth, dividerHeight);

    // Draw ball
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballSize / 2, 0, Math.PI * 2);
    ctx.fill();

    // Request next frame
    requestAnimationFrame(update);
}

// Start the game loop
update();