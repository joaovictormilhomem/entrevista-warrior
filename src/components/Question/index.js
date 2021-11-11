import { useState } from 'react';
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
      <Container className="question-container" maxWidth="sm">
        <Box className='question-box'>
          <Typography className="question-title" variant="h3" component="div" dangerouslySetInnerHTML={{ __html: questionTitle }} gutterBottom />
          <RadioGroup
            aria-label="answer"
            name="radio-buttons-group"
            value={selectedAnswer}
            onChange={(event) => { setSelectedAnswer(event.target.value) }}
          >
            <div className="answers">
              {answers.map((answer, index) => (
                <FormControlLabel
                  className="answer"
                  key={index}
                  value={answer}
                  control={<Radio />}
                  label={
                    <Typography
                      variant="body1"
                      gutterBottom
                      dangerouslySetInnerHTML={{ __html: answer }}
                    />
                  }
                />
              ))}
            </div>
          </RadioGroup>
          <Button onClick={handleConfirmAnswerQuestionClick} variant="contained" color="success">Confirm</Button>
        </Box>
      </Container>
  );
}