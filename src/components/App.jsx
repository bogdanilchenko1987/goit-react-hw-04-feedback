import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleReviews = ({ target: { name } }) => {
    setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value);
  };

  const countPositiveFeedbackPercentage = total => {
    const { good } = state;
    return Math.round((good / total) * 100);
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage(total);
  const { good, bad, neutral } = state;
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          handleReviews={e => handleReviews(e)}
        />
      </Section>

      {total ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          ></Statistics>
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

// export const App = () => {

//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const handleReviews = e => {
//     switch (e.target.name) {
//       case 'good':
//         setGood(prev => prev + 1);
//         break;
//       case 'bad':
//         setBad(prev => prev + 1);
//         break;
//       case 'neutral':
//         setNeutral(prev => prev + 1);
//         break;
//       default:
//         return;
//     }
//   };

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = total => {
//     return Math.round((good / total) * 100);
//   };

//   const total = countTotalFeedback();
//   const positive = countPositiveFeedbackPercentage(total);

//   return (
//     <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           handleReviews={e => handleReviews(e)}
//         />
//       </Section>

//       {total ? (
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positive={positive}
//           ></Statistics>
//         </Section>
//       ) : (
//         <Notification message="There is no feedback" />
//       )}
//     </>
//   );
// };
