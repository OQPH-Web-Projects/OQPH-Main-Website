import React, { useState } from 'react';
// import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './Question.css';

//Template for individual accordion in FAQs
function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className='question-container'>

      {/* className toggles between 'active' and '' for every click */}
      <button className='question-button' onClick={onClick}>
        <p className='question-text'>{question}</p>
        {/* Conditional rendering: if not open, Arrow Down. if open, Arrow Up  */}
        {/* {!isOpen? <IoIosArrowDown  className='icon'/>: <IoIosArrowUp  className='icon'/>} */}
      </button>

      {/*Wrapper toggles between show(open) and hidden*/}
      <div className={`wrapper ${isOpen ? 'open' : ''}`}>
        <div className='answer-container'>
          <hr></hr>
          <p className='answer-text'>{answer}</p>
        </div>
      </div>
    </div>
  );
};
//Returns a collection of accordions in FAQs
function Question({ questions }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(prevIndex => prevIndex === index? null: index)
  }
  return (
    <div>
      {questions.map((data, index) => (
        <AccordionItem
          key={index}
          question={data.question}
          answer={data.answer}
          isOpen={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};
export default Question;