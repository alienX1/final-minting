// import React from 'react';
// import { Collapse, Button } from 'antd';

// const { Panel } = Collapse;


// function FAQ() {
//   return(
//     <div id="faq" className="block faqBlock">
//       <div className="container-fluid">
//         <div className="titleHolder">
//           <p style={{
//             fontSize:'3rem',
//             fontWeight:'900',
//             textAlign:'center'
//           }}>FAQ</p>

//         </div>
//         <Collapse defaultActiveKey={['1']}>
//           <Panel header="Enter your question1 here" key="1">
//             <p color='black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit saepe repudiandae molestiae, quidem veniam nam fugit exercitationem consectetur, necessitatibus tempora sint? Magnam quod repellat, tempora amet impedit exercitationem deserunt.</p>
//             </Panel>
//           <Panel header="Enter your question2 here" key="2">
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo atque cumque ratione omnis neque suscipit praesentium, nam, rerum esse autem, nulla recusandae repudiandae id velit quo minima quam molestias distinctio.</p></Panel>
//           <Panel header="Enter your question3 here" key="3">
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae suscipit beatae at est, placeat, veniam veritatis ea maiores voluptatum alias aperiam corrupti consequatur sed expedita error sint distinctio dolore voluptatibus!</p></Panel>

//         </Collapse>
//       </div>
//     </div>  
//   );
// }

// export default FAQ;



import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  margin: auto;
  margin: 50px 0;
  // box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: transparent;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 70px auto
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 1rem;
    font-size: 1.5rem;
    color: #fff;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  // background: #1c1c1c;
  background: transparent;
  color: #00ffb9;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1rem;
  }
`;

const FAQ = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <p id='faq' style={{
          fontSize:'3rem',
          fontWeight:900
        }}>FAQ</p>
        <Container>
          {Data.map((item, index) => {
            return (
              <>

                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default FAQ;