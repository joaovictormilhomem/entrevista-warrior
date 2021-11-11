import { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import { Button, Container, Typography, Box, List, ListItem } from "@material-ui/core";
import './style.css'

function Report() {

  const [lastPlayReport, setLastPlayReport] = useState(false);
  const [correctAnswersNumber, setCorrectAnswersNumber] = useState(0);
  const history = useHistory();

  function getLastPlayReport() {
    const storageLastPlayReport = JSON.parse(localStorage.getItem("LAST_PLAY_REPORT"));
    setLastPlayReport(storageLastPlayReport);
  }

  function handleBackClick() {
    history.push('/');
  }

  useEffect(() => { getLastPlayReport() }, []);

  useEffect(() => { // Esse useEffect conta quantas perguntas o usuário acertou.
    let virtualCorrectAnswersNumber = 0;
    lastPlayReport && lastPlayReport[0].forEach((question, index) => {
      const correctAnswer = question.correct_answer;
      const selectedAnswer = lastPlayReport[1][index];

      if (correctAnswer === selectedAnswer) {
        virtualCorrectAnswersNumber++;
      }
    })
    setCorrectAnswersNumber(virtualCorrectAnswersNumber);

  }, [lastPlayReport]);

  return (lastPlayReport && <Container className="report-container">
    <Typography className="report-title" variant="h3" component="div" gutterBottom >
      You got {correctAnswersNumber} questions right out of {lastPlayReport[0].length}
    </Typography>
    {lastPlayReport[0].map((question, index) => {
      return (
        <Box key={index} className='report-question-box'>
          <Typography className="question-title" variant="h3" component="div" dangerouslySetInnerHTML={{ __html: question.question }} gutterBottom />
          <List className="report-answers">
            {question.incorrect_answers.map((answer, index) => {
              return (
                <ListItem className="wrong-answer" key={index} disablePadding>
                  <p dangerouslySetInnerHTML={{__html: `Wrong: ${answer}`}} />
                </ListItem>
              );
            })}
            <ListItem className="correct-answer" disablePadding>
              <p dangerouslySetInnerHTML={{__html: `Correct: ${question.correct_answer}`}} />
            </ListItem>
            <ListItem className="user-answer" disablePadding>
              <p dangerouslySetInnerHTML={{__html: `Your choice: ${lastPlayReport[1][index]}`}} />
            </ListItem>
          </List>
        </Box>
      );
    })}

    <Button onClick={handleBackClick} className="back-button" variant="contained">&#8592;</Button>
  </Container>);
}

export default Report;