import PropTypes from 'prop-types';

import { NotificationWrapper } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <>
      <NotificationWrapper>{message}</NotificationWrapper>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
