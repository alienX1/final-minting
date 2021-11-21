import React from 'react';
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function FAQ() {
  return(
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <p>Frequently Asked Questions (FAQ)</p>
          
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Enter your question1 here" key="1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit saepe repudiandae molestiae, quidem veniam nam fugit exercitationem consectetur, necessitatibus tempora sint? Magnam quod repellat, tempora amet impedit exercitationem deserunt.</p>
            </Panel>
          <Panel header="Enter your question2 here" key="2">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo atque cumque ratione omnis neque suscipit praesentium, nam, rerum esse autem, nulla recusandae repudiandae id velit quo minima quam molestias distinctio.</p></Panel>
          <Panel header="Enter your question3 here" key="3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae suscipit beatae at est, placeat, veniam veritatis ea maiores voluptatum alias aperiam corrupti consequatur sed expedita error sint distinctio dolore voluptatibus!</p></Panel>
          
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur velit necessitatibus praesentium aliquid eos in neque recusandae, incidunt esse dolore voluptatum nesciunt quod soluta consequuntur voluptatibus ab excepturi nobis! Porro!</p>
          <Button type="primary" size="large"><i className="fas fa-envelope"></i> Email your question</Button>
        </div>
      </div>
    </div>  
  );
}

export default FAQ;