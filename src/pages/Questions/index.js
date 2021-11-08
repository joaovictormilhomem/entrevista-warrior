import { Fragment, useEffect, useState } from 'react';
import Question from '../../components/Question';
import api from '../../services/api'

export default function Questions({ amount }) {

  const [questions, setQuestions] = useState();

  function getQuestions() {
    api
      .get(`/api.php?amount=${amount}`)
      .then((response) => setQuestions(response.data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  useEffect(() => {
    getQuestions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {questions ? questions.map((questionProps, index) => <Question key={index} questionProps={questionProps} />) : <p>Loading...</p>}
    </Fragment>
  );
}