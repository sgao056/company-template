import React, {useState} from 'react'
import { Row } from 'reactstrap'
import { Colxx } from 'components/common/CustomBootstrap'
import Rewards from './Rewards/index'
import Sidebar from '../TP-components/Sidebar'
import Header from '../TP-components/Header'

function HoldersModel() {

  const NFTInfo = {
    name:"Forging Creater's Pass",
    image:"/assets/img/portal/Frame-11.png",
    link:"Founder.forging.one"
  }
  return (
    <div className='container'>
      <Header mediumArea="NFT" NFTInfo={NFTInfo}/>
      <Row>
        <Colxx xxs="2" style={{maxWidth:"220px"}} className="p-0 m-0">
          <Sidebar/>      
        </Colxx>
        <Colxx xxs="10" className="m-0 p-0">
          <Rewards />
        </Colxx>
      </Row>
    </div>
  )
}

export default HoldersModel