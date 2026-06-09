import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const { state, dispatch } = useContext(SurveyContext);

  const isEditing = state.ui.editingQuestionId === question.id;

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // TODO: Students will add edit functionality here
  const handleEdit = () => {
    setWorkingText(question.question);
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: question.id },
    });

    console.log('TODO: Implement edit functionality');
    // Hint: Use SET_EDITING_QUESTION action
  };

  // TODO: Students will add save functionality here
  const handleSave = () => {
    console.log('TODO: Implement save functionality');
    // Hint: Use UPDATE_QUESTION_TEXT action with workingText
    if (!workingText.trim()) {
      return;
    }
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        questionId: question.id,
        questionText: workingText.trim(),
      },
    });

    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: null },
    });
  };

  const handleCancel = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: null },
    });
  };

  // TODO: Students will add delete functionality here
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this question?'
    );

    if (!confirmDelete) {
      return;
    }

    dispatch({
      type: 'DELETE_QUESTION',
      payload: { questionId: question.id },
    });

    console.log('TODO: Implement delete functionality');
    // Hint: Show confirmation dialog, then use DELETE_QUESTION action
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {/* TODO: Students add Edit and Delete buttons here */}
          <>
            <button className={styles['edit-btn']} onClick={handleEdit}>
              Edit (TODO)
            </button>
            <button className={styles['delete-btn']} onClick={handleDelete}>
              Delete (TODO)
            </button>
          </>
        </div>
      </div>

      {/* TODO: Students will add conditional controlled form to edit question here */}
      <div className={styles['question-content']}>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={workingText}
              onChange={(event) => setWorkingText(event.target.value)}
              className={styles['question-input']}
            />
            <button
              className={styles['save-btn']}
              onClick={handleSave}
              disabled={workingText.trim() === ''}
            >
              Save (TODO)
            </button>

            <button className={styles['cancel-btn']} onClick={handleCancel}>
              Cancel (TODO)
            </button>
          </div>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                <span className={styles['option-text']}>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
