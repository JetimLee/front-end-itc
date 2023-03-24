from data import question_data
from question_model import Question
from quiz_brain import QuizBrain

question_bank = []
for _, val in enumerate(question_data):
    question_bank.append(Question(val.get("text"), val.get("answer")))

# print(question_bank)
# print(len(question_bank))
my_quiz_brain = QuizBrain(questions_list=question_bank)

while my_quiz_brain.still_has_questions():
    my_quiz_brain.next_question()

print(
    f"The game is over, your score was {my_quiz_brain.get_user_score()}/{len(question_bank)}"
)
