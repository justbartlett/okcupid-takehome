import { Reducer } from 'redux';
import { CreatorsToActions } from '../utils';
import { FIELD_NAMES, FIELDS } from '../utils/constants';
import { randomTemplate } from '../utils/helpers';

// Actions
const actions = {
  SUBMIT_FIELD: "MADLIBS/SUBMIT_FIELD",
  SUBMIT_ESSAY: "MADLIBS/SUBMIT_ESSAY",
  RESET_TO_DEFAULT: "MADLIBS/RESET_TO_DEFAULT"
} as const;


// Initial State
export interface MadlibState {
  fieldOrder: string[],
  fields:  {},
  fieldAnswers: {},
  essayText: string,
}
const initialState: MadlibState = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar,
  ],
  fields: FIELDS,
  fieldAnswers: {},
  essayText: "",
}

// Reducer
const madlibReducer: Reducer<MadlibState, MadlibAction> = (
  state: MadlibState = initialState,
  action: MadlibAction
) => {
  switch (action.type) {
    case actions.SUBMIT_FIELD: {
      const { fieldName, answer, template } = action.payload;
      return {
        ...state,
        fieldAnswers: {
          ...state.fieldAnswers,
          [fieldName]: {
            answer,
            template
          }
        }
      };
    }
    case actions.SUBMIT_ESSAY: {
      const {essayText} = action.payload;
      return {
        ...state,
        essayText
      }
    }
    case actions.RESET_TO_DEFAULT: {
      return {
        ...initialState
      }
    }
    default:
      return state;
  }
}
export default madlibReducer;

// Action creators
export const actionCreators = {
  submitField: (fieldName: string, answer: string) => {
    const template = randomTemplate(fieldName);
    return {
      type: actions.SUBMIT_FIELD,
      payload: { fieldName, answer, template }
    }
  },
  submitEssay: (essayText: string) => ({
    type: actions.SUBMIT_ESSAY, payload: {essayText}
  }),
  resetToDefault: () => ({
    type: actions.RESET_TO_DEFAULT, payload: null
  })
}
type MadlibAction = CreatorsToActions<typeof actionCreators>;