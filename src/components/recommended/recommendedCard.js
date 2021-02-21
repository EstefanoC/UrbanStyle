import React from 'react'

// LazyLoad
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

// React-Router
import { Link } from 'react-router-dom'

// Helpers
import Favorite from '../helpers/favorite'
import Cart from '../helpers/cart'
import Review from '../helpers/review'
import Loading from '../helpers/loading'


let limitNum = 12
let randomNumArray = []
let heightLoad = []
let userImage


while (randomNumArray.length < limitNum) {
  let randomNum = Math.ceil(Math.random()*55)
  let exists = false

  for (let i = 0; i<randomNumArray.length; i++ ) {
    if (randomNumArray[i] === randomNum) {
      exists= true
      break
    }
  }

  if (!exists) {
    randomNumArray[randomNumArray.length] = randomNum
  }
}


const RecommendedCard = (props) => (
      (props.load) ?
        randomNumArray.map( (value, i) => {
          userImage = require(`../../media/productos${value.toString()}.jpg`).default
          heightLoad.push("200px")

          return (
            <article className="col-12 col-sm-5 col-md-3 col-lg-2 card mb-3" key={props.id[value-1]}>
              <figure>
                <div className="card-top">
                  <Favorite />
                  <Cart />
                  <LazyLoadImage
                      className="card-img-top img-fluid"
                      alt={props.name[value-1]}
                      src={userImage}
                      effect="blur"
                      height={heightLoad[i]}
                      afterLoad={() => heightLoad[i] = "auto"}
                  />
                  <span className="card-review text-center w-100"><Review staticStar={true} staticAverage={props.average[value-1]} /></span>
                </div>
                <figcaption className="card-body py-3 px-2">
                  <Link to={`/producto/${value-1}`}>
                    <p className="card-title text-uppercase">{props.name[value-1]}</p>
                  </Link>
                  <strong className="card-text ml-2">{props.price[value-1]}$</strong>
                </figcaption> 
              </figure>
            </article>
          )
        })
      :
        <Loading />
)


export default RecommendedCard