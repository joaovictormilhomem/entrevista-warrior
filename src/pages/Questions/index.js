import { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Question from '../../components/Question';
import api from '../../services/api'

export default function Questions({ amount }) {

  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const history = useHistory();

  function getQuestions() {
    api
      .get(`/api.php?amount=${amount}`)
      .then((response) => setQuestions(response.data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  useEffect(() => {
    if(responses.length === parseInt(amount) ){
      localStorage.setItem('LAST_PLAY_REPORT', JSON.stringify([questions, responses]));
      history.push('/report');
    }
  }, [amount, history, questions, responses])

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    responses.length < amount ?
      <Fragment>
        {
          questions[0] ?
            <Question questionProps={questions[responses.length]} responses={responses} setResponses={setResponses} /> :
            <p>Loading...</p>
        }
      </Fragment> :
      <p>Você terminou</p>
  );
}