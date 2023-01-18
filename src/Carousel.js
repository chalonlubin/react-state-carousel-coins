import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {

  const [currCardIdx, setCurrCardIdx] = useState(0);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  // have less state

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {

    if(currCardIdx === total -2){
      setShowRight(false)
    }

    if(currCardIdx < total - 1){
      setCurrCardIdx(currCardIdx + 1);
    }
    // controlArrows()

    setShowLeft(true);
  }

  //Decrements currCardIdx state by 1
  function goBackward(){

    if(currCardIdx !== 0){
      setCurrCardIdx(currCardIdx - 1);
      setShowRight(true)
    }
    // controlArrows()

    if(currCardIdx === 1){
      setShowLeft(false);
    }
  }


  // function controlArrows() {

    // if (currCardIdx === 0) showLeft(false);
    // if (currCardIdx > 0) showLeft(true);
    // if (currCardIdx < total-1) showRight(true);
    // if (currCardIdx === total-1) showRight(false);
  // }

  // add and remove css class instead of removing from DOM.

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {showLeft && <i
          className="bi bi-arrow-left-circle"
          onClick={goBackward}
        />}

        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {showRight && <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
        />}
      </div>
    </div>
  );
}

export default Carousel;
