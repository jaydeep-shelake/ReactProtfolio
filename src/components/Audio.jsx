import {Component} from 'react'
import audioTrack from './audio.mp3'
class AudioComp extends Component {
    // Create state
    state = {
  
      // Get audio file in a variable
      audio: new Audio(audioTrack),
  
      // Set initial state of song
      isPlaying: false,
    };
  
    // Main function to handle both play and pause operations
    playPause = () => {
  
      // Get state of song
      let isPlaying = this.state.isPlaying;
  
      if (isPlaying) {
        // Pause the song if it is playing
        this.state.audio.pause();
      } else {
  
        // Play the song if it is paused
        this.state.audio.play();
      }
  
      // Change the state of song
      this.setState({ isPlaying: !isPlaying });
    };
  
    render() {
      return (
        <div style={{color:this.state.isPlaying?"#08fdd8":"#ff0b56"}} className="absolute cursor-pointer top-16 text-lg right-10 bg-black p-3 rounded lg:top-6 text-lg">
          {/* Button to call our main function */}
          <p onClick={this.playPause} className="w-full h-full">
          {this.state.isPlaying ? 
              "Sound ON" : 
              "Sound OFF"}
          </p>
        </div>
      );
    }
  }
  
  export default AudioComp