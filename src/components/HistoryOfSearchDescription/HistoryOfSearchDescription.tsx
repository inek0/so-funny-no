import { useAppSelector } from '../../hooks';
import { Activity } from '../../models';
import { selectIsVisibleActivity, selectSearchResultByIdx } from '../../store';
import { ActivityDescription } from '../ActivityDescription';

type HistoryOfSearchDescriptionProps = { id: Activity['key'] };

export default function HistoryOfSearchDescription(props: HistoryOfSearchDescriptionProps) {
  const { id } = props;
  const result = useAppSelector((state) => selectSearchResultByIdx(state, id));
  const isVisible = useAppSelector(selectIsVisibleActivity(id));

  return isVisible && <ActivityDescription {...result} isLoading={false} />;
}
