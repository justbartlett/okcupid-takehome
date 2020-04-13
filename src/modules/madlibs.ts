import { Reducer } from 'redux';
import { CreatorsToActions } from '../utils';
import { FIELD_NAMES } from '../utils/constants';

// Actions
const actions = {
  SUBMIT_FIELD: "MADLIBS/SUBMIT_FIELD",
} as const;


// Initial State
export interface MadlibState {
  fieldOrder: string[],
  fieldAnswers: {},
  essayText: string,
  counter: number
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
  fieldAnswers: {},
  essayText: "",
  counter: 1,
}

// Reducer
const madlibReducer: Reducer<MadlibState, MadlibAction> = (
  state: MadlibState = initialState,
  action: MadlibAction
) => {
  switch (action.type) {
    case actions.SUBMIT_FIELD: {
      return state;
    }
    default:
      return state;
  }
}
export default madlibReducer;

// Action creators
export const actionCreators = {
  submitField: (id: number, answer: string) => ({
    type: actions.SUBMIT_FIELD,
    payload: { fieldName: id, answer }
  })
}
type MadlibAction = CreatorsToActions<typeof actionCreators>;