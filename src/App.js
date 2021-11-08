import { useEffect, useState } from 'react';
import './App.css';
import api from './services/api'

function App() {

  const [questions, setQuestions] = useState();
  
  useEffect(() => {
    api
      .get("/api.php?amount=5")
      .then((response) => setQuestions(response.data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      {questions ? questions.map((questionData, index) => <p key={index} dangerouslySetInnerHTML={{__html:questionData.question}}/>) : <p>Loading...</p>}
    </div>
  );
}

export default App;
