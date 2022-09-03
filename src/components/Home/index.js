import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="main-cont">
    <Header />
    <div className="home-cont">
      <div className="ui-container">
        <h1 className="head">Clothes That Get You Noticed</h1>
        <p className="para">
          Fashion is part of daily air and it does not quite help that it
          changes all the time .Clothes have always been a marker of the era and
          we are in the revolution. Your fashion makes you been seen and heard
          that why you are .So,celebrate the seasons new and exciting fashion in
          your own way
        </p>
        <button type="button" className="shop-btn">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed "
        className="fashion"
      />
    </div>
  </div>
)
export default Home
