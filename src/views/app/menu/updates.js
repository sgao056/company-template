import React, {useState} from 'react';
import { 
  Row,
  Card, 
  Input, 
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle 
} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';


const Updates = () => {
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
  return(
  <>
    <Row>
      <Colxx xxs="12" lg="11">
        <Row>
          <Colxx xxs="11">
            <Card className='p-4 m-4 w-100'>
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
      <Colxx xxs="12" lg="11">
        {
          blogs.map((item)=>{
            return(
              <div key={item.id} className="p-4 ml-4 w-100">
                <Row className='mt-3 mb-3'>
                  <Colxx xxs="11" className='w-100 p-0'>
                    <img src={item.pic} alt="" className='w-100' style={{borderRadius:"10px"}}/>
                  </Colxx>
                  <Colxx xxs="1" className='pl-1'>
                    <Card className='p-2' style={{borderRadius:"5px",minWidth:"62px"}}>
                      <span>
                        <i className='simple-icon-pencil mr-2'/>Edit
                      </span>
                    </Card>
                  </Colxx>
                </Row>
                <Row className='m-0'>
                  <Colxx xxs="12" lg="1">
                    <img src={item.portrait} alt="" className='mb-3' style={{height:"30px", width:"30px", borderRadius:"15px"}}/>
                  </Colxx>
                  <Colxx xxs="12" lg="11">{item.mainText}</Colxx>
                </Row>
                <Row className='m-0'>
                  {
                    item.commit.map((emoji)=>{
                      return (
                        <Colxx key={emoji.icon} xxs="2">
                          <Card style={{height:"30px", borderRadius:"5px"}} className="w-100 d-flex justify-content-center align-items-center">
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
                  <Colxx xxs="2">
                    <Card style={{height:"30px", borderRadius:"5px"}} className="w-100 d-flex justify-content-center align-items-center">
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
  </>
  )
};
export default Updates;
