import { useDispatch } from 'react-redux';

import type { AppDispatch } from '../models';

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
