import { FIELD_NAMES } from "./constants";

export function randomTemplate(fieldName: string) {
  const templateList = getTextTemplates(fieldName);
  return templateList[randomNumber(0, templateList.length)]
}

function randomNumber(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min)) + min;
}

export function getTextTemplates(fieldName: string) {
  switch (fieldName) {
    case FIELD_NAMES.hometown: {
      return [
        "Grew up in $answer.",
        "Hail from $answer.",
        "$answer born and bred.",
        "$answer, born and raised.",
        "Transplant from $answer.",
        "$answer native.",
        "Originally from $answer.",
      ];
    }

    case FIELD_NAMES.favoriteFood: {
      return [
        "Can’t get enough $answer.",
        "Addicted to $answer.",
        "Obsessed with $answer.",
        "Love going out for $answer.",
        "Love eating $answer.",
        "Can’t live without $answer.",
        "$answer please.",
      ];
    }

    case FIELD_NAMES.bar: {
      return [
        "$answer is my old haunt.",
        "$answer is my Cheers.",
        "$answer is my Paddy’s Pub.",
        "You can always catch me at $answer.",
        "Take me to $answer and I’ll marry you right now.",
        "$answer is my spot.",
        "$answer is my home-away-from-home.",
      ];
    }

    case FIELD_NAMES.loveToDo: {
      return [
        "I $answer constantly.",
        "Love to $answer.",
        "Can never $answer enough.",
        "I $answer whenever I get the chance.",
        "In my spare time I $answer.",
      ];
    }

    case FIELD_NAMES.music: {
      return [
        "I just got into $answer.",
        "Been jamming to $answer recently.",
        "I’d kill to see $answer live.",
        "Love listening to $answer.",
        "$answer is my new obsession.",
        "$answer is my new god.",
      ];
    }

    case FIELD_NAMES.messageIf: {
      return [
        "Message if you $answer.",
        "Hit me up if you $answer.",
        "If you $answer, we need to meet.",
        "Send me a message if you $answer.",
        "If you $answer, let’s chat.",
      ];
    }

    default:
      return [];
  }
}
