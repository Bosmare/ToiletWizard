import React from 'react'
import * as R from 'ramda'
import {connect} from 'react-redux'

import ToiletMen from './icons/toilet_men.svg'
import ToiletWomen from './icons/toilet_women.svg'
import ToiletUnisex from './icons/toilet_unisex.svg'
import Time from './icons/time.svg'
import Queue from './icons/queue.svg'

const REFRESH_INTERVAL = 60000

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.getAllToilets()
    this.countdown = setInterval(
      this.props.getAllToilets,
      REFRESH_INTERVAL
    )
  }

  componentWillUnmount(){
    clearInterval(this.countdown)
  }
  render() {
    return (
      <div className='container'>
        <p className='title'> Toilet Status </p>
        <div className='toiletsContainer'>
          {
            this.props.toiletData.map((row, index) => (
              <div key={index} className='toiletBox'>
                <p className='toiletName'>
                  {row.map_id}
                </p>
                <div className='iconRow'>
                  {row.type === "male"
                    ? <ToiletMen
                        width={70}
                        height={70} />
                    : row.type === "female"
                      ? <ToiletWomen
                          width={70}
                          height={70} />
                      : <ToiletUnisex
                          width={70}
                          height={70} />
                  }
                  <div className='dataIcon'>
                    <Time 
                        width={50}
                        height={50} />
                    <p className='iconText'>
                      {row.queue_time +'m'}
                    </p>
                  </div>
                  <div className='dataIcon'>
                    <Queue 
                        width={50}
                        height={50} />
                    <p className='iconText'>
                      {row.queue_level}
                    </p>
                  </div>
                </div>
                <p className='location'>
                  {row.location}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default connect(
  //mapStateToProps
  R.pick(['toiletData']),
  //mapDispatchToProps
  dispatch => ({
    getAllToilets: () => dispatch(({type: 'TOILETS_REQUESTED'}))
  })
) (App)