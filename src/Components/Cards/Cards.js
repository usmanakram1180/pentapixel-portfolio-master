import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CCard } from '@coreui/react';
import './Cards.scss'
function Cards() {
  return (
    <>
      <div class="container1">
        <div class="box">
          <div class="boxContent">
            <i class="fa fa-microchip icon"></i>
            <h1 class="title">Business Strategy</h1>
            <p class="desc">Less unicorn and apart and credibly yikes touched much jeez that so reverent the by a as that kiwi fed wherever more aboard.</p>
          </div>
          <a href="/"></a>
        </div>
        <div class="box">
          <div class="boxContent">
            <i class="fa fa-calendar icon"></i>
            <h1 class="title">Website Development</h1>
            <p class="desc">Less unicorn and apart and credibly yikes touched much jeez that so reverent the by a as that kiwi fed wherever more aboard.</p>
          </div>
          <a href="/"></a>
        </div>
        <div class="box">
          <div class="boxContent">
            <i class="fa fa-podcast icon"></i>
            <h1 class="title">Marketing and Reporting</h1>
            <p class="desc">Less unicorn and apart and credibly yikes touched much jeez that so reverent the by a as that kiwi fed wherever more aboard.</p>
          </div>
          <a href="/"></a>
        </div>

      </div>
    </>
  )
}

export default Cards
