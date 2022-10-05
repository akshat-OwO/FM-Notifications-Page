import { useState } from "react";
import Header from "./components/Header"
import Notification from "./components/Notificaton"

function App() {

  const [count, setCount] = useState(3);
  const [read, setRead] = useState(false);

  const handleNotifications = () => {
    setCount(0);
    setRead(true);
  }

  return (
    <div className="App">
      <Header handleNotifications={handleNotifications} count={count} />
      <div className="allNotifications">
        <Notification pfp="images/avatar-mark-webber.webp" name="Mark Webber" type="reacted to your recent post " detail="My first tournament today!" time="1m ago" read={read} />

        <Notification pfp="images/avatar-angela-gray.webp" name="Angela Gray" type="followed you" time="5m ago" read={read} />

        <Notification pfp="images/avatar-jacob-thompson.webp" name="Jacob Thompson" type="has joined your group" detail="Chess Club" time="1 day ago" read={read} />

        <Notification pfp="images/avatar-rizky-hasanuddin.webp" name="Rizky Hasanuddin" type="sent you a private message" time="5 days ago" message="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game." read={true} />

        <Notification pfp="images/avatar-kimberly-smith.webp" name="Kimberly Smith" type="commented on your picture" time="1 week ago" picture="images/image-chess.webp" read={true} />

        <Notification pfp="images/avatar-nathan-peterson.webp" name="Nathon Peterson" type="reacted to your recent post" time="2 weeks ago" detail="5 end-game strategies to increase your win rate" read={true} />

        <Notification pfp="images/avatar-anna-kim.webp" name="Nathon Peterson" type="left the group" time="2 weeks ago" detail="Chess Club" read={true} />
      </div>
    </div>
  )
}

export default App
