import { Fragment, useState } from 'react';
import { Box, Container, Typography, Button, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import './style.css'

export default function Question({ questionProps, responses, setResponses }) {
  let questionTitle = questionProps.question;
  let incorrectAnswers = questionProps.incorrect_answers;
  let correctAnswer = questionProps.correct_answer;
  //let category = questionProps.category;
  let answers = [correctAnswer, ...incorrectAnswers].sort();

  const [selectedAnswer, setSelectedAnswer] = useState();

  function handleConfirmAnswerQuestionClick() {
    setResponses([...responses, selectedAnswer]);
  }

  return (
    <Fragment>

      <Container maxWidth="sm">
        <Box className='question-box'>
          <Typography variant="h3" component="div" dangerouslySetInnerHTML={{ __html: questionTitle }} gutterBottom />
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {answers.map((answer, index) => (
              <FormControlLabel
                key={index}
                value={answer}
                control={<Radio />}
                onChange={(event) => {setSelectedAnswer(event.target.value)}}
                label={
                  <Typography
                    variant="body1"
                    gutterBottom
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                }
              />
            ))}
          </RadioGroup>
          <Button onClick={handleConfirmAnswerQuestionClick} variant="contained" color="success">Confirm</Button>
        </Box>
      </Container>


    </Fragment>
  );
}