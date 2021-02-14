import React, { useState, useEffect } from 'react';
import HomePage from './components/home'
import Context from './components/context'

function App() {
  const [menu_flag, setFlag] = useState(false);
  const [curr_links, setLinks] = useState([]);
  const [curr_ending, setEnding] = useState('love');
  const shop = [
    ['Shop', ['Shop All Gifts', 'Most Popular', 'Gifts under $100', 'Limited Editions']],
    ['Design your own gift', ['Choose Your Layout!']],
    ['Occasions', ['Corporate & Client', 'Realtor & Housewarming', 'Wedding Party']]
  ]
  const corporate = [
    ['Work with your own design team', ['Corparate and business']],
    ['See your work', ['Case Study: Zendesk', 'Branding & Custom Packaging']],
  ]
  const custom = [
    ['Design your own gift', []],
  ]
  const about = [
    ['About', ['Meet the team', 'Contact us', 'Press', 'Learn from us: Product Businesses']],
  ]
  const endings = ['talk about', 'keep', 'share', 'remember', 'love']
  const wayBoxes = 
  [['The Collection', 'box1.png','See all of our gift designs in one place: you`ll find gifts for clients, employees, friends, birthdays, babies, foodies, and your impossible-to-shop-for aunt ;) Some gift designs are seasonal, while others have been bestsellers for years (looking at you The Executive!)', 'SHOP THE COLLECTION'],
  ['Client + Team Gifts', 'box2.png', 'Now it`s more important than ever to show appreciation. Shop our most popular client and team gifts.', 'SHOP CLIENT + TEAM GIFTS'],
  ['Work with Our Team', 'box3.png', `Looking for a gift that is as creative as the work that you do? Tired of forgettable branded swag? Whether you're looking for 50 elevated client gifts or a fulfillment partner for 50,000, were here to help!`, 'LEARN MORE']]
  const popularBoxes = [['box4.png', 'Corporate & Client Gifts', 'LEARN MORE!'], ['box5.png', 'Gifts Under $100', 'SHOP THESE GIFTS']]
  const links = {
    Shop: shop,
    Corporate: corporate,
    Custom: custom,
    About: about
  }
  function show_menu(){
    setFlag(true);
  }
  function hide_menu(){
    setFlag(false);
  }
  function changeLinks(name){
    setLinks(links[name]);
  }
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setEnding(endings[i])
      i++;
      if(i===endings.length){
        i=0;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Context.Provider value={{menu_flag, show_menu, hide_menu, curr_links, changeLinks, curr_ending, wayBoxes, popularBoxes}}>
      <div>
      <HomePage/>
    </div>
    </Context.Provider>
  );
}

export default App;
