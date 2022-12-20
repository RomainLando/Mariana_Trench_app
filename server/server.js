const express = require('express');
const createRouter = require('./helpers/create_router');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology:true})
.then( (client) => {
    const db = client.db('trench_explorer');
    const trenchCollection = db.collection('trench_elements');
    const trenchRouter = createRouter(trenchCollection);
    app.use('/api/trench', trenchRouter);

    const questionsCollection = db.collection('questions');
    const questionsRouter = createRouter(questionsCollection);
    app.use('/api/questions', questionsRouter);

    const leaderboardCollection = db.collection('leaderboard');
    const leaderboardRouter = createRouter(leaderboardCollection);
    app.use('/api/leaderboard', leaderboardRouter);


})
.catch(console.error);


app.listen(9000, function() {
    console.log(`listening on port ${this.address().port}`);
})