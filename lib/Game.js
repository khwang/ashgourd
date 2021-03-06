var Game = function () {
	this.players = {};
	this.gameState = {deck: ['1', '2', '3']};
	this.visible = {};
	return this;
}

Game.prototype.addPlayer = function (name, id, args) {
	console.log("added player");
	if (this.players[name]) {
		console.log("added already foo");
	} 
  else {
		this.players[name] = new Player(name, id, args, this.gameState)
	}
}

Game.prototype.update = function (data) {
	console.log("updating!!");
	console.log(data);
  var card = data.card;
  this.visible.push(card) 
}

Game.prototype.nextTurn = function(oldTurn){
  var next = oldTurn + 1;
  return next
}

var Player = function (name , id, args, gameState) {
	this.cards = [gameState.deck.pop()];
	this.name = name;
	this.id = id;
	var fields = Object.keys(args)
	for (var i = 0 , ii = fields.length; i < ii; i = i + 1){
		var field = fields[i];
	  	this[field] = args[field];
	}
	return this;
}

module.exports.Game = Game;
