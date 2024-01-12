import { capitalize, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks';
import type { ActivityTypes } from '../../models';
import { setActivityType } from '../../store/';
import { selectTypeOfActivity } from '../../store/selectors';

const ACTIVITY_TYPES: Record<ActivityTypes, ActivityTypes> = {
  education: 'education',
  recreational: 'recreational',
  social: 'social',
  diy: 'diy',
  charity: 'charity',
  cooking: 'cooking',
  relaxation: 'relaxation',
  music: 'music',
  busywork: 'busywork',
};

export default function SelectActivityType() {
  const dispatch = useAppDispatch();
  const typeOfActivity = useAppSelector(selectTypeOfActivity);

  function onChangeTypeActivityHandler(event: SelectChangeEvent) {
    dispatch(setActivityType(event.target.value as string));
  }

  return (
    <FormControl fullWidth>
      <InputLabel>Select activity type</InputLabel>
      <Select value={typeOfActivity} onChange={onChangeTypeActivityHandler}>
        {Object.values(ACTIVITY_TYPES).map((type) => (
          <MenuItem key={type} value={type}>
            {capitalize(type)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
