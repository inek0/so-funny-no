import { Box, Grid, Typography } from '@mui/material';

import { useAppSelector } from '../../hooks';
import { selectSearchIdx } from '../../store';
import { HistoryOfSearchDescription } from '../HistoryOfSearchDescription';

export default function HistoryOfSearch() {
  const idx = useAppSelector(selectSearchIdx);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box sx={{ mt: 1, mb: 1 }}>
          <Typography variant="h5">History Of Search: </Typography>
        </Box>
      </Grid>
      {idx.map((id) => (
        <Grid item xs={12} sm={6} key={id}>
          <Box sx={{ mt: 1, mb: 1 }}>
            <HistoryOfSearchDescription id={id} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
