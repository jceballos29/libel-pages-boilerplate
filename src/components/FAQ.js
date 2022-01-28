import React, { useState } from "react";
import "../css/FAQ.css";

import questions from "../utils/questions";
import Question from "./cards/Question";

import image from "../images/faq-image.png";
import line from "../images/line.png";
import { IoChevronForward } from "react-icons/io5";

const FAQ = () => {

    const [question, setQuestion] = useState();
    const handleQuestion = (id) => {
        setQuestion(id)
    }

    return (
        <div className="FAQ">
            <div className="faq-container container">
                <div className="faq-title">
                    <h1>
                        PREGUNTAS <span>FRECUENTES</span>
                        <img src={line} alt="underline" />
                    </h1>
                </div>
                <div className="faq-content">
                    <div className="faq-imagen ">
                        <img src={image} alt="FAQ" />
                    </div>
                    <div className="faq-questions">
                        <div className="faq-questions-container">
                            <Question
                                id={questions[11].id}
                                question={questions[11].question}
                                answer={questions[11].answer}
                                handleQuestion={handleQuestion}
                                active={
                                    question === questions[11].id ? true : false
                                }
                            />
                            <Question
                                id={questions[10].id}
                                question={questions[10].question}
                                answer={questions[10].answer}
                                handleQuestion={handleQuestion}
                                active={
                                    question === questions[10].id ? true : false
                                }
                            />
                            <Question
                                id={questions[4].id}
                                question={questions[4].question}
                                answer={questions[4].answer}
                                handleQuestion={handleQuestion}
                                active={
                                    question === questions[4].id ? true : false
                                }
                            />
                            <Question
                                id={questions[8].id}
                                question={questions[8].question}
                                answer={questions[8].answer}
                                handleQuestion={handleQuestion}
                                active={
                                    question === questions[8].id ? true : false
                                }
                            />
                            <Question
                                id={questions[9].id}
                                question={questions[9].question}
                                answer={questions[9].answer}
                                handleQuestion={handleQuestion}
                                active={
                                    question === questions[9].id ? true : false
                                }
                            />
                            <a
                                href={
                                    "https://libel.academy/3d-camp/preguntas-frecuentes"
                                }
                                className="more-questions"
                            >
                                VER MAS PREGUNTAS <IoChevronForward />
                            </a>
                        </div>
                        <a
                            href="https://calendly.com/libel"
                            target={"_blank"}
                            rel="noreferrer"
                            className="request-advice"
                        >
                            SOLICITAR ASESORÍA
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
