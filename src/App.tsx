import React, {
  useState
} from 'react';

// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Panel from './components/panel';
import Tree from './components/tree';

import { 
  Container,
  Row,
  Col, 
} from "react-bootstrap";

import {
  TreeNode
} from './types';

import {
  DEFAULT_LIST,
  DEFAULT_ROW_NUM
} from './configs/tree';

function App() {
  const [ list, setList ] = useState<TreeNode[]>(DEFAULT_LIST);
  const [ rowNum, setRowNum ] = useState<number>(DEFAULT_ROW_NUM);

  return (
    <Container>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <Panel 
            list={list} 
            onChangeList={(newList: TreeNode[]) => {
              setList(newList)

              if (newList.length < rowNum) {
                setRowNum(newList.length);
              }
            }}
          />
        </Col>

        <Col sm={12} md={6} lg={6}>
          <Tree 
            list={list} 
            rowNum={rowNum}
            onChangeRowNum={(newRowNum) => setRowNum(newRowNum)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
