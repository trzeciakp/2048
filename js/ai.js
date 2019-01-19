function move() {
    if (!window.gm) {
        setTimeout(move, 10);
        return;
    }

    window.gm.keepPlaying = true;
    if (window.gm.over) {
        console.log('Game over! score: ' + window.gm.score + '. Won: ' + window.gm.won);
        console.log(window.gm.grid.serialize());
        window.gm.restart();
        setTimeout(move, 10);
        return;
    }

    var direction = findBestDirection(window.gm);
    // window.gm.move(Math.floor(Math.random()*4))
    window.gm.move(direction);
    setTimeout(move, 10);
}
var DRY_RUN_TIMES = 100;
function findBestDirection(gameManager) {
    var maxIndex = 0;
    var maxValue = gameManager.dryRun(0, DRY_RUN_TIMES);

    for (var i = 1; i < 4; i++) {
        var value = gameManager.dryRun(i, DRY_RUN_TIMES);
        if (value > maxValue) {
            maxValue = value;
            maxIndex = i;
        }
    }
    return maxIndex;
}

move();

