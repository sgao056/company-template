import React from 'react';
import { Container, Row, Card, InputGroup, Input, InputGroupAddon, FormGroup, Button } from 'reactstrap';

import { Formik, Form} from 'formik';

import { Colxx } from 'components/common/CustomBootstrap';

const NewCommunity = () => {
  return (
    <Container style={{height:"80vh"}}>
      <Row className="h-100" >
        <Colxx xxs="12" md="10" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="position-relative image-side ">
              <p className="text-white h2 mb-5">Create new community</p>
              <p className="white mb-5">
              Community contain one or multiple NFTs you create or import. Each community has one and only portal URL for user to mint or receive reward.
              </p>
            </div>
            <div className="form-side">
              <Formik>
                {() => (
                  <Form className="av-tooltip tooltip-label-bottom">
                    
                    <FormGroup className="form-group mt-5">
                      <InputGroup className="mb-5">
                        <Input placeholder="Name your community" />
                      </InputGroup>
                    </FormGroup>

                    <FormGroup className="form-group">
                      <InputGroup className="mb-5">
                        <Input placeholder="communityname" />
                        <InputGroupAddon addonType="append">
                          @example.com
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                    
                    <div className="d-flex justify-content-between rtl align-items-center">
                      <Button
                        color="primary"
                        className='btn-shadow btn-multiple-state'
                        size="lg">
                        <span className="label">
                          Next
                        </span>
                      </Button>
                    </div>

                  </Form>
                )}
              </Formik>
            </div>
          </Card>
        </Colxx>
      </Row>
    </Container>
  );
};


export default NewCommunity;
