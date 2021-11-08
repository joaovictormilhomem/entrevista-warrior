import {FormControlLabel, RadioGroup, Typography, Radio} from '@material-ui/core';

function Answers({ answers }) {
  
  return (
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
  );
}

export default Answers;