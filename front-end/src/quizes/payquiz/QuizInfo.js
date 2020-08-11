import { React, useState } from "React";
import Quiz from "./Quiz";
export const QuizInfo = () => {
  const [state, setState] = useState({
    quiz: [
      {
        question: "Como se dice Turno del atardecer?",
        options: [
          "Day shift",
          "Afternoon shift",
          "Evening shift",
          "Night shift",
        ],
        answer: "2",
      },
      {
        question: "Que significa 'Overtime pay'?",
        options: [
          "Pago",
          "Horas extras",
          "Tiempo de descanso",
          "Pago de horas extras",
        ],
        answer: "3",
      },
      {
        question: "Como se dice 'Tiempo de descanso?'",
        options: ["Break time", "Take a break", "I need a break", "Lunch"],
        answer: "0",
      },
      {
        question: "Como se dice 'Pagamos cada dos semanas'",
        options: [
          "We pay every week",
          "We pay every two weeks",
          "We pay evey month",
          "We pay by the hour",
        ],
        answer: "1",
      },
      {
        question: "How heavy are you?",
        options: ["a3", "b3", "c3", "d3"],
        answer: "1",
      },
      {
        question:
          "Cual de las siguientes palabras no tiene que ver con salario o pago?",
        options: [
          "We pay once a month",
          "We pay every fifteen days",
          "Here is your check",
          "Punctual",
        ],
        answer: "3",
      },
      {
        question: "Que significa 'How many hours did you work' ",
        options: [
          "No tenemos trabajo disponible",
          "Puede venir a las siete?",
          "¿Cuántas horas trabajó?",
          "Stop working at five",
        ],
        answer: "1",
      },
    ],
  });
  {
    console.log(state);
  }
  return (
    <div>
      <Quiz quizInfo={state} />
    </div>
  );
};
export default QuizInfo;
