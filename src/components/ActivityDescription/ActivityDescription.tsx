import { useMemo } from 'react';
import { Box, Card, CardContent, Grid, Link, Skeleton, Typography } from '@mui/material';

import type { Activity } from '../../models';

export type ActivityDescriptionProps = Activity & { isLoading: boolean };

export default function ActivityDescription(props: ActivityDescriptionProps) {
  const { activity, accessibility, type, participants, price, link, isLoading } = props;

  const linkComponent = useMemo(
    function () {
      return link ? <Link href={link}>{link}</Link> : '';
    },
    [link],
  );

  return (
    <Card>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box>
              <Typography variant="body1">
                {!isLoading ? `Activity: ${activity}` : <Skeleton variant="rectangular" />}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="body1">
                {!isLoading ? `Accessibility: ${accessibility}` : <Skeleton variant="rectangular" />}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="body1">
                {!isLoading ? `Type: ${type}` : <Skeleton variant="rectangular" />}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="body1">
                {!isLoading ? `Count of participants: ${participants}` : <Skeleton variant="rectangular" />}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="body1">
                {!isLoading ? `Price: ${price}` : <Skeleton variant="rectangular" />}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="body1">{!isLoading ? linkComponent : <Skeleton variant="rectangular" />}</Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
