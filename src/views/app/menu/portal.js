import React, { useState } from 'react';
import {
  Row,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Button
} 
from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import {ethers} from 'ethers'
import {BsGlobe, BsTwitter} from 'react-icons/bs'
import {IoIosWallet} from 'react-icons/io'
import {FaDiscord} from 'react-icons/fa'

import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import opensea from '../../../assets/img/icons/opensea.png'
import etherscan from '../../../assets/img/icons/etherscan.png'
import logo from '../../../assets/img/portal/logo.png'

import '../../../assets/css/sass/views/portal.scss'

import Item from './portal-page/Item'
import items from './portal-page/Mockdata'
import Events from './portal-page/Events'

const Portal = () => {
  const [activeTab, setActiveTab] = useState('Events');
  const [errorMessage, setErrorMessage] = useState(null);

  const connectWallet = async ()=>{
    if (window.ethereum && !localStorage.wallet) {
			// connect to metamask
			await window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(async result => {
        // set ethers provider and signature
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signature = await provider.getSigner().signMessage(`Please sign to address ${result[0]}`);
        localStorage.setItem('wallet', result[0]);
        window.location.reload();
			})
			.catch(error => {
				setErrorMessage(error.message);
			});
		} else if (!window.ethereum){
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
  }

  const disconnectWallet = () => {
    localStorage.removeItem('wallet');
    window.location.reload();
  }

  return (
    <>
      <Row>
        <Colxx xxs="12" className="portal_box">
          {/* header */}
          <div className='header'>
            <div className="container">
            {document.body.scrollWidth >= 768 ?
                <Row className='sub_header'>
                  <Colxx md="8">
                    <Row className='mt-4'>
                      <Colxx sm="3" className='portal_logo_box mb-4 mb-md-0 d-flex justify-content-end'>
                        <img className='portal_logo b-md-1' src={logo} alt="" />
                      </Colxx>
                      <Colxx sm="8" className="portal_header_text">
                        <Colxx xxs="12" className="portal_title">
                          <h1>Forging Portal</h1>
                        </Colxx>
                        <Colxx xxs="12" className="portal_icons">
                          <Row>
                            <Colxx xxs="1">
                              <BsGlobe />
                            </Colxx>
                            <Colxx xxs="1">
                              <BsTwitter />
                            </Colxx>
                            <Colxx xxs="1">
                              <FaDiscord />
                            </Colxx>
                            <Colxx xxs="1">
                              <img className='portal_icon' src={opensea} alt="" />
                            </Colxx>
                            <Colxx xxs="1">
                              <img className='portal_icon' src={etherscan} alt="" />
                            </Colxx>
                          </Row>
                        </Colxx>
                      </Colxx>
                    </Row>
                  </Colxx>
                  <Colxx md="4" className="portal_wallet">
                      <span xxs="12" md="3" className="portal_wallet_portrait_box">
                        <img className="portal_wallet_portrait" src="https://images.iphonephotographyschool.com/24755/portrait-photography.jpg" alt="" />
                      </span>
                      <span xxs="12" md="9" className="portal_wallet_info">
                            <Colxx xxs="2" className='portal_wallet_icon'>
                              <IoIosWallet className="mb-1"/>
                            </Colxx>
                            <Colxx xxs="9" onClick={connectWallet} className="m-1" style={{fontSize:"10px"}}>
                              {
                                localStorage.getItem('wallet')
                                ?
                                <div className='wallet_address m-0 p-0'>
                                  {localStorage.wallet}
                                </div>
                                :
                                <div className='wallet_address m-0 p-0'>
                                  Connect your wallet
                                </div> 
                              } 
                            </Colxx>
                      </span>
                      <div>
                        <Button style={{display: window.localStorage.wallet ? "inline":"none"}} onClick={disconnectWallet}>
                          logout
                        </Button>
                      </div>
                  </Colxx>
                </Row>
                :
                <Row className='sub_header'>
                  <Colxx xxs="10">
                    <Row className='mt-4'>
                      <Colxx sm="12" className='portal_logo_box_sm mb-4 mb-md-0 d-flex'>
                        <Row className='portal_header_text'>
                          <Colxx xxs="4">
                          <img className='portal_logo b-md-1' src={logo} alt="" />
                          </Colxx>
                          <Colxx xxs="8" className="portal_title_sm d-flex align-items-center p-0">
                            <h1>Forging Portal</h1>
                          </Colxx>
                        </Row>
                      </Colxx>
                      <Colxx sm="12" className="portal_header_text">
                        <Colxx xxs="12" className="portal_icons">
                          <Row>
                            <Colxx xxs="2">
                              <BsGlobe />
                            </Colxx>
                            <Colxx xxs="2">
                              <BsTwitter />
                            </Colxx>
                            <Colxx xxs="2">
                              <FaDiscord />
                            </Colxx>
                            <Colxx xxs="2">
                              <img className='portal_icon' src={opensea} alt="" />
                            </Colxx>
                            <Colxx xxs="2">
                              <img className='portal_icon' src={etherscan} alt="" />
                            </Colxx>
                          </Row>
                        </Colxx>
                      </Colxx>
                    </Row>
                  </Colxx>
                  <Colxx onClick={connectWallet} xxs="2"className="portal_wallet">
                    <Row>
                      <Colxx xxs="12"className="portal_wallet_info">
                          <span className='portal_wallet_icon mb-'>
                            <IoIosWallet/>
                          </span>
                      </Colxx>
                    </Row>
                  </Colxx>
                </Row>
            }
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
              <Events />
            </TabPane>
            
            {/* buy pass tab */}
            <TabPane tabId="Buy Pass">
                <Row>
                  <Colxx xxs="12">
                    <div className="container">
                        {
                        items.map((item)=>{
                          return <Item item={item} key={item.id}/>
                        })
                      }
                    </div>
                  </Colxx>
                </Row>
            </TabPane>
          </TabContent>
        </Colxx>
      </Row>
    </>
  );
};
export default Portal;
