public class Main {
    public static void main(String[] args) {
    RockPaperScissors myGame = new RockPaperScissors();
    boolean playing = myGame.startGame();
    myGame.playGame(playing);
    }
}