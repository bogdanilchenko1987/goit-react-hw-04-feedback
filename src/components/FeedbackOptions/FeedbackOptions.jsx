import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  FeedbackOptionsItem,
  FeedbackOptionsList,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, handleReviews }) => {
  return (
    <>
      <FeedbackOptionsList>
        {options.map(option => {
          return (
            <FeedbackOptionsItem key={option}>
              <Button name={option} type="button" onClick={handleReviews}>
                {option}
              </Button>
            </FeedbackOptionsItem>
          );
        })}
      </FeedbackOptionsList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleReviews: PropTypes.func.isRequired,
};
