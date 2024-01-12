import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { ActivityDescription, FilterActivity, HistoryOfSearch } from './components';
import { useAppDispatch, useAppSelector } from './hooks';
import { getActivityThunk, selectActivity, selectStateStatus } from './store';

export default function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectStateStatus);
  const data = useAppSelector(selectActivity);

  function onStartClickHandler() {
    dispatch(getActivityThunk({ params: null }));
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography variant={'h3'} align={'center'}>
              Lets find funny activity!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <FilterActivity />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Button fullWidth variant="contained" onClick={onStartClickHandler} disabled={isLoading}>
              Start
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {data && <ActivityDescription {...data} isLoading={isLoading} />}
        </Grid>
        <Grid item xs={12}>
          <HistoryOfSearch />
        </Grid>
      </Grid>
    </Container>
  );
}
