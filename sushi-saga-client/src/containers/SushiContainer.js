import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map((sushi, idx) => {
            return <Sushi key={idx} sushi={sushi} buySushi={props.buySushi} purchasedSushis = {props.purchasedSushis}/>
          })
        }
        <MoreButton moreButtonClick={props.moreButtonClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
