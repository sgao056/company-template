import React from 'react'
import { Row } from 'reactstrap'
import { Colxx } from 'components/common/CustomBootstrap'

function MyNFT(prop) {
  const { NFTInfo } = prop
  console.log(NFTInfo)
  return (
    <Row className='w-100 h-100 m-0'>
      <Colxx xxs="12" sm="2" lg="1" className="p-0 d-flex align-items-center justify-content-center">
        <img className='NFT_common_header_portrait' src={NFTInfo.image} alt=""/>
      </Colxx>
      {
        window.innerWidth > 576 ? 
        <Colxx sm="9" lg="10" className="pr-0 d-flex justify-content-center" style={{flexDirection:"column"}}>
        <div>
          <p className='font-weight-bold NFT_common_header_name m-0'>
            {NFTInfo.name}
          </p>
        </div>
        <div className='w-100'>
          <Row>
            <Colxx xxs="4" className="pr-0" >
            {NFTInfo.link}
            </Colxx>
          </Row>
        </div>
      </Colxx>
      :
      null
      }
    </Row>
  )
}

export default MyNFT