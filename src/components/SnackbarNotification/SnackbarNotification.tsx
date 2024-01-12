import { createPortal } from 'react-dom';
import { Close } from '@mui/icons-material';
import { IconButton, Snackbar } from '@mui/material';

import { useAppSelector } from '../../hooks';
import { selectIsHasApiError } from '../../store';

const ActionButton = (
  <IconButton size="small">
    <Close fontSize="small" />
  </IconButton>
);

export default function SnackbarNotification() {
  const { isHasError, error } = useAppSelector(selectIsHasApiError);

  return createPortal(<Snackbar open={isHasError} message={error} action={ActionButton} />, document.body);
}
