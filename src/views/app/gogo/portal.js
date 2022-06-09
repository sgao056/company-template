import React, { useState } from 'react';
import {
  Row,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Card
} 
from 'reactstrap';
import {BsGlobe, BsTwitter} from 'react-icons/bs'
import {IoIosWallet} from 'react-icons/io'
import {FaDiscord} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Colxx } from 'components/common/CustomBootstrap';

import '../../../assets/css/sass/views/portal.scss'

import logo from '../../../assets/img/portal/logo.png'

import Item from './portal/Item'
import items from './portal/Mockdata'

const ProfileSocial = () => {
  const [activeTab, setActiveTab] = useState('Events');

  return (
    <>
      <Row>
        <Colxx xxs="12">
        {/* header */}
          <div className='header'>
            <div className="container">
                <Row className='sub_header'>
                  <Colxx xxs="8">
                    <Row className='mt-4'>
                      <Colxx md="3" lg="3" xl="3" className='portal_logo_box mb-4 mb-md-0 d-flex justify-content-end'>
                        <img className='portal_logo b-md-1' src={logo} alt="" />
                      </Colxx>
                      <Colxx md="7" lg="7" xl="7" className="portal_header_text">
                        <Colxx xxs="12" className="portal_title">
                          <h1>Forging Portal</h1>
                        </Colxx>
                        <Colxx xxs="12" className="portal_icons">
                          <Row>
                            <Colxx xxs="1" >
                              <BsGlobe />
                            </Colxx>
                            <Colxx xxs="1">
                              <BsTwitter />
                            </Colxx>
                            <Colxx xxs="1">
                              <FaDiscord />
                            </Colxx>
                            <Colxx xxs="1">
                              <BsGlobe />
                            </Colxx>
                            <Colxx xxs="1">
                              <BsGlobe />
                            </Colxx>
                          </Row>
                        </Colxx>
                      </Colxx>
                    </Row>
                  </Colxx>
                  <Colxx xxs="4" className="portal_wallet">
                    <Row>
                      <Colxx xxs="12" md="4" className="portal_wallet_portrait_box">
                        <img className="portal_wallet_portrait" src="https://images.iphonephotographyschool.com/24755/portrait-photography.jpg" alt="" />
                      </Colxx>
                      <Colxx xxs="12" md="8" className="portal_wallet_info">
                          <span className='portal_wallet_icon mb-'>
                            <IoIosWallet/>
                          </span>
                          <span className="m-1" style={{fontSize:"10px"}}>
                            h20x0743...9cc9
                          </span>
                      </Colxx>
                    </Row>
                  </Colxx>
                </Row>

              <div className='tabs'>
                <Nav tabs className="separator-tabs ml-0 mb-0">
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === 'Events',
                        'nav-link': true,
                      })}
                      onClick={() => setActiveTab('Events')}
                      to="#"
                      location={{}}
                    >
                      Events
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === 'Buy Pass',
                        'nav-link': true,
                      })}
                      onClick={() => setActiveTab('Buy Pass')}
                      to="#"
                      location={{}}
                    >
                      Buy Pass
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </div>

        {/* tabs layout */}
          <TabContent activeTab={activeTab}>
            {/* event tab */}
            <TabPane tabId="Events">
              1
            </TabPane>
            
            {/* buy pass tab */}
            <TabPane tabId="Buy Pass">
                <Row>
                  <Colxx xxs="12">
                      {
                        items.map((item)=>{
                          return <Item item={item} key={item.id}/>
                        })
                      }
                  </Colxx>
                  {/* <Colxx xxs="4" className="portal_items">
                    <Card 
                      className='mt-4 portal_item_card'
                      style={{height:"50vh", display:"flex", alignItems:"center"}}
                    >
                      Leader Board
                    </Card>
                  </Colxx> */}
                </Row>
            </TabPane>
          </TabContent>
        </Colxx>
      </Row>
    </>
  );
};
export default ProfileSocial;
