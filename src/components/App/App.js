import './App.css';

import Question from '../Question/Question';
import Home from '../Home/Home';
=======
import Partnership from '../Partnership/Partnership';
import questions from '../Question/questions.json'

function App() {
  return (
    <div>
      <Home />
      <Question />
      <Partnership action={"Volunteer"} info={"Lorem ipsum dolor sit amet"} text={"Become a Volunteer"}/>
      <Partnership action={"Partner With Us"} info={"Lorem ipsum dolor sit amet"} text={"Become a Partner"}/>
      <Partnership action={"Build A New Chapter"} info={"Lorem ipsum dolor sit amet"} text={"Check Requirements"}/>
      <Question questions={questions}/>
    </div>
  );
};

export default App;
