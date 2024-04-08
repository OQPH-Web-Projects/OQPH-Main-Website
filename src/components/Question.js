import React from 'react';

//Template for individual accordion in FAQs
function AccordionItem({ question, answer }) {
  return (
    <div>
      <button>
        <p>{question}</p>
      </button>

      <div>
        <p>{answer}</p>
      </div>
    </div>
  );
};

//Returns a collection of accordions in FAQs
function Question({ questions }) {
  return (
    <div>
      {questions.map((data, index) => (
        <AccordionItem
          key={index}
          question={data.question}
          answer={data.answer}
        />
      ))}
    </div>
  );
};

export default Question;
