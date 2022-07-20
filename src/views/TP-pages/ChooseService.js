import React from 'react'
import { 
    Card,
    Row,
    Button
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { Colxx } from 'components/common/CustomBootstrap'
import Header from './TP-components/Header'

const data = [
    {
        id:1,
        icon:"simple-icon-picture",
        title:"Sell digital creation"
    },
    {
        id:2,
        icon:"simple-icon-key",
        title:"Member Pass"
    },
    {
        id:3,
        icon:"iconsminds-coins-2",
        title:"Donation"
    },
    {
        id:4,
        icon:"iconsminds-id-card",
        title:"Ticketing"
    },
    {
        id:5,
        icon:"iconsminds-coins-2",
        title:"Crowdfunding"
    }
]

const textData = [
    {
        id:1,
        title:"0% Commission",
        content:"turn platform commission to your profit"
    },
    {
        id:2,
        title:"Customizable Creator Fee",
        content:"Every resale generate x% Creator Fee direct into your pocket"
    },
    {
        id:3,
        title:"Fiat buy support",
        content:"No Wallet or cryptocurrency needed for buyers"
    },
    {
        id:4,
        title:"Holder reward option",
        content:"reward your holder’s loyalty"
    }
] 

function ChooseService() {
  return (
    <div className='container'>
        <Header mediumArea="none"/>
        <Row className='pl-4 pr-4 pt-5 pb-4'>
            <Colxx xxs="12">
                <h2 className='font-weight-bold'>Choose NFT based services</h2>          
            </Colxx>
        </Row>
        <Row className='pl-4 pr-4'>
            <Colxx xxs="12" md="6" lg="3" style={{minWidth:"200px"}}>
                <Link to="/publish-NFT">
                    <Card className="mb-5 p-4 d-flex justify-content-between" style={{height:"360px"}}>
                        <div>
                            <h1>
                                <i className={`${data[0].icon} font-weight-bold`}/>
                            </h1>
                            <h4 className='font-weight-bold' style={{height:"55px"}}>
                                {data[0].title}
                            </h4>
                            <p className='font-weight-light' style={{textAlign:"justify", lineHeight:"24px"}}>
                            Turn your <span className='font-weight-bold'>Art work</span>, <span className='font-weight-bold'>Music</span> or any <span className='font-weight-bold'>digital creation</span> into a on chain tradeable NFT. direct sale to ture fans, Earn resale Creater Fee with <span style={{textDecoration:"underline", textDecorationThickness:"1px"}}>0% commission</span>.
                            </p>
                        </div>
                        <Button className='p-1' style={{width:"50%"}}>
                            example
                        </Button>
                    </Card>
                </Link>
            </Colxx>
            <Colxx xxs="12" md="6" lg="3" style={{minWidth:"200px"}}>
                <Card className="mb-5 p-4 d-flex justify-content-between" style={{height:"360px"}}>
                        <div>
                            <h1>
                                <i className={`${data[1].icon} font-weight-bold`}/>
                            </h1>
                            <h4 className='font-weight-bold' style={{height:"55px"}}>
                                {data[1].title}
                            </h4>
                            <p className='font-weight-light' style={{textAlign:"justify", lineHeight:"24px"}}>
                            Using NFTs as <span className='font-weight-bold'>keys</span> to <span className='font-weight-bold'>unlock</span> your premium content, like <span className='font-weight-bold'>subscription</span> mode but <span style={{textDecoration:"underline", textDecorationThickness:"1px"}}>No commission</span> from any platform.
                            </p>
                        </div>
                        <Button className='p-1' style={{width:"50%"}}>
                            example
                        </Button>
                </Card>
            </Colxx>
            <Colxx xxs="12" md="6" lg="3" style={{minWidth:"200px"}}>
                <Card className="mb-5 p-4 d-flex justify-content-between" style={{height:"360px"}}>
                        <div>
                            <h1>
                                <i className={`${data[2].icon} font-weight-bold`}/>
                            </h1>
                            <h4 className='font-weight-bold' style={{height:"55px"}}>
                                {data[2].title}
                            </h4>
                            <p className='font-weight-light' style={{textAlign:"justify", lineHeight:"24px"}}>
                            Using wallet collect crypto or fiat from your donators, reward back them donation <span className='font-weight-bold'>certifications</span> or <span className='font-weight-bold'>badges</span> on chain.
                            </p>
                        </div>
                        <Button  className='p-1' style={{width:"50%"}}>
                            example
                        </Button>
                </Card>
            </Colxx>
            <Colxx xxs="12" md="6" lg="3" style={{minWidth:"200px"}}>
                <Card className="mb-5 p-4 d-flex justify-content-between" style={{height:"360px"}}>
                        <div>
                            <h1>
                                <i className={`${data[3].icon} font-weight-bold`}/>
                            </h1>
                            <h4 className='font-weight-bold' style={{height:"55px"}}>
                                {data[3].title}
                            </h4>
                            <p className='font-weight-light' style={{textAlign:"justify", lineHeight:"24px"}}>
                            Issue NFT as <span className='font-weight-bold'>tickets (redeemable)</span> to your next <span className='font-weight-bold'>online</span> commodity sales or <span className='font-weight-bold'>offline</span> event admission. Direct sale with <span style={{textDecoration:"underline", textDecorationThickness:"1px"}}>0% platform commission</span>.
                            </p>
                        </div>
                        <Button className='p-1' style={{width:"50%"}}>
                            example
                        </Button>
                </Card>
            </Colxx>
            <Colxx xxs="12" md="6" lg="3"  style={{minWidth:"200px"}}>
                <Card className="mb-5 p-4 d-flex justify-content-between" style={{height:"360px"}}>
                        <div>
                            <h1>
                                <i className={`${data[4].icon} font-weight-bold`}/>
                            </h1>
                            <h4 className='font-weight-bold' style={{height:"55px"}}>
                                {data[4].title}
                            </h4>
                            <p className='font-weight-light' style={{textAlign:"justify", lineHeight:"24px"}}>
                            Using NFT <span className='font-weight-bold'>crowdfund</span> your future project. Deliver commitment with <span className='font-weight-bold'>transparent</span> on chain Treasury. <span style={{textDecoration:"underline", textDecorationThickness:"1px"}}>No commission needed</span>.
                            </p>
                        </div>
                        <Button  className='p-1' style={{width:"50%"}}>
                            example
                        </Button>
                </Card>
            </Colxx>
        </Row>
        <Colxx xxs="12" className='p-4'>
            <p className='p-0 m-0 font-weight-light' style={{lineHeight:"24px"}}>
                With all above options:
            </p>
            <div>
                <ul className='pl-4'>
                    {textData.map((item)=>{
                    return (
                        <li key={item.id}>
                            <span className='font-weight-bold'>{item.title}: </span>
                            <span>{item.content}</span>
                        </li>
                    )
                    })}
                </ul>
            </div>
        </Colxx>
    </div>
  )
}

export default ChooseService