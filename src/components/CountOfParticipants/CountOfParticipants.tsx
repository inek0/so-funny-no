import { ChangeEvent } from 'react';
import type { TextFieldProps } from '@mui/material';
import { TextField } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectCountOfParticipants, setCountOfParticipants } from '../../store';

type CountOfParticipantsProps = TextFieldProps;

export default function CountOfParticipants(props: CountOfParticipantsProps) {
  const dispatch = useAppDispatch();
  const value = useAppSelector(selectCountOfParticipants);
  function onCountOfParticipantsChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    const {
      target: { value },
    } = event;

    dispatch(setCountOfParticipants(Number(value)));
  }

  return (
    <TextField
      {...props}
      fullWidth
      label="Set count of Participants"
      value={value}
      onChange={onCountOfParticipantsChangeHandler}
      type="number"
    />
  );
}
