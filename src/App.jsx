import { useState } from "react"
import reviews from "./data"
import { MdOutlineNavigateNext } from "react-icons/md"
import { MdOutlineNavigateBefore } from "react-icons/md"
import { FaQuoteRight } from "react-icons/fa"
const App = () => {
  const leftHandler = () => {
    var newIndex = currentIndex - 1
    if (newIndex == -1) newIndex = reviews.length - 1
    setCurrentIndex(newIndex)
  }
  const rightHandler = () => {
    var newIndex = currentIndex + 1
    if (newIndex == reviews.length) newIndex = 0
    setCurrentIndex(newIndex)
  }
  const [currentIndex, setCurrentIndex] = useState(0)
  const { image, name, job, text } = reviews[currentIndex]
  return (
    <main>
      <section className="reviews">
        <div className="image-container">
          <img src={image} className="person-image" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4>{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button onClick={leftHandler}>
            <MdOutlineNavigateBefore />
          </button>
          <button onClick={rightHandler}>
            <MdOutlineNavigateNext />
          </button>
        </div>
        <button className="btn surprise">Surprise Me</button>
      </section>
    </main>
  )
}
export default App
