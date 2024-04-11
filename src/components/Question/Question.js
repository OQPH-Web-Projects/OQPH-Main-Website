import React, { useState} from 'react';
import './Question.css';

//Template for individual accordion in FAQs
function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className='Question-Container'>

      {/* className toggles between 'active' and '' for every click */}
      <button className='Question-Button' onClick={onClick}>
        <p className='Question-Text'>{question}</p>
      </button>

      {/*Wrapper toggles between show(open) and hidden*/}
      <div className={`Wrapper ${isOpen ? 'Open' : ''}`}>
        <div className='Answer-Container'>
          <p className='Answer-Text'>{answer}</p>
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
