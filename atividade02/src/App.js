import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Question from './components/Question';
import QuestionNumber from './components/QuestioNumber';

//solve Components:
import FunctionContextA from './components/06_context/FunctionContextA';

function App() {
  return (
    <div className="App">
        <Header />
        <Body>
          <QuestionNumber>1</QuestionNumber>
          <Question>
            <FunctionContextA />
          </Question>
          <QuestionNumber>2</QuestionNumber>
          <Question>
            <p></p>
          </Question>
        </Body>
    </div>
  );
}

export default App;