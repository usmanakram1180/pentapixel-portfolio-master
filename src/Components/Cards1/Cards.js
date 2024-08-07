import React from 'react'
import './Cards.css'
function Cards() {
  return (
    <>
      <div class="background"></div>
      <div class="background-texture"></div>

      <section class="carousel1">
        <h2 class="categories__title">My List</h2>
        <div class="carousel1__container">
          <div class="carousel1-item">
            <img class="carousel1-item__img" src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="people" />
            <div class="carousel1-item__details">
              <div class="controls">
                <span class="fas fa-play-circle"></span>
                <span class="fas fa-plus-circle"></span>
              </div>
              <h5 class="carousel1-item__details--title">Descriptive Title</h5>
              <h6 class="carousel1-item__details--subtitle">Date and Duration</h6>
            </div>
          </div>
          <div class="carousel1-item">
            <img class="carousel1-item__img" src="https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="people" />
            <div class="carousel1-item__details">
              <div class="controls">
                <span class="fas fa-play-circle"></span>
                <span class="fas fa-plus-circle"></span>
              </div>
              <h5 class="carousel1-item__details--title">Descriptive Title</h5>
              <h6 class="carousel1-item__details--subtitle">Date and Duration</h6>
            </div>
          </div>
          <div class="carousel1-item">
            <img class="carousel1-item__img" src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="people" />
            <div class="carousel1-item__details">
              <div class="controls">
                <span class="fas fa-play-circle"></span>
                <span class="fas fa-plus-circle"></span>
              </div>
              <h5 class="carousel1-item__details--title">Descriptive Title</h5>
              <h6 class="carousel1-item__details--subtitle">Date and Duration</h6>
            </div>
          </div>
          <div class="carousel1-item">
            <img class="carousel1-item__img" src="https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="people" />
            <div class="carousel1-item__details">
              <div class="controls">
                <span class="fas fa-play-circle"></span>
                <span class="fas fa-plus-circle"></span>
              </div>
              <h5 class="carousel1-item__details--title">Descriptive Title</h5>
              <h6 class="carousel1-item__details--subtitle">Date and Duration</h6>
            </div>
          </div>
          <div class="carousel1-item">
            <img class="carousel1-item__img" src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="people" />
            <div class="carousel1-item__details">
              <div class="controls">
                <span class="fas fa-play-circle"></span>
                <span class="fas fa-plus-circle"></span>
              </div>
              <h5 class="carousel1-item__details--title">Descriptive Title</h5>
              <h6 class="carousel1-item__details--subtitle">Date and Duration</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards
