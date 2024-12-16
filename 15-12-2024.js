// Promises in JavaScript

// Simple Promise Creation:
// Write a function delayedMessage that returns a promise. The promise should resolve with a message "Hello, world!" after a delay of 2 seconds.

function delayedMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 2000);
    });
}

// Example usage:
delayedMessage().then((message) => {
    console.log(message);  // This will log "Hello, world!" after 2 seconds
});
