import React from 'react'
import { 
    Row
} from 'reactstrap'
import { Colxx } from 'components/common/CustomBootstrap';
import TopNavigation from 'components/wizard/TopNavigation';
import MyNFT from './MyNFT'; 
import '../TP-scss/header.scss'

function Header(prop) {
  const user = {
    name:"Rabbit tail",
    address:"0x019123123123123123123bb7a"
  }
  const attr = prop
  return (
    <div className='container NFT_common_header'>
        <Row className='h-100'>
            <Colxx xxs="2" md="2" className="h-100 d-flex align-items-center">
                <img className='NFT_common_header_logo' src="/assets/img/portal/logo.png" alt=""/>
            </Colxx>
            <Colxx xxs="6" md="7" className="pr-0">
                {
                    (()=>{
                        switch(attr.mediumArea){
                          case "none": return null;
                          case "tabs": return  <TopNavigation
                          className="justify-content-center"
                          disableNav={false}
                          topNavClick={prop.topNavClick}
                          />;
                          case "NFT": return <MyNFT NFTInfo={attr.NFTInfo}/> 
                          default: return null; 
                        } 
                      })()
                }
            </Colxx>
            <Colxx xxs="4" md="3" className="h-100 w-100 d-flex align-items-center">
                <Row className='w-100'>
                  <Colxx xxs="2" className="p-0">
                    <img className='NFT_common_header_portrait' src="/assets/img/profiles/1.jpg" alt=""/>
                  </Colxx>
                  <Colxx xxs="10" className="p-0">
                    <div>
                      <p className='font-weight-bold NFT_common_header_name m-0'>
                        {user.name}
                      </p>
                    </div>
                    <div className='w-100'>
                        <p className="p-0 m-0">{user.address.substring(0,4)}
                          <span>...{user.address.slice(-4)}</span>
                        </p>
                    </div>
                  </Colxx>
                </Row>
            </Colxx>
        </Row>
    </div>
  )
}

export default Header