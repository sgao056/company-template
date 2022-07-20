import React, {useState} from 'react';
import { 
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap';
import './holders.scss'
import { Colxx } from 'components/common/CustomBootstrap';
import classnames from 'classnames';
import {FiTwitter} from 'react-icons/fi'
import {TbBrandDiscord} from 'react-icons/tb'
import {AiOutlineMail} from 'react-icons/ai'

const Holders = () => {
  const holders =[
    {
      selected:false,
      address:{
        number:"0x019sdfjoisahdfdshflksdfhsdoahhsaodifbb7a",
        auth:"premium"
      },
      socialID:{
        twitter:true,
        discord:true,
        email:true
      },
      tags:["Blue-Chip","Whale"],
      holdingNumbers: 3,
      holdingTimes: 130,
      mintedHolder: true
    },
  ]
  const [activeTab, setActiveTab] = useState('Update Content');

  return(
  <div className='mt-4'>
    <h2 className='tabs' style={{minWidth:"310px"}}>
      <Nav tabs className="separator-tabs ml-0 mb-0">
        <NavItem>
          <NavLink
            className={classnames({
              active: activeTab === 'Update Content',
              'nav-link': true,
            })}
            onClick={() => setActiveTab('Update Content')}
            to="#"
            location={{}}
          >
            Current Holders()
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: activeTab === 'Portal Setting',
              'nav-link': true,
            })}
            onClick={() => setActiveTab('Portal Setting')}
            to="#"
            location={{}}
          >
            Previous Holders()
          </NavLink>
        </NavItem>
      </Nav>
    </h2>

    <TabContent activeTab={activeTab}>
        {/* event tab */}
        <TabPane tabId="Update Content">
          <Row className='holders_header'>
            <Colxx xxs="1" className="d-flex justify-content-center align-items-center"><h6 className='m-0 p-0'>Select</h6></Colxx>
            <Colxx xxs="2" className="d-flex justify-content-center align-items-center"><h6 className='m-0 p-0'>Address</h6></Colxx>
            <Colxx xxs="2" className="d-flex justify-content-center align-items-center"><h6 className='m-0 p-0'>Social ID</h6></Colxx>
            <Colxx xxs="2" className="d-flex justify-content-center align-items-center"><h6 className='m-0 p-0'>Tags</h6></Colxx>
            <Colxx xxs="1" className="d-flex justify-content-center align-items-center"><h6 className='m-0 p-0'>Holding Numbers</h6></Colxx>
            <Colxx xxs="2" className="d-flex justify-content-center align-items-center"><h6 className='m-0 p-0'>Holding Time</h6></Colxx>
            <Colxx xxs="2" className="d-flex justify-content-center align-items-center"><h6 className='m-0 p-0'>Minted Holder</h6></Colxx>
          </Row>
          {holders.map((item)=>{
            return(
              <Row key={item}>
                <Colxx xxs="1" className="d-flex justify-content-center align-items-center">
                  <input type="checkbox" checked={item.selected} readOnly="readonly"/>
                </Colxx>
                <Colxx xxs="2" className="d-flex justify-content-center align-items-center">
                  <i className={item.address.auth !== "premium" ? "simple-icon-user mr-2" : "simple-icon-diamond mr-2"}/>
                  {item.address.number.length >= 10 ?
                    <>
                      <h6 className="p-0 m-0">
                        {item.address.number.substring(0,4)}
                      </h6> 
                      <span>
                        <h6 className="p-0 m-0">
                        ...{item.address.number.slice(-4)}  
                        </h6>
                      </span>
                    </>
                    :
                      <p className="p-0 m-0">
                        {item.address.number}
                      </p> 
                  }
                </Colxx>
                <Colxx xxs="2" className="d-flex justify-content-center align-items-center">
                  <FiTwitter 
                    className="holders_social_icon m-1" 
                    style={{display: item.socialID.twitter ? "inline":"none"}}
                  />
                  <TbBrandDiscord 
                    className="holders_social_icon m-1"
                    style={{display: item.socialID.discord ? "inline":"none"}}
                  />
                  <AiOutlineMail 
                    className="holders_social_icon m-1"
                    style={{display: item.socialID.email ? "inline":"none"}}
                  />
                </Colxx>
                <Colxx xxs="2" className="d-flex justify-content-center align-items-center">
                  {
                    
                  }
                </Colxx>
                <Colxx xxs="1" className="d-flex justify-content-center align-items-center">Holding Numbers</Colxx>
                <Colxx xxs="2" className="d-flex justify-content-center align-items-center">Holding Time</Colxx>
                <Colxx xxs="2" className="d-flex justify-content-center align-items-center">Minted Holder</Colxx>
              </Row>
            )
          })}
        </TabPane>
        
        {/* buy pass tab */}
        <TabPane tabId="Portal Setting">
          2
        </TabPane>
      </TabContent>
  </div>
  )
};
export default Holders;
