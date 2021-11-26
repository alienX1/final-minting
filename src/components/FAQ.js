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
  width: 60%;
  margin: 50px auto;
  @media screen and (max-width: 574px){
    width:95%;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 35px;
`;

const Wrap = styled.div`
  background: transparent;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  text-align: center;
  cursor: pointer;
  padding: 0;
  margin: 15px 0;
  h1 {
    font-size: 1.3rem;
    font-weight:900;
    color: #fff;
  }
  span {
    margin-right: -1rem;
  }
`;

const Dropdown = styled.div`
  background: transparent;
  color: ##bdbfbf;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1rem;
    font-weight:900;
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
        marginTop:'80px',
        display:'flex',
        fontSize:'5rem',
        justifyContent:'center',
        fontWeight: '700',
        fontFamily: 'sans-serif'
        
      }} id='faq'>FAQ</b>
      
      {/* font-size: 5rem;
    font-weight: 900;
    margin-bottom: 60px; */}

      <AccordionSection >
        <Container>
          {Data.map((item, index) => {
            return (
              <>
              
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span >{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
                
                <hr/>
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default FAQ;