const revealButton = document.getElementById('reveal');
const storyElement = document.getElementById('story');
const gifElement = document.querySelector('.gif');

revealButton.addEventListener('click', () => {
  storyElement.textContent = "No one ever saw Bobby again, but sometimes, on stormy nights, the neighbors would hear the faint sound of a child’s laughter carried on the wind, and they would see a small figure standing in the attic window, staring out with dark, empty eyes. And those who looked too closely into the shadows would swear they could hear a voice whispering, “I’m coming for you next... I'm hungry for your soul.”";
  gifElement.src = "/gifs/jumpscare-cat.gif"; 
})