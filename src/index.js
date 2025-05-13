const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/games', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const GameSchema = new mongoose.Schema({
    gameID: String,
    steamAppID: String,
    cheapest: String,
    cheapestDealID: String,
    external: String,
    thumb: String,
});

const Game = mongoose.model('Game', GameSchema);

//Get my wishlist Items
app.get('/wishlist', async (req, res) =>{
    const games = await Game.find();
    res.json(games);
});

//add to the wishlist
app.post('/wishlist', async (req, res) =>{
    const game = new Game(req.body);
    await game.save();
    res.status(201).json(game);
});

//remove from the wishlist
app.delete('/wishlist', async (req, res) =>{
    await Game.findByIdAndDelete(req.params.id);
    res.status(204).send();

});

app.listen(3000, () => console.log('API running on http://localhost:3000'));
