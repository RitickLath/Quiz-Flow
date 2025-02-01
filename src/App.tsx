import Navbar from "./component/Navbar";
import Evaluation from "./component/Pages/Evaluation";
import Landing from "./component/Pages/Landing";
import PlayQuiz from "./component/Pages/PlayQuiz";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Landing />
      <Evaluation />
      <PlayQuiz />
    </div>
  );
};

export default App;
