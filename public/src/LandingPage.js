import React, { Component } from 'react'
import {Slider, Slide, Button, Icon, Card, CardTitle, Col} from 'react-materialize'

class Landing extends Component {
  constructor() {
    super()
  }
  render(){
    return (
    <div id="landing">
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
        <div id="card">
          <Card header={<CardTitle reveal image={"http://dailytimewaste.com/wp-content/uploads/2017/02/travel-wallpaper-3.png"} waves='light'/>}
            className='item'
            title="Travel Together"
            reveal={<p>Tripplanner makes it easier for you and your friends to create trips based on your interests and availability.</p>}>
        </Card>
          <Card header={<CardTitle reveal image={"http://diibache.ir/files/fa/news/1395/12/23/14348_215.jpg"} waves='light'/>}
            className='item'
            title="Party Together"
            reveal={<p>Tripplanner makes it easier for you and your friends to create trips based on your interests and availability.</p>}>
        </Card>
          <Card header={<CardTitle reveal image={"http://myventurepad.com/wp-content/uploads/2017/04/planning.jpg"} waves='light'/>}
            className='item'
            title="Plan together"
            reveal={<p>Tripplanner makes it easier for you and your friends to create trips based on your interests and availability.</p>}>
        </Card>
        </div>
    </div>

    )
  }
}

export default Landing