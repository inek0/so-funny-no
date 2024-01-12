import type { Activity } from '../models';

const apiPath = Object.freeze({
  activity: function () {
    return { url: `${import.meta.env.VITE_BASE_URL}activity/`, description: 'Get a random event' };
  },
  activityByKey: function (key: Activity['key']) {
    return {
      url: `${import.meta.env.VITE_BASE_URL}activity?key=${key}`,
      description: `Find an activity by its key: ${key}`,
    };
  },
  activityByType: function (type: Activity['type']) {
    return {
      url: `${import.meta.env.VITE_BASE_URL}activity?type=${type}`,
      description: `Find a random activity with a given type: ${type}`,
    };
  },
  activityByParticipants: function (participants: Activity['participants']) {
    return {
      url: `${import.meta.env.VITE_BASE_URL}activity?participants=${participants}`,
      description: `Find a random activity with a given number of participants: ${participants}`,
    };
  },
  activityByPrice: function (price: Activity['price']) {
    return {
      url: `${import.meta.env.VITE_BASE_URL}activity?price=${price}`,
      description: `Find an activity with a specified price: ${price}`,
    };
  },
  activityByMinMaxPrice: function (minprice: Activity['price'], maxprice: Activity['price']) {
    return {
      url: `${import.meta.env.VITE_BASE_URL}activity?minprice=${minprice}&maxprice=${maxprice}`,
      description: `Find an event with a specified price in an inclusively constrained range: ${minprice}, ${maxprice}`,
    };
  },
  activityByAccessibility: function (accessibility: Activity['accessibility']) {
    return {
      url: `${import.meta.env.VITE_BASE_URL}activity?accessibility=${accessibility}`,
      description: `Find a price in an inclusively constrained range: ${accessibility}`,
    };
  },
  activityByMinMaxAccessibility: function (
    minaccessibility: Activity['accessibility'],
    maxaccessibility: Activity['accessibility'],
  ) {
    return {
      url: `${
        import.meta.env.VITE_BASE_URL
      }activity?minaccessibility=${minaccessibility}&maxaccessibility=${maxaccessibility}`,
      description: `Find an event with a specified accessibility in an inclusively constrained range: ${minaccessibility}, ${maxaccessibility}`,
    };
  },
});

export default apiPath;
