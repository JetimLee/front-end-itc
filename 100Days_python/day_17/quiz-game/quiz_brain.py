from question_model import Question


class QuizBrain:
    def __init__(self, questions_list: [Question]):
        self.question_number = 0
        self.questions_list = questions_list
        self.user_score = 0

    def get_user_score(self):
        return self.user_score

    def __repr__(self):
        return (
            f"Questions List: {self.questions_list}, Question #: {self.question_number}"
        )

    def check_answer(self, user_answer):
        self.user_score += (
            1
            if self.questions_list[self.question_number].get_answer().lower()
            == user_answer.lower()
            else 0
        )
        if (
            self.questions_list[self.question_number].get_answer().lower()
            == user_answer.lower()
        ):
            print("You got it right!")
            print(f"Your score is {self.user_score}/{self.question_number+1}")
        else:
            print("Sorry, that wasn't correct.")
            print(f"Your score is {self.user_score}/{self.question_number+1}")
        print(
            f"The correct answer was: {self.questions_list[self.question_number].get_answer()}"
        )
        print("\n")

    def next_question(self):
        if self.question_number == len(self.questions_list):
            print("That's the end of the quiz!")
            return
        user_answer = input(
            (
                f"Q.{self.question_number+1}: {self.questions_list[self.question_number].get_question()} (True/False)?: "
            )
        )
        self.check_answer(user_answer)
        self.question_number += 1

    def still_has_questions(self):
        return self.question_number < len(self.questions_list)
