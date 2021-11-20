import React, { useState, useMemo, useRef } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import {Box} from "@chakra-ui/react"

const db = [
    {
        title: "Muzeum powstańców śląskich",
        desc: "Occaecat exercitation tempor do cupidatat anim voluptate elit labore eiusmod ullamco",
        img: "https://images.pexels.com/photos/5845467/pexels-photo-5845467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        tags: ["muzeum", "historia"],
    },
    {
        title: "Koncert jubileuszowy Eweliny Lisowskiej",
        desc: "Occaecat exercitation tempor do cupidatat anim voluptate elit labore eiusmod ullamco",
        tags: ["muzyka", "pop"],
        img: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        title: "Pijalnia wódki i piwa",
        desc: "Occaecat exercitation tempor do cupidatat anim voluptate elit labore eiusmod ullamco",
        tags: ["piwo", "imprezy", "lokalne specjały"],
        img: "https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
];

function Swiper () {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
      <div className='cardContainer'>
        {db.map((item, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={item.title}
            onSwipe={(dir) => swiped(dir, item.title, index)}
            onCardLeftScreen={() => outOfFrame(item.title, index)}
          >
            <Box
              style={{ backgroundImage: 'url(' + item.img + ')' }}
              className='card'
            >
              <h3>{item.title}</h3>
            </Box>
          </TinderCard>
        ))}
      </div>
  )
}

export default Swiper