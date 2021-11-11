import { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import { Button, Container, FormControl, TextField, Typography } from "@material-ui/core";
/* import CheckIcon from '@mui/icons-material/Check';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import CancelIcon from '@mui/icons-material/Cancel'; */
import "./style.css"

export default function SelectAmount({ setAmount }) {
  const [amountInput, setAmountInput] = useState(1);
  const [thereIsLastPlayReport, setThereIsLastPlayReport] = useState(false);
  const [amountWasChosen, setAmountWasChosen] = useState(false);
  const [amountIsValidated, setAmountIsValidated] = useState(true);
  const history = useHistory();

  function handleStartClick() {
    setAmount(amountInput);
    history.push('/questions');
  }

  function handleCancelClick() {
    setAmountWasChosen(false);

  }

  function handleAmountInputChange(event) {
    const newValue = event.target.value;
    setAmountInput(newValue);
    if (newValue < 1 || newValue > 50)
      setAmountIsValidated(false);
    else
      setAmountIsValidated(true);
  }

  function handleSelectAmountClick() {
    amountIsValidated && setAmountWasChosen(true);
  }

  function checkIfThereIsLastPlayReport() {
    localStorage.hasOwnProperty("LAST_PLAY_REPORT") && setThereIsLastPlayReport(true);
  }

  useEffect(() => {
    checkIfThereIsLastPlayReport();
  }, [])

  return (
    <Container className="select-amount-container">
      {amountWasChosen ?
        <div className="select-amount-content">
          <Typography mt={5} variant="h2" >Let's go?</Typography>
          <div className="start-cancel-buttons">
            <Button onClick={handleStartClick} variant="contained" /* endIcon={<PlayCircleFilledWhiteIcon />} */>Start</Button>
            <Button onClick={handleCancelClick} variant="contained" /* endIcon={<CancelIcon />} */>Cancel</Button>
          </div>
        </div>
        :
        <div className="select-amount-content">
          <Typography mt={5} variant="h2" >Welcome to Warrior's Quiz</Typography>

          <FormControl className="select-amount-form">
            <Typography mt={8} variant="h4">Choose the number of questions</Typography>
            <div className="input-and-button">
              <TextField
                id="outlined-uncontrolled"
                label="Amount"
                type="number"
                value={amountInput}
                onChange={handleAmountInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
                error={!amountIsValidated}
                helperText='must be between 1 and 50'
              />
              <Button onClick={handleSelectAmountClick} variant="contained" /* endIcon={<CheckIcon />} */>select</Button>
            </div>
          </FormControl>
          {thereIsLastPlayReport && <div className='check-report'>To see the report of the last time you played <Link to='/report'>click here</Link></div>}
        </div>
      }
    </Container>
  );
}