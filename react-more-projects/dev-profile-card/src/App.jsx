import "./App.css";
import { Avatar, Intro, SkillList } from "./components";
import AvatarImage from "./assets/my-avatar.jpeg";
function App() {
  const beachEmoji = "🏖️";
  const profileData = {
    name: "Gavin Coulson",
    introText: `Fullstack Web Developer and overall tech enthusiast, specializing in JavaScript and Python Development. When I'm not coding I'm doing kung fu, reading about the latest trends in the tech sector and spending time at the beach ${beachEmoji}.`,
    skills: [
      { skill: "JavaScript", emoji: "🦾", backGroundColor: "#FF69B4" },
      { skill: "Python", emoji: "🐍", backGroundColor: "#39FF14" },
      { skill: "CSS", emoji: "🖼️", backGroundColor: "#1B03A3" },
      { skill: "HTML", emoji: "🦴", backGroundColor: "#FF5F1F" },
      { skill: "SQL", emoji: "🐘", backGroundColor: "#5C72DB" },
      { skill: "AWS", emoji: "☁️", backGroundColor: "#E88B3C" },
      { skill: "FastAPI", emoji: "⏩", backGroundColor: "#44F2A4" },
      { skill: "React", emoji: "💪🏼", backGroundColor: "#48AFE8" },
    ],
  };
  return (
    <div className="card">
      <Avatar avatarImage={AvatarImage} />
      <div className="data">
        <Intro name={profileData.name} introText={profileData.introText} />
        <SkillList skillList={profileData.skills} />
      </div>
    </div>
  );
}

export default App;
