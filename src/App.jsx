import { useState } from 'react'
import './App.css'
import Event from './components/Event'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Miami Upcoming Events</h1>
      <div className = "eventContainer">
        <Event event="Miami Heat vs New York Knicks" image = "/images/miamiHeat.jpeg" web = "https://www.nba.com/heat/"/>
        <Event event="Florida Panthers Game" image = "/images/panthers.jpeg" web = "https://www.nhl.com/panthers"/>
        <Event event="SoBe Food and Wine Festival" image = "/images/sobeFood.jpeg" web = "https://sobewff.org/"/>
        <Event event="We Belong Here Festival" image = "/images/weBelong.jpeg" web = "https://posh.vip/e/we-belong-here-miami-2023?t=web1"/>
        <Event event="Wicked" image = "/images/wicked.jpeg" web = "https://www.arshtcenter.org/tickets/2022-2023/broadway-in-miami/wicked/"/>
        <Event event="Little River Flea" image = "/images/flea.jpeg" web = "https://www.instagram.com/littleriverflea/?hl=en"/>
        <Event event="SLS Pool Party" image = "/images/sls.jpeg" web = "https://slspoolparty.com/"/>
        <Event event="Time Out Market Miami" image = "/images/market.jpeg" web = "https://www.timeout.com/miami/restaurants/time-out-market-miami"/>
        <Event event="Coconut Grove Arts Festival" image = "/images/art.jpeg" web = "https://cgaf.com/"/>
        <Event event="Miami Boat Show" image = "/images/boat.jpeg" web = "https://www.eventspass.com/event/miamiboatshow?pr=WEB/#/buyTickets"/>
      </div>
      
    </div>
  )
}

export default App
