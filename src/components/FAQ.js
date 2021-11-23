import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  margin: auto;
`;

const Wrap = styled.div`
  background: transparent;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  margin: 70px auto
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 0.5rem;
    font-size: 1.3rem;
    color: #fff;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: transparent;
  color: ##bdbfbf;
  width: 97%;
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
      <b style={{
        fontSize:'3rem',
        marginTop:'30px'
      }} id='faq'>FAQ</b>
      <AccordionSection >
        
        <Container>
          {Data.map((item, index) => {
            return (
              <>
              <hr/>
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