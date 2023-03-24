class Question:
    def __init__(self, text: str, answer: bool):
        self.text = text
        self.answer = answer

    def get_answer(self):
        return self.answer

    def get_question(self):
        return self.text

    def __repr__(self):
        return f"text: {self.text}, answer: {self.answer}"
