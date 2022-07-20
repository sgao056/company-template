import React, {useState} from 'react';
import { 
  Row,
  Card, 
  Input, 
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Nav, 
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import classnames from 'classnames';


const Portal = () => {
  const blogs =[
    {
      id:'1',
      pic:'/assets/img/NFT/blog1.jpg',
      portrait:'/assets/img/profiles/1.jpg',
      mainText:'The core of Gyblr is the same like two dozen posts that we keeep swapping...',
      commit:[
        {
          icon:'⭐',
          amount:22
        },
        {
          icon:'⭐',
          amount:9
        },
        {
          icon:'⭐',
          amount:13
        },
      ]

    }
  ]
  const [dropdownBasicOpen, setDropdownBasicOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Update Content');
  const [claimURL, setClaimURL] = useState('');

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
            Update Content
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
            Portal Setting
          </NavLink>
        </NavItem>
      </Nav>
    </h2>

    <TabContent activeTab={activeTab}>
        {/* event tab */}
        <TabPane tabId="Update Content">
          <Row>
            <Colxx xxs="12" lg="11">
              <Row>
                <Colxx xxs="11"  className="p-0">
                  <Card className='p-4 m-2 w-100'>
                    <img src="/assets/img/profiles/1.jpg" alt="" className='mb-3' style={{height:"30px", width:"30px", borderRadius:"15px"}}/>
                    <Input type="textarea" placeholder="Write you post text here"/>
                    <div className='d-sm-flex justify-content-between align-items-center'>
                      <div className='d-flex justify-content-bwtween mt-3 mt-sm-0'>
                        <i className='simple-icon-picture m-2'/>
                        <i className='simple-icon-camrecorder m-2'/>
                        <i className='simple-icon-link m-2'/>
                      </div>
                      <div className='m-2 d-flex justify-content-center'>
                        <Dropdown
                          isOpen={dropdownBasicOpen}
                          toggle={() => setDropdownBasicOpen(!dropdownBasicOpen)}
                        >
                          <DropdownToggle 
                          caret 
                          color="secondary" 
                          className="p-1 m-1" 
                          style={{width:"160px", borderRadius:"10px"}} 
                          outline>
                            Who can see it
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>
                              Only myself
                            </DropdownItem>
                            <DropdownItem>
                              All friends
                            </DropdownItem>
                            <DropdownItem>
                              All users
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                        <Button className="p-1 m-1" style={{width:"80px", borderRadius:"10px"}}>Post</Button>
                      </div>
                    </div>
                  </Card>
                </Colxx>
              </Row>
            </Colxx>
          </Row>
          <Row>
            <Colxx xxs="12" lg="11" className="m-0">
              {
                blogs.map((item)=>{
                  return(
                    <div key={item.id} className="pl-2 pr-4 w-100">
                      <Row className='mt-3 mb-3'>
                        <Colxx xxs="12" md="11" className='w-100 p-0'>
                          <img src={item.pic} alt="" className='w-100' style={{borderRadius:"10px"}}/>
                        </Colxx>
                        <Colxx xxs="4" md="1" className='pl-0 pl-md-1 mt-2'>
                          <Card className='p-1 d-flex justify-content-center align-items-center' style={{borderRadius:"5px",minWidth:"62px"}}>
                            <span className='font-weight-bold'>
                            <i className='simple-icon-pencil mr-1 mt-1 font-weight-bold'/> Edit
                            </span> 
                          </Card>
                        </Colxx>
                      </Row>
                      <Row className='m-0'>
                        <Colxx xxs="12" lg="1" className="p-0">
                          <img src={item.portrait} alt="" className='mb-3' style={{height:"30px", width:"30px", borderRadius:"15px"}}/>
                        </Colxx>
                        <Colxx xxs="12" lg="10" className="p-0">{item.mainText}</Colxx>
                      </Row>
                      <Row className='m-0'>
                        {
                          item.commit.map((emoji)=>{
                            return (
                              <Colxx key={emoji.icon} xxs="6" sm="4" md="3" lg="2" className="pl-0 pr-1 pt-1 pb-1">
                                <Card style={{height:"30px", borderRadius:"5px"}} className="m-0 w-100 d-flex justify-content-center align-items-center">
                                  <h6 className='m-0 p-0'>
                                    {emoji.icon}
                                    &#160;&#160;
                                    {emoji.amount}
                                  </h6>
                                </Card>
                              </Colxx>
                            )
                          })
                        }
                        <Colxx xxs="6" sm="4" md="3" lg="2" className="pl-0 pr-1 pt-1 pb-1">
                          <Card style={{height:"30px", borderRadius:"5px"}} className="m-0 w-100 d-flex justify-content-center align-items-center">
                            <h6 className='m-0 p-0'>
                              +
                              &#160;&#160;
                              <i className="simple-icon-emotsmile"/>
                            </h6>
                          </Card>
                        </Colxx>
                      </Row>
                    </div>
                  )
                })
              }
            </Colxx>
          </Row>
        </TabPane>
        
        {/* buy pass tab */}
        <TabPane tabId="Portal Setting">
          <Card className='p-4 m-0 m-md-4' style={{minWidth:"300px"}}>
            <h6 className='font-weight-bold'>
              Claim your portal URL
            </h6>
            <Row>
              <Colxx xxs="12" md="8">
                <Input 
                  style={{height:"40px", borderRadius:"10px"}} 
                  value={claimURL}
                  onChange={(e)=>{
                    setClaimURL(e.target.value)
                  }}/>
              </Colxx>
              <Colxx xxs="12" md="4">
                <Button className='mt-2 mt-md-0'>Claim</Button>
              </Colxx>
            </Row>
          </Card>
        </TabPane>
      </TabContent>
  </div>
  )
};
export default Portal;
