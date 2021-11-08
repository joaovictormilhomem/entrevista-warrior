import { useEffect, useState } from 'react';
import './App.css';
import Question from './components/Question';
import api from './services/api'

function App() {

  const [questions, setQuestions] = useState();

  useEffect(() => {
    api
      .get("/api.php?amount=1")
      .then((response) => setQuestions(response.data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      {questions ? questions.map((questionProps,index) => <Question key={index} questionProps={questionProps} />) : <p>Loading...</p>}
    </div>
  );
}

export default App;
