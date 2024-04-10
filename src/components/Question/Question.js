import React, { useState} from 'react';
import './Question.css';

//Template for individual accordion in FAQs
function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className='Question-Container'>

      {/* className toggles between 'active' and '' for every click */}
      <button className={`Question-Button ${isOpen ? 'active' : ''}`} onClick={onClick}>
        <p className='Question-Text'>{question}</p>
      </button>

      {/* Display of Answer Container toggles between show(block) and hide(none)*/}
      <div className='Answer-Container' style={isOpen? { display:"block" }: { display: "none" }}>
        <p className='Answer-Text'>{answer}</p>
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
