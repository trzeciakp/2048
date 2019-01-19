// Wait till the browser is ready to render the game (avoids glitches)
// window.gm = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
window.requestAnimationFrame(function () {
  window.gm = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
