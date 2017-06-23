import React, { Component } from 'react'
import {Slider, Slide, Button, Icon} from 'react-materialize'

class Landing extends Component {
  constructor() {
    super()
  }

  render(){
    return (
    <div class="landing">
      <Slider indicators={false} fullscreen={true}>
        <Slide 
          src="http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-attractions-xlarge.jpg"
          title = "Plan your trips ahead of time">
        </Slide>
        <Slide
          src="http://s1.it.atcdn.net/wp-content/uploads/2015/08/6-Tokyo.jpg"
          title = "Tickle your pickle in Tokyo">
        </Slide>
        <Slide
          src="http://handluggageonly.co.uk/wp-content/uploads/2015/01/Paris-France-Louvre-City-Lights-Hd-Wallpaper-.jpg"
          >
        </Slide>
        <Slide
          src="https://www.usnews.com/dims4/USNEWS/32d612c/2147483647/crop/4050x2700%2B0%2B0/resize/1200x1200%3E/quality/85/?url=%2Fcmsmedia%2Fe6%2Fcf%2F6567139b455ca4a0f5b659a24242%2Fbc16-netherlands-gallery-12.JPG"
          >
        </Slide>
      </Slider>
    </div>
    )
  }
}

export default Landing