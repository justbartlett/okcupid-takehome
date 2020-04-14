import { Reducer } from 'redux';
import { CreatorsToActions } from '../utils';
import { questionsOrdered } from '../utils/helpers';

// Actions
export const actions = {
  SET_QUESTION: "MADLIBS/SET_QUESTION",
  SET_ESSAY_SENTENCE: "MADLIBS/SET_ESSAY_TEXT_SENTENCE",
  SET_TEMPLATE_SENTENCE: "MADLIBS/SET_TEMPLATE_SENTENCE",
  SET_ESSAY: "MADLIBS/SET_ESSAY"
} as const;


// Initial State
export interface MadlibState {
  questions: {question: string, name: string, answer: string}[],
  essay: string,
  templateSentences: string[],
  essaySentences: string[],
}
const initialState: MadlibState = {
  questions: questionsOrdered(),
  essay: '',
  templateSentences: new Array(6).fill(''),
  essaySentences: new Array(6).fill('')
}

// Reducer
const madlibReducer: Reducer<MadlibState, MadlibAction> = (
  state: MadlibState = initialState,
  action: MadlibAction
) => {
  switch (action.type) {
    case actions.SET_QUESTION: {
      const { name, answer } = action.payload;
      return {
        ...state,
        questions: state.questions.map((question) =>
          question.name === name ? {...question, answer: answer} : question
        )
      };
    }
    case actions.SET_ESSAY_SENTENCE: {
      return {
        ...state,
        essaySentences: state
          .essaySentences.map((sentence: string, i: number) => i === action.payload.index ?
            action.payload.essay : sentence)
      }
    }
    case actions.SET_TEMPLATE_SENTENCE: {
      return {
        ...state,
        templateSentences: state
          .templateSentences.map((template: string, i: number) => i === action.payload.index ? action.payload.templateSentence : template)
      }
    }
    case actions.SET_ESSAY: {
      return {
        ...state,
        essay: action.payload.essayText
      }
    }

    default:
      return state;
  }
}
export default madlibReducer;

// Action creators
export const actionCreators = {
  setField: (name: string, answer: string) => {
    return {
      type: actions.SET_QUESTION,
      payload: { name, answer}
    }
  },
  setEssaySentence: (essay: string, index: number) => {
    return {
      type: actions.SET_ESSAY_SENTENCE,
      payload: {
        essay,
        index
      }
    }
  },
  setTemplateSentence: (templateSentence: string, index: number) => {
    return {
      type: actions.SET_TEMPLATE_SENTENCE,
      payload: {
        templateSentence,
        index
      }
    }
  },
  setEssay: (essayText: string) => {
    return {
      type: actions.SET_ESSAY,
      payload: {
        essayText
      }
    }
  }

}
type MadlibAction = CreatorsToActions<typeof actionCreators>;