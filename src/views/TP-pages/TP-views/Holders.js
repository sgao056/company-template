import React from 'react'
import { Row } from 'reactstrap'
import { Colxx } from 'components/common/CustomBootstrap'
import Sidebar from '../TP-components/Sidebar'
import Header from '../TP-components/Header'
import Holders from './Holders/index'

function RewardsModel() {
  const NFTInfo = {
    name:"Forging Creater's Pass",
    image:"/assets/img/portal/Frame-11.png",
    link:"Founder.forging.one"
  }
  return (
    <div className='container'>
      <Header mediumArea="NFT" NFTInfo={NFTInfo}/>
      <Row className='w-100'>
        <Colxx xxs="2" md="3" style={{maxWidth:"220px"}} className="p-0">
          <Sidebar/>      
        </Colxx>
        <Colxx xxs="10" md="9">
          <Holders /> 
        </Colxx>
      </Row>
    </div>
  )
}

export default RewardsModel