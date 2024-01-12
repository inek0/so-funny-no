export type ActivityTypes =
  | 'education'
  | 'recreational'
  | 'social'
  | 'diy'
  | 'charity'
  | 'cooking'
  | 'relaxation'
  | 'music'
  | 'busywork';

export type Activity = {
  activity: string;
  accessibility: number;
  type: ActivityTypes;
  participants: number;
  price: number;
  link: undefined | string;
  key: string;
};

export type ActivityError = Record<'error', string>;
