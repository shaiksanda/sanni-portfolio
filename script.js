document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('viewProjectsBtn')
  const audio = new Audio(
    'https://res.cloudinary.com/dq4yjeejc/video/upload/v1722331324/Magical-Moments-chosic.com__z3kesq.mp3',
  )

  // Set audio to loop
  audio.loop = true

  // Add a click event listener to the button to play audio
  playButton.addEventListener('click', () => {
    // Play the audio from the start every time the button is clicked
    // Reset audio to the start
    audio.play()
  })
})