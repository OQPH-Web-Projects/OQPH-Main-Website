import './App.css';

import Button from '../Button/Button';
import Question from '../Question/Question';
import Testimonial from '../Testimonial/Testimonial';
import Partnership from '../Partnership/Partnership';
import questions from '../Question/questions.json'

function App() {
  return (
    <div>
      <Button text="Contact Us" />
      <Testimonial />
      <Partnership action={"Volunteer"} info={"Lorem ipsum dolor sit amet"} text={"Become a Volunteer"}/>
      <Partnership action={"Partner With Us"} info={"Lorem ipsum dolor sit amet"} text={"Become a Partner"}/>
      <Partnership action={"Build A New Chapter"} info={"Lorem ipsum dolor sit amet"} text={"Check Requirements"}/>
      <Question questions={questions}/>
    </div>
  );
};

export default App;
