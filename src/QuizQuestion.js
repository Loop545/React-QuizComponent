import React, { Component } from 'react'
import Quiz from './Quiz'

class QuizQuestion extends Component {
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        <l1>
                            {this.props.quiz_question.answer_options[0]}
                        </l1>
                    </ul>
                </section>
            </main>
        )
    }
}
export default QuizQuestion;