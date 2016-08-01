import chai from "chai";
import React from 'react';
import equalJSX from 'chai-equal-jsx';
import { createRenderer } from 'react-addons-test-utils';

chai.should();
chai.use(equalJSX);
