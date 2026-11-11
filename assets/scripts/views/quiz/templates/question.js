import { escapeHtml } from '../../../utils/utils.js';
import { QUIZ_ACTION } from '../constants.js';
import { getQuestion } from '../engine.js';
import { renderTags, renderSourceLink } from './shared.js';

// Question screen: the current question, its options, and feedback once answered

export function renderQuestion(quiz) {
	const entry = quiz.questions[quiz.currentIndex];
	const question = getQuestion(entry.id);
	const selected = quiz.answers[entry.id];
	const isAnswered = selected !== undefined;
	const total = quiz.questions.length;
	const answeredCount = Object.keys(quiz.answers).length;
	const isLast = quiz.currentIndex === total - 1;

	return `
		<section class="quiz-question" aria-labelledby="quiz-question-title">
			<div class="quiz-question__header">
				<p class="quiz-question__count text-label">Question ${quiz.currentIndex + 1} of ${total}</p>
				<button class="quiz-question__exit button button--tertiary" type="button" data-action="${QUIZ_ACTION.EXIT_QUIZ}">Exit quiz</button>
				<div class="quiz-question__progress" role="progressbar" aria-label="Questions answered" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${answeredCount}">
					<div class="quiz-question__progress-bar" style="width: ${(answeredCount / total) * 100}%"></div>
				</div>
			</div>

			<div class="quiz-question__question">
				${renderTags(question)}
				<h2 id="quiz-question-title" class="quiz-question__title text-heading-lg" tabindex="-1">${escapeHtml(question.question)}</h2>
			</div>

			<ol class="quiz-question__options list-reset">
				${entry.options.map((option, index) => renderOption(question, option, index, selected)).join('')}
			</ol>

			${isAnswered ? renderFeedback(question, selected, isLast) : '<p class="quiz-question__hint text-body-sm">Tip: Use keyboard 1-4 to answer.</p>'}
		</section>
	`;
}

function renderOption(question, option, index, selected) {
	const isAnswered = selected !== undefined;
	const isAnswer = option === question.answer;
	const isSelected = option === selected;

	const classes = ['quiz-question__option'];
	let status = '';
	if (isAnswered && isAnswer) {
		classes.push('is-correct');
		status = isSelected ? 'Your answer, correct' : 'Correct answer';
	} else if (isSelected) {
		classes.push('is-incorrect');
		status = 'Your answer, incorrect';
	}

	return `
		<li>
			<button class="${classes.join(' ')}" type="button" data-action="${QUIZ_ACTION.ANSWER}" data-option-index="${index}" ${isAnswered ? 'disabled' : ''}>
				<span class="quiz-question__option-key" aria-hidden="true">${index + 1}</span>
				<span class="quiz-question__option-text">${escapeHtml(option)}</span>
				${status ? `<span class="quiz-question__option-status">${status}</span>` : ''}
			</button>
		</li>
	`;
}

function renderFeedback(question, selected, isLast) {
	const correct = selected === question.answer;

	return `
		<div class="quiz-question__feedback ${correct ? 'is-correct' : 'is-incorrect'}">
			<p class="quiz-question__verdict">${correct ? 'Correct' : 'Not quite'}</p>
			<p>${escapeHtml(question.explanation)}</p>
			${renderSourceLink(question)}
			<button class="quiz-question__next button" type="button" data-action="${QUIZ_ACTION.NEXT_QUESTION}">${isLast ? 'See results' : 'Next question'}</button>
		</div>
	`;
}
