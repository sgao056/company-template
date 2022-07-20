import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';

const MetaData = () => (
  <>
    <Row>
      <Colxx xxs="12">
        <Separator className="mb-5" />
      </Colxx>
    </Row>
    <Row>
      <Colxx xxs="12" className="mb-4">
        <p>
          <IntlMessages id="menu.meta-data" />
        </p>
      </Colxx>
    </Row>
  </>
);
export default MetaData;
