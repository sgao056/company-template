/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useRef} from 'react';
import { 
  Button, 
  Collapse, 
  Card,
  Input, 
  Row, 
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter, 
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { Colxx } from 'components/common/CustomBootstrap';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';
import './TP-scss/Publish-NFT.scss';
import DropzoneExample from './TP-components/DropzoneExample';
import Header from './TP-components/Header';

// const selectList = [
//   {
//     name:'About',
//     // component: About
//   },
//   {
//     name:'Gated Feed',
//     // component: About
//   },
//   {
//     name:'Gated Shop',
//     // component: About
//   },
//   {
//     name:'Chat',
//     // component: About
//   },
//   {
//     name:'Sells History',
//     // component: About
//   },
//   {
//     name:'Holders Leaderboard',
//     // component: About
//   },
//   {
//     name:'Calendar',
//     // component: About
//   },
//   {
//     name:'Poll',
//     // component: About
//   },
//   {
//     name:'Shared Album',
//     // component: About
//   }
// ]

const LastStepEnd = () => {
//   const [bottomNavHidden, setBottomNavHidden] = useState(false);
//   const [topNavDisabled, setTopNavDisabled] = useState(false);

//   const topNavClick = (stepItem, push) => {
//     if (topNavDisabled) {
//       return;
//     }
//     push(stepItem.id);
//   };

//   const onClickNext = (goToNext, steps, step) => {
//     step.isDone = true;
//     if (steps.length - 2 <= steps.indexOf(step)) {
//       setBottomNavHidden(true);
//       setTopNavDisabled(true);
//     }
//     if (steps.length - 1 <= steps.indexOf(step)) {
//       return;
//     }
//     goToNext();
//   };

//   const onClickPrev = (goToPrev, steps, step) => {
//     if (steps.indexOf(step) <= 0) {
//       return;
//     }
//     goToPrev();
//   };

  const [collapse1, setCollapse1] = useState(true);
  const [complete, setComplete] = useState(false);
  const [saveButton, setSaveButton] = useState(false);
  const [modalGenerate, setModalGenerate] = useState(false);
  const [modalChanged, setModalChanged] = useState(false);
  const [nftItem, setNftItem] = useState(
    {
      portrait:'',
      NFTname:'',
      description:'',
      author:'',
      recipient:[{
        id:1,
        address:'',
        split:''
      }],
      treasuryCollapse:false,
      treasury:[{
        address:'',
        split:''
      }],
      supply:0,
      salePrice:0,
      creatorFee:0,
      rewards:[
        {
          name:"Access to forging Portal content",
          description:"Edit ir update in dashboard",
          image:"/assets/img/portal/logo.png",
          checked:false,
        },
        {
          name:"Access to Discord Service",
          description:"Add server link in dashboard",
          image:"/assets/img/portal/logo.png",
          checked:false,
        },
        {
          name:"Redeem Merch",
          description:"Add store link in dashboard",
          image:"/assets/img/portal/logo.png",
          checked:false,
        },
        {
          name:"Access to IRL event",
          description:"Add event details in dashboard",
          image:"/assets/img/portal/logo.png",
          checked:false,
        },
        {
          name:"Access to Online event",
          description:"Add event details in dashboard",
          image:"/assets/img/portal/logo.png",
          checked:false,
        },
      ]
    },
  );
  
  const dropzone = useRef();

  const isPartComplete = (e) => {

    // part 2

    let flag1 = false 
    let flag2 = false
    if(e.target.value !== '' ){
      setSaveButton(true)
    }

    nftItem.recipient.forEach(
      (item)=>{
        if(item.address !== '' && item.split !== ''){
          flag1 = true
        }
        else{
          flag1 = false
        } 
      }
    )
    
    if(nftItem.treasuryCollapse === true){
      nftItem.treasury.forEach(
        (item)=>{
          if(item.address !== '' && item.split !== ''){
            flag2 = true
          }
          else{
            flag2 = false
          } 
        }
      )
    }
    else{
      flag2 = true
    }

    if(flag1 && flag2){
      setComplete(true)
    }
    else{
      setComplete(false)
    }
    
    // part 3
    if(e.target.value !== '' ){
      setSaveButton(true)
    }
    if(
      nftItem.supply !== 0 &&
      nftItem.salePrice !== 0 &&
      nftItem.creatorFee !== 0
    ){
      setComplete(true)
    }
    else{
      setComplete(false)
    }   
  }

  return (
      <div className="mt-0 container wizard wizard-default">
        {/* <Wizard>
          <Header mediumArea="tabs" topNavClick={topNavClick}/>
          <Header mediumArea=""/>
          <Steps>
            <Step
              id="step1"
              name="step 1"
              desc="Create NFT"
            > */}
        <Header mediumArea=""/>
        <div className="wizard-basic-step">
              <Row>
                  <Colxx xxs="12" md="4">
                      <p className='p-3 m-0'>Digital Creation</p>  
                      <Card className='p-4 w-100'>
                          <img src="/assets/img/NFT/example-NFT.jpg" alt="" />
                          <h4 className='font-weight-bold mt-3'>{nftItem.NFTname}</h4>
                          <p>Created by <span className='font-weight-bold'>{nftItem.author}</span></p>
                          <div className="mb-3 pb-0" style={{borderBottom:"1px solid", height:"1px"}}/>
                          <div className="mb-5">{nftItem.description}</div>
                          <div className='d-flex justify-content-between'>
                              <h4 className='font-weight-bold'>{nftItem.supply} Total</h4>
                              <h4 className='font-weight-bold'>{nftItem.salePrice} ETH </h4>
                          </div>
                          <p className='d-flex justify-content-end'>
                              <span>{(nftItem.salePrice*1126.44).toFixed(2)}</span>
                              &nbsp; 
                              <span>USD</span>
                          </p>
                          <div className='d-flex justify-content-end'>
                              <Button>Test Buy</Button>
                          </div>
                      </Card>
                  </Colxx>
                  <Colxx xxs="12" md="7">
                      <Row>
                        <Colxx xxs="7">
                          <Row className='pt-3 pb-3 m-0'>
                            <Colxx className="p-0 m-1">
                              <Button 
                                className='p-1 w-100' 
                                disabled={!saveButton}
                                onClick={()=>{setSaveButton(false)}}
                              >Save draft</Button>
                            </Colxx>
                            <Colxx className="p-0 m-1">
                              <div>
                                <Button
                                  className='p-1 w-100'
                                  onClick={() => {
                                    setInterval(()=>{
                                      setModalChanged(true)
                                    },5000)
                                    setModalGenerate(true)
                                  }}
                                >
                                  Generate
                                </Button>
                                <Modal
                                  isOpen={modalGenerate}
                                  toggle={() => setModalGenerate(!modalGenerate)}
                                >
                                  { modalChanged 
                                    ?
                                    <>
                                    <ModalHeader>
                                        Your Memberpass has been  successfully generated! 
                                    </ModalHeader>
                                    <ModalBody>
                                      <p className='m-0 p-0'>
                                        Go project dashboard setup everything before publish.
                                      </p>
                                    </ModalBody>
                                    <ModalFooter>
                                      <Link to="/user">
                                        <Button>
                                          Project Dashboard
                                        </Button>  
                                      </Link>
                                    </ModalFooter>
                                    </>
                                    :
                                    <>
                                      <ModalHeader>
                                        Generating Contract
                                      </ModalHeader>
                                      <ModalBody>
                                        <p className='m-0 p-0'>
                                          Will complete a fake demo in 5 seconds!
                                        </p>
                                        <div className='d-flex justify-content-center align-items-center' style={{height:"200px"}}>
                                          <div className='publish_NFT_loading'/>
                                        </div>
                                      </ModalBody>
                                    </>
                                  }
                                </Modal>
                              </div>
                            </Colxx>
                          </Row>
                        </Colxx>
                      </Row>

                      {/* First Collapse */}

                      <Card className='m-2'>
                          <Button
                              className='d-flex justify-content-start'
                              style={{backgroundColor:"gray", borderRadius: !collapse1 ? "10px":"10px 10px 0 0 ", borderColor:"transparent"}}
                              onClick={() => {
                                setCollapse1(!collapse1)
                              }}
                          > 
                            <h6 className='m-0 font-weight-bold'>
                              <i className='simple-icon-key font-weight-bold mr-2'/>
                              Member Pass Basics
                            </h6> 
                          </Button>
                          <Collapse isOpen={collapse1}>
                            <p style={{margin:"8px 20px", borderRadius:"15px", height:"30px", backgroundColor:"darkred"}} className="pt-3 pb-3 d-flex justify-content-center align-items-center">
                              <i className="iconsminds-start-2 mr-lg-3" style={{transform:"rotate(90deg)", fontWeight:"bold"}}/>
                              Terms are non-editable&nbsp;<p className='font-weight-bold m-0 p-0' style={{textDecoration:"underline", textDecorationThickness:"1px"}}>after</p>&nbsp;Contract Generated
                            </p>                                  
                            <div style={{padding:"8px 20px"}}>
                              <h6 className='font-weight-bold pb-2'>Pass Design</h6>
                              <DropzoneExample 
                                ref={dropzone}
                                style={{borderRadius:"10px"}}
                              />
                              {/* <img src={nftItem.portrait} alt="hello" />
                              <Input type="file" 
                              onChange={
                                (e)=>{
                                  setNftItem({
                                    ...nftItem,
                                    portrait:e.target.value
                                  })
                                }
                              }/> */}
                              <p className='pt-2 m-0 font-weight-light' style={{fontSize:"10px", color:"gray" }}>PNG / JPG / GIF / MP3 / MP4</p>
                              <p className='p-0 m-0 font-weight-light' style={{fontSize:"10px", color:"gray" }}>2500X2500</p>
                            </div>
                            <div style={{padding:"8px 20px", margin:0}}>
                              <h6 className='font-weight-bold'>Pass Name</h6>
                              {/* <p>Title description will place here. Title description will place here. Title description will place here.</p> */}
                              <Input
                                style={{borderRadius:"10px"}}
                                type="text"
                                name="name"
                                placeholder="Description will place here"
                                value={nftItem.NFTname}
                                onChange={(e) => setNftItem(
                                  {
                                  ...nftItem,
                                  NFTname:e.target.value
                                  }
                                )}
                                onFocus = {() => setSaveButton(false)}
                                onBlur = {(e) => {
                                  if(e.target.value !== '' ){
                                    setSaveButton(true)
                                  }
                                  if(
                                    nftItem.NFTname !== '' &&
                                    nftItem.author !== '' &&
                                    nftItem.description !== ''
                                  ){
                                    setComplete(true)
                                  }
                                  else{
                                    setComplete(false)
                                  }                     
                                }}
                              />
                            </div>
                            <div style={{padding:"8px 20px", margin:0}}>
                              <h6 className='font-weight-bold'>Created By</h6>
                              {/* <p>Title description will place here. Title description will place here. Title description will place here.</p> */}
                              <Input
                                style={{borderRadius:"10px"}}
                                type="text"
                                name="author"
                                placeholder="Description will place here"
                                value={nftItem.author}
                                onChange={(e) => setNftItem(
                                  {
                                  ...nftItem,
                                  author:e.target.value
                                  }
                                )}
                                onFocus = {() => setSaveButton(false)}
                                onBlur = {(e) => {
                                  if(e.target.value !== '' ){
                                    setSaveButton(true)
                                  } 
                                  if(
                                    nftItem.NFTname !== '' &&
                                    nftItem.author !== '' &&
                                    nftItem.description !== ''
                                  ){
                                    setComplete(true)
                                  }
                                  else{
                                    setComplete(false)
                                  }                       
                                }}
                              />
                            </div>
                            <div style={{padding:"8px 20px", margin:0}}>
                              <h6 className='font-weight-bold'>Description</h6>
                              {/* <p>Title description will place here. Title description will place here. Title description will place here.</p> */}
                              <Input
                                style={{borderRadius:"10px"}}
                                type="text"
                                name="description"
                                placeholder="Description will place here"
                                value={nftItem.description}
                                onChange={(e) => setNftItem(
                                  {
                                  ...nftItem,
                                  description:e.target.value
                                  }
                                )}
                                onFocus = {() => setSaveButton(false)}
                                onBlur = {(e) => {
                                  if(e.target.value !== '' ){
                                    setSaveButton(true)
                                  }     
                                  if(
                                    nftItem.NFTname !== '' &&
                                    nftItem.author !== '' &&
                                    nftItem.description !== ''
                                  ){
                                    setComplete(true)
                                  }
                                  else{
                                    setComplete(false)
                                  }                  
                                }}
                              />
                            </div>
                            <div style={{padding:"8px 20px", margin:0}}>
                              <h6 className='font-weight-bold'>Supply</h6>
                              {/* <p>Title description will place here. Title description will place here. Title description will place here.</p> */}
                              <Input
                                style={{borderRadius:"10px"}}
                                type="text"
                                name="supply"
                                placeholder="Description will place here"
                                value={nftItem.supply}
                                onChange={(e) => setNftItem(
                                  {
                                  ...nftItem,
                                  supply:e.target.value
                                  }
                                )}
                                onFocus = {() => setSaveButton(false)}
                                onBlur = {(e) => {
                                  isPartComplete(e)  
                                }}
                              />
                            </div>
                            <div style={{padding:"8px 20px", margin:0}}>
                              <h6 className='font-weight-bold'>Sale Price</h6>
                              {/* <p>Title description will place here. Title description will place here. Title description will place here.</p> */}
                              <Input
                                style={{borderRadius:"10px"}}
                                type="text"
                                name="salePrice"
                                placeholder="Description will place here"
                                value={nftItem.salePrice}
                                onChange={(e) => setNftItem(
                                  {
                                  ...nftItem,
                                  salePrice:e.target.value
                                  }
                                )}
                                onFocus = {() => setSaveButton(false)}
                                onBlur = {(e) => {
                                  isPartComplete(e)                    
                                }}
                              />
                            </div>
                            <div style={{padding:"8px 20px", margin:0}}>
                              <h6 className='font-weight-bold'>Creator Fee %</h6>
                              {/* <p>Title description will place here. Title description will place here. Title description will place here.</p> */}
                              <Input
                                style={{borderRadius:"10px"}}
                                type="text"
                                name="creatorFee"
                                placeholder="Description will place here"
                                value={nftItem.creatorFee}
                                onChange={(e) => setNftItem(
                                  {
                                  ...nftItem,
                                  creatorFee:e.target.value
                                  }
                                )}
                                onFocus = {() => setSaveButton(false)}
                                onBlur = {(e) => {
                                  isPartComplete(e)                    
                                }}
                              />
                            </div>
                            <div style={{padding:"8px 20px", margin:0}}>
                              <div className='d-flex justify-content-between'>
                                <h6 className='font-weight-bold'>Recipient wallet address</h6>
                                {/* <p>Title description will place here. Title description will place here. Title description will place here.</p> */}
                                <div>Split %</div>
                              </div>
                              {nftItem.recipient.map((item)=>{
                                return(
                                  <Row key={item} className="mb-3">
                                    <Colxx xxs="10">
                                      <Input
                                        style={{borderRadius:"10px"}}
                                        type="textarea"
                                        name="recipient-address"
                                        placeholder="Description will place here"
                                        value={nftItem.recipient[0].address}
                                        onChange={(e) => {
                                          const formArray = [...nftItem.recipient]
                                          formArray.splice(0,1,{
                                            ...formArray[0],
                                            address: e.target.value,
                                          })
                                          setNftItem(
                                          { 
                                            ...nftItem,
                                            recipient:formArray,
                                          }
                                        )}}

                                        onFocus = {() => setSaveButton(false)}
                                        onBlur = {(e) => {
                                          isPartComplete(e)                    
                                        }}
                                      />
                                    </Colxx>
                                    <Colxx xxs="2">
                                      <Input
                                          style={{borderRadius:"10px"}}
                                          type="textarea"
                                          name={item.id}
                                          value={item.split}
                                          onChange={(e) => {
                                            const newArray = nftItem.recipient
                                            newArray.forEach((rec)=>{
                                              if(rec.id === item.id){
                                                rec.split = e.target.value
                                              }
                                            })
                                            setNftItem({
                                              ...nftItem,
                                              recipient:newArray
                                            })
                                            console.log(nftItem.recipient)
                                        }}
                                          onFocus = {() => setSaveButton(false)}
                                          onBlur = {(e) => {   
                                          isPartComplete(e)        
                                          }}
                                        />
                                    </Colxx>
                                  </Row>
                                )
                              })}                            
                              <div className=' mt-3 rtl'>
                                <Button
                                  onClick={()=>{
                                    if(window.confirm('Are you sure to add a new recipient?')){
                                      const newArray = nftItem.recipient
                                      newArray.push({
                                        id:newArray[newArray.length-1].id+1,
                                        address:'',
                                        split:''
                                      })
                                      setNftItem({
                                        ...nftItem,
                                        recipient:newArray
                                      })
                                    }
                                  }}
                                >Add a Recipient</Button>
                              </div>
                            </div>
                            <div style={{padding:"8px 20px", margin:nftItem.treasuryCollapse ? 0 : "0 0 30px 0"}} className='d-flex justify-content-between'>
                                <h6 className='font-weight-bold'>Treasury</h6>
                                <div>
                                <Switch
                                    className="custom-switch custom-switch-primary"
                                    checked = {nftItem.treasuryCollapse}
                                    onChange={() => {
                                      setNftItem({
                                        ...nftItem,
                                        treasuryCollapse:!nftItem.treasuryCollapse
                                      })
                                    }}
                                />
                                </div>
                            </div>
                            <div style={{padding:"8px 20px", margin:"0 0 30px 0", display: nftItem.treasuryCollapse ? "block" : "none"}}>
                              <div className='d-flex justify-content-between'>
                                <h6 className='font-weight-bold'>Treasury wallet address</h6>
                                {/* <p>Title description will place here. Title description will place here. Title description will place here.</p> */}
                                <div>Split %</div>
                              </div>
                              <Row>
                                <Colxx xxs="10">
                                  <Input
                                    style={{borderRadius:"10px"}}
                                    type="textarea"
                                    name="treasury-address"
                                    placeholder="Description will place here"
                                    value={nftItem.treasury[0].address}
                                    onChange={(e) => {
                                      const formArray = [...nftItem.treasury]
                                      formArray.splice(0,1,{
                                        ...formArray[0],
                                        address: e.target.value,
                                      })
                                      setNftItem(
                                      { 
                                        ...nftItem,
                                        treasury:formArray,
                                      }
                                    )}}

                                    onFocus = {() => setSaveButton(false)}
                                    onBlur = {(e) => {
                                      isPartComplete(e)     
                                    }}
                                  />
                                </Colxx>
                                <Colxx xxs="2">
                                <Input
                                    style={{borderRadius:"10px"}}
                                    type="textarea"
                                    name="treasury-split"
                                    value={nftItem.treasury[0].split}
                                    onChange={(e) => {
                                      const formArray = [...nftItem.treasury]
                                      formArray.splice(0,1,{
                                        ...formArray[0],
                                        split: e.target.value,
                                      })
                                      setNftItem(
                                      { 
                                        ...nftItem,
                                        treasury:formArray,
                                      }
                                    )}}
                                    onFocus = {() => setSaveButton(false)}
                                    onBlur = {(e) => {       
                                      isPartComplete(e)   
                                    }}
                                  />
                                </Colxx>
                              </Row>
                            </div>
                            <div style={{padding:"8px 20px", margin:0}}>
                              <div className='d-flex justify-content-between'>
                                <h6 className='font-weight-bold'>Holders Reward</h6>
                              </div>
                              <div className='m-3'>
                              {
                                nftItem.rewards.map((item)=>{
                                  return (
                                    <Row key={item.name} style={{borderBottom:"1px solid", height:"60px"}}>
                                      <Colxx xxs="2" lg="1" className="p-2">
                                        <img style={{width:"40px", height:"40px"}} src={item.image} alt="" />
                                      </Colxx>
                                      <Colxx xxs="9" lg="10" className="mt-2 mb-2">
                                        <p className='font-weight-bold m-0 p-0'>
                                          {item.name}
                                        </p>
                                        <p>
                                          {item.description}
                                        </p>
                                      </Colxx>
                                      <Colxx xxs="1"className="d-flex justify-content-center align-items-center m-0 p-0">
                                        <input 
                                          className='publish_checkbox' 
                                          name={item.name}
                                          type="checkbox"
                                          value={item.checked}
                                          onChange={()=>{
                                            const newArray = nftItem.rewards
                                            newArray.forEach((reward)=>{
                                              if(reward.name === item.name){
                                                reward.checked = !reward.checked
                                              }
                                            })
                                            setNftItem({
                                              ...nftItem,
                                              rewards:newArray
                                            })
                                          // console.log(nftItem.rewards)
                                          }}
                                        /> 
                                      </Colxx>
                                    </Row>
                                  )
                                })
                              }
                                <div className=' mt-3 rtl'>
                                  <Button
                                    onClick={()=>{
                                      if(window.confirm('Are you sure to add a new holders reward?')){
                                        console.log("1")
                                      }
                                    }}
                                  >Add a Reward</Button>
                                </div>
                              </div>
                            </div>
                          </Collapse>
                      </Card>
                  </Colxx>
              </Row>
        </div>
            {/* </Step>

            <Step
              id="step2"
              name="step 2"
              desc="Wrap NFT"
            >
              <div className="wizard-basic-step">
                <Row>
                  <Colxx xxs="8" className="d-flex align-items-center">
                    <p className="m-0 p-0">Choose which function you want to wrap within your NFT</p>
                  </Colxx>
                  <Colxx xxs="4">
                    <Row className='pt-3 pb-3 m-0'>
                      <Colxx className="p-0 m-1">
                        <Button className='p-1 w-100'>save draft</Button>
                      </Colxx>
                      <Colxx className="p-0 m-1">
                        <Button className='p-1 w-100'>next</Button>
                      </Colxx>
                    </Row>
                  </Colxx>  
                </Row>
                <Row>
                  <Colxx xxs="10">
                    <Row style={{height:"50px", backgroundColor:"gray", borderRadius:"10px 10px 0 0"}}>
                      <Colxx xxs="4" lg="4" className="d-flex align-items-center">
                        <p className='m-0 font-weight-bold'>Your Web Warped NFT URL: </p>
                      </Colxx>
                      <Colxx xxs="8" lg="8" className="d-flex align-items-center">
                        <div className='m-0 d-flex justify-content-between w-100' style={{border:"1px solid",borderRadius:"20px",height:"36px"}}>
                          <Row className='d-flex align-items-center' style={{width:"80%"}}>
                            <Colxx className='d-flex align-items-center' xxs="2">
                              <i className='simple-icon-globe ml-3'/>
                            </Colxx>
                            <Colxx xxs="10" style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",}}>
                              {`https://founder.forging.one/${nftItem.NFTname.replace(/\s+/g, '_').concat('_2022')}`}
                            </Colxx>
                          </Row>
                          <div className='d-flex align-items-center'>
                            <i className='iconsminds-files font-weight-bold' style={{transform:"scale(1.2)"}}/>
                            <i className='simple-icon-arrow-right-circle m-3' style={{transform:"scale(1.6)"}}/>
                          </div>
                        </div>
                      </Colxx>
                    </Row>
                    <Row style={{backgroundColor:"DimGrey", borderRadius:"0 0 10px 10px"}}>
                      <Colxx xxs="12" md="5" className="mt-3 mb-5">
                      <h6 className='font-weight-bold'>{nftItem.NFTname}</h6>
                        <Card className='p-4 w-100'>
                            <img src="/assets/img/NFT/example-NFT.jpg" alt="" />
                            <p className='mt-2 mb-2'>Created by <span className='font-weight-bold'>{nftItem.author}</span></p>
                            <div className='d-flex justify-content-between'>
                                <p className='m-0 font-weight-bold'><i className='simple-icon-grid'/>&nbsp;&nbsp;112 / {nftItem.amount}</p>
                                <p className='m-0 font-weight-bold'>{nftItem.price} ETH </p>
                            </div>
                            <p className='d-flex justify-content-end'>
                                <span>{(nftItem.price*1126.44).toFixed(2)}</span>
                                &nbsp; 
                                <span>USD</span>
                            </p>
                            <div className="mb-3 pb-0" style={{borderBottom:"1px solid", height:"1px"}}/>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center' >
                                  <i className='simple-icon-control-play'/>
                                  &nbsp;&nbsp; 
                                  <span style={{textDecoration:"underline", textDecorationThickness:"1px"}}>Contract Detail</span>
                                </div>
                                <Button className='p-2' style={{borderRadius:"10px"}}>Buy</Button>
                            </div>
                        </Card>
                      </Colxx>
                      <Colxx xxs="12" md="7" className="mt-3 mb-5">
                        <h6 className='font-weight-bold'>About</h6>
                        <Card className='p-3'>
                          <img src="/assets/img/profiles/1.jpg" alt="" className='mb-3' style={{height:"30px", width:"30px", borderRadius:"15px"}}/>
                          <Input type="textarea" placeholder="Write you post text here"/>
                          <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex justify-content-bwtween'>
                              <i className='simple-icon-picture m-2'/>
                              <i className='simple-icon-camrecorder m-2'/>
                              <i className='simple-icon-link m-2'/>
                            </div>
                            <div className='m-2'>
                              <Button className="p-1" style={{width:"80px", borderRadius:"10px"}}>Post</Button>
                            </div>
                          </div>
                        </Card>
                      </Colxx>
                    </Row>
                  </Colxx>
                  <Colxx xxs="2">
                    {
                      selectList.map((item)=>{
                        return(
                          <div key={item.name}>
                            <Button className='m-1' style={{width:"100%", minWidth:"130px", height:"50px", borderRadius:"10px"}}>
                              <h6 className='font-weight-bold m-0 p-0'>
                                {item.name} 
                              </h6>
                            </Button>                                
                          </div>
                        )
                      })
                    }
                  </Colxx>
                </Row>
              </div>
            </Step>

            <Step
              id="step3"
              name="step 3"
              desc="Publish NFT"
            >
              <div className="wizard-basic-step">
                <Form>
                  <FormGroup>
                    Publish NFT
                  </FormGroup>
                </Form>
              </div>
            </Step>

            <Step id="step4" hideTopNav>
              <div className="wizard-basic-step text-center">
                <h2 className="mb-2">
                  Thank you!
                </h2>
                <p>
                  You have completed all steps
                </p>
                <Link to="/NFT-list">
                  <Button>No problem!</Button>                
                </Link>
              </div>
            </Step>
          </Steps> */}

          {/* <BottomNavigation
            onClickNext={onClickNext}
            onClickPrev={onClickPrev}
            className={`justify-content-center m-4 ${
              bottomNavHidden && 'invisible'
            }`}
            prevLabel="Previous"
            nextLabel="&nbsp;&nbsp;Next&nbsp; &nbsp; "
           />
        </Wizard> */}
      </div>
  );
};
export default injectIntl(LastStepEnd);
