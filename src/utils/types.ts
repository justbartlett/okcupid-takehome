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