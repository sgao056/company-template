import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, CardBody, CardText } from 'reactstrap'
import { Colxx } from 'components/common/CustomBootstrap';
import CommonHeader from 'containers/navs/CommonHeader';
import '../../../assets/css/sass/views/inventory.scss';


const Inventory = () => {
  return(
    <div className='container'>
      <CommonHeader 
      title="Forging Pass" 
      webpage="founder.forging.one" 
      rightPartType="input" 
      />
      <Row className='inventory_page d-flex justify-content-center align-items-center' >
        <Colxx xxs="12" md="6" className="inventory_item d-flex justify-content-md-end justify-content-center align-items-center">
              <Card className='m-3 inventory_card'>
                <Link className="inventory_item " to="/app/inventory/createNFT">
                  <CardBody className='h-100'>
                      <CardText className="h-100 d-flex align-items-center justify-content-center flex-column mb-0 font-weight-light">
                          <div className='h-40 inventory_item_titleBar'>
                            <h4 className="inventory_item_title  font-weight-bold">
                              <h4 className='font-weight-bold'>
                                <span className="p-2">
                                  <i className='simple-icon-plus font-weight-bold'/>
                                </span>
                                Create a NFT
                              </h4>
                            </h4>
                          </div>
                          <p className='h-60 inventory_item_description'>Create a NFT by using Forging services, No- Coad required, it will take 15-20 mins to go through the process</p>
                      </CardText>
                  </CardBody>
                </Link>
              </Card>
         </Colxx>
         <Colxx xxs="12" md="6" className="inventory_item d-flex justify-content-md-start justify-content-center align-items-center">
              <Card className='m-3 inventory_card'>
                <Link className="inventory_item" to="/app/inventory/createNFT">
                  <CardBody className='h-100'>
                      <CardText className="h-100 d-flex align-items-center justify-content-center flex-column mb-0 font-weight-light">
                          <div className='h-40 inventory_item_titleBar'>
                            <h4 className="inventory_item_title  font-weight-bold">
                                <h4 className='font-weight-bold'>
                                  <span className="p-2">
                                    <i className='iconsminds-download-1 font-weight-bold'/>
                                  </span>
                                  Import existing NFT
                                </h4> 
                            </h4>
                          </div>
                          <p className='h-60 inventory_item_description'>Just input the NFT token address, forging will generate the dashboard. Import FT will loss some Forging advanced features.</p>
                      </CardText>
                  </CardBody>
                </Link>
              </Card>
         </Colxx>
        </Row>
    </div>
  )
  };
export default Inventory;
