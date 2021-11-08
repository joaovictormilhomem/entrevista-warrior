import { Fragment } from 'react';
import {Box, Container, Typography, Button } from '@material-ui/core';
import Answers from '../Answers';
import './style.css'

export default function Question({ questionProps }) {
  let questionTitle = questionProps.question;
  let incorrectAnswers = questionProps.incorrect_answers;
  let correctAnswer = questionProps.correct_answer;
  //let category = questionProps.category;
  let answers = [correctAnswer, ...incorrectAnswers].sort();

  return (
    <Fragment>

      <Container maxWidth="sm">
        <Box className='question-box'>
          <Typography variant="h3" component="div" dangerouslySetInnerHTML={{ __html: questionTitle }} gutterBottom />
          <Answers answers={answers} />
          <Button variant="contained" color="success">Confirmar</Button>
        </Box>
      </Container>


    </Fragment>
  );
}