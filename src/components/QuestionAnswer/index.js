import React, { useState } from 'react';
import './styles.css';
import '../../tachyons.min.css';


const Question = ({ item, isShowAnswer, onToggleAnswer }) => {
  const handleOnClick = () => {
    onToggleAnswer();
  };

  return (
    <div className="w-100  flex flex-column justify-center center items-center">
      <div
        onClick={handleOnClick}
        className={
          isShowAnswer
            ? 'w-90 pv2 ph3 ba b--yellow flex justify-between items-center pointer cauHoiActive mb0'
            : 'w-90 pv2 ph3 ba b--yellow flex justify-between items-center pointer cauHoi mb3'
        }
      >
        <p>{item.question}</p>
        {isShowAnswer ? (
          <i className="fa fa-angle-up fw7 f2 white" />
        ) : (
          <i className="fa fa-angle-down fw7 f2 black-70" />
        )}
      </div>

      <div
        className={
          isShowAnswer
            ? 'w-90 pv2 ph3 b--black-10 black-90 cauTraLoi ba mb3'
            : 'w-80 ph4 b--black-10 black-90 cauTraLoi ba  anCauTraLoi'
        }
        dangerouslySetInnerHTML={{ __html: item.answer }}
      />
    </div>
  );
};

const BlockQuestionAnswer = ({ id, questions }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleOnToggleAnswer = (i) => {
    if (activeQuestion === i) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(i);
    }
  };

  return (
    <div
      className="w-100 pv5 flex justify-center flex-wrap"
      id={id}
      style={{ transition: 'all 5s linear' }}
    >
      {questions.map((item, i) => (
        <Question
          item={item}
          key={item.question}
          isShowAnswer={activeQuestion === i}
          onToggleAnswer={() => {
            handleOnToggleAnswer(i);
          }}
        />
      ))}
    </div>
  );
};

export default BlockQuestionAnswer;
