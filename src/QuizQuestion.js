import React, { Component } from 'react'
import Quiz from './Quiz';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    hanldeClick() {
        { this.props.button_text ? this.props.quiz_question.answer : this.props.showNextQuestionHandler() }
    }
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul >
                        {this.props.quiz_question.answer_options.map((index, answer_option) => (
                            <QuizQuestionButton
                                clickHandler={this.hanldeClick.bind(this)}
                                key={index}
                                button_text={answer_option}
                            />
                        ))}

                    </ul>
                </section>
            </main>
        )
    }
}
export default QuizQuestion;