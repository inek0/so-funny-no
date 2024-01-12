import { ChangeEvent, useMemo, useState } from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Grid } from '@mui/material';

import { CountOfParticipants } from '../CountOfParticipants';
import { SelectActivityType } from '../SelectActivityType';

export default function FilterActivity() {
  const [isShowFilter, setIsShowFilter] = useState<boolean>(false);

  const checkboxLabel = useMemo(
    function () {
      return !isShowFilter ? 'Show filters' : 'Hide filters';
    },
    [isShowFilter],
  );

  function onCheckboxChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    const {
      target: { checked },
    } = event;
    setIsShowFilter(checked);
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ mt: 1, mb: 1 }}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={isShowFilter} onChange={onCheckboxChangeHandler} />}
              label={checkboxLabel}
            />
          </FormGroup>
        </Box>
      </Grid>
      {isShowFilter && (
        <>
          <Grid item xs={12}>
            <Box sx={{ mt: 1, mb: 1 }}>
              <SelectActivityType />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ mt: 1, mb: 1 }}>
              <CountOfParticipants />
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
}
