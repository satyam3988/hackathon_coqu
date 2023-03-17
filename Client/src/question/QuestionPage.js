import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';

const QuestionPage = ({ step=2, questions, totalQuestions=20, score=1, handleAnswerClick, handleEnterPress }) => {
  return (
    <div className="wrapper">
      <header>
        <div className="question-count">
          {/* <h2>Question</h2>
          <div className="question-number">1</div>
          <div className="description">of <span>20</span></div> */}
        </div>
        <h1><bold>#fyp</bold></h1>
        <div className="score-container">
          {/* <h2>Score</h2>
          <div className="score">{score}</div>
          <div className="description">points</div> */}
        </div>
      </header>

      <div className="questions">
        <QuestionList
          questions={questions}
          handleAnswerClick={handleAnswerClick}
          handleEnterPress={handleEnterPress}
        />
      </div>
    </div>
  );
}

QuestionPage.propTypes = {
  step: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired
};

export default QuestionPage;