export interface Question {
  name: string,
  answer: string
}

export interface Payload {
  name: string,
  answer: string
}

export interface Action {
  type: string,
  payload: Payload
}

export interface MadlibState {
  questions: {question: string, name: string, answer: string}[],
  essay: string,
  templateSentences: string[],
  essaySentences: string[],
}

export interface QuestionProps {
  fieldText: any,
  fieldName: string
}

export interface QuestionsProps {
  questions: {question: string, name: string, answer: string}[];
}