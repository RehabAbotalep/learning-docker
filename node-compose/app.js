const express = require('express');
const redis = require('redis');
const app = express();

// Create a Redis client
const client = redis.createClient({
    host: 'redis',
    port: 6379
});

// Set an initial visit count
client.set('visits', 0);

app.get('/', (req, res) => {
    // Increment the visit count stored in Redis
    client.incr('visits', (err, visits) => {
        if (err) {
            console.error('Error incrementing visit count:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(`Welcome! You are visitor number ${visits}`);
        }
    });
});

app.listen(8080, () => {
    console.log('App is running on port 8080');
});
