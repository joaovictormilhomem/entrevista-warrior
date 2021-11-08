
function Question({ questionProps }) {
  let questionTitle = questionProps.question;
  let incorrectAnswers = questionProps.incorrect_answers;
  let correctAnswer = questionProps.correct_answer;
  //let category = questionProps.category;
  let answers = [correctAnswer, ...incorrectAnswers].sort();

  return (
    <div className='question_container'>
      <h1 className='question_title' dangerouslySetInnerHTML={{ __html: questionTitle }} />
      <ul className='question_answers'>
        {answers.map((answer, index) => <li key={index} className='question_answer' dangerouslySetInnerHTML={{ __html: answer }}/>)}
      </ul>
    </div>
  );
}

export default Question;