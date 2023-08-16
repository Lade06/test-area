import React, { useState } from "react";

const Quizapp = () => {
  const [quiz, setQuiz] = useState(true);
  const [quizTwo, setQuizTwo] = useState(false);
  const [quizThree, setQuizThree] = useState(false);
  const [quizFour, setQuizFour] = useState(false);
  const [quizFive, setQuizFive] = useState(false);
  const [quizSix, setQuizSix] = useState(false);
  const [quizSeven, setQuizSeven] = useState(false);
  const [quizEight, setQuizEight] = useState(false);
  const [quizNine, setQuizNine] = useState(false);
  const [quizTen, setQuizTen] = useState(false);
  const [quizEleven, setQuizEleven] = useState(false);

  const handleShowLogin = () => {
    setQuiz(true);
    setQuizTwo(false);
  };
  const handleShowLoginTwo = () => {
    setQuiz(false);
    setQuizTwo(true);
  };
  const handleShowLoginThree = () => {
    setQuizTwo(false);
    setQuizThree(true);
  };
  const handleShowLoginFour = () => {
    setQuizThree(false);
    setQuizFour(true);
  };
  const handleShowLoginFive = () => {
    setQuizFour(false);
    setQuizFive(true);
  };
  const handleShowLoginSix = () => {
    setQuizFive(false);
    setQuizSix(true);
  };
  const handleShowLoginSeven = () => {
    setQuizSix(false);
    setQuizSeven(true);
  };
  const handleShowLoginEight = () => {
    setQuizSeven(false);
    setQuizEight(true);
  };
  const handleShowLoginNine = () => {
    setQuizEight(false);
    setQuizNine(true);
  };
  const handleShowLoginTen = () => {
    setQuizNine(false);
    setQuizTen(true);
  };
  const handleShowLoginEleven = () => {
    setQuizTen(false);
    setQuizEleven(true);
  };

  return (
    <div>
      {quiz && (
        //Question 1
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 1</h3>
                <p>
                  <b>What is the largest planet in our solar system?</b>
                </p>
                <input type="radio" name="planet" /> Jupiter <br />
                <input type="radio" name="planet" /> Saturn <br />
                <input type="radio" name="planet" /> Paris <br />
                <input type="radio" name="planet" /> Mars <br />
                <br />
                <button
                  className="btn btn-primary"
                  onClick={handleShowLoginTwo}
                >
                  Next
                </button>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}
      {quizTwo && (
        //Question 2
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 2</h3>
                <p>
                  <b>Who painted the Mona Lisa?</b>
                </p>
                <input type="radio" name="artist" /> Ladeh Ladeh <br />
                <input type="radio" name="artist" /> Leonardo da Vinci <br />
                <input type="radio" name="artist" /> Leo Davis <br />
                <input type="radio" name="artist" /> Shakes Spear <br />
                <br />
                <button
                  className="btn btn-primary"
                  onClick={handleShowLoginThree}
                >
                  Next
                </button>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}
      {quizThree && (
        //Question 3
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 3</h3>
                <p>
                  <b>What is the chemical symbol for gold?</b>
                </p>
                <input type="radio" name="symbol" /> Fe <br />
                <input type="radio" name="symbol" /> H2o <br />
                <input type="radio" name="symbol" /> Au <br />
                <input type="radio" name="symbol" /> C <br />
                <br />
                <button
                  className="btn btn-primary"
                  onClick={handleShowLoginFour}
                >
                  Next
                </button>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}
      {quizFour && (
        //Question 4
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 4</h3>
                <p>
                  <b>In which year did World War I begin? </b>
                </p>
                <input type="radio" name="year" /> 1914 <br />
                <input type="radio" name="year" /> 1960
                <br />
                <input type="radio" name="year" /> 1900 <br />
                <input type="radio" name="year" /> 1506 <br />
                <br />
                <button
                  className="btn btn-primary"
                  onClick={handleShowLoginFive}
                >
                  Next
                </button>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}
      {quizFive && (
        //Question 5
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 5</h3>
                <p>
                  <b>
                    Which famous scientist developed the theory of relativity?
                  </b>
                </p>
                <input type="radio" name="scientist" /> Albert Einstein <br />
                <input type="radio" name="scientist" /> Robert Lee
                <br />
                <input type="radio" name="scientist" /> Basirat Ololade <br />
                <input type="radio" name="scientist" /> Faraday <br />
                <br />
                <button
                  className="btn btn-primary"
                  onClick={handleShowLoginSix}
                >
                  Next
                </button>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}
      {quizSix && (
        //Question 6
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 6</h3>
                <p>
                  <b>Question 6: What is the smallest prime number?</b>
                </p>
                <input type="radio" name="number" /> 2 <br />
                <input type="radio" name="number" /> 1<br />
                <input type="radio" name="number" /> 6 <br />
                <input type="radio" name="number" /> 9 <br />
                <br />
                <button
                  className="btn btn-primary"
                  onClick={handleShowLoginSeven}
                >
                  Next
                </button>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}
      {quizSeven && (
        //Question 7
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 7</h3>
                <p>
                  <b>
                    What is the process by which plants make their own food
                    using sunlight?
                  </b>
                </p>
                <input type="radio" name="food" /> Photosynthesis <br />
                <input type="radio" name="food" /> Carbon
                <br />
                <input type="radio" name="food" /> Oxygen <br />
                <input type="radio" name="food" /> Water <br />
                <br />
                <button
                  className="btn btn-primary"
                  onClick={handleShowLoginEight}
                >
                  Next
                </button>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}
      {quizEight && (
        //Question 8
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 7</h3>
                <p>
                  <b>Who wrote the play "Romeo and Juliet"?</b>
                </p>
                <input type="radio" name="author" /> William Shakespeare <br />
                <input type="radio" name="author" /> Robert Lee
                <br />
                <input type="radio" name="author" /> Chinua Achebe <br />
                <input type="radio" name="author" /> Wole Soyinka <br />
                <br />
                <button
                  className="btn btn-primary"
                  onClick={handleShowLoginNine}
                >
                  Next
                </button>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}
      {quizNine && (
        //Question 9
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 9</h3>
                <p>
                  <b>What is the largest mammal on Earth?</b>
                </p>
                <input type="radio" name="author" /> Shark <br />
                <input type="radio" name="author" /> Blue Whale
                <br />
                <input type="radio" name="author" /> Bat <br />
                <input type="radio" name="author" /> Star fish
                <br />
                <br />
                <button
                  className="btn btn-primary"
                  onClick={handleShowLoginTen}
                >
                  Next
                </button>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}
      {quizTen && (
        //Question 10
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 10</h3>
                <p>
                  <b> Which gas do plants use for photosynthesis?</b>
                </p>
                <input type="radio" name="plants" /> Carbon Dioxide (CO2) <br />
                <input type="radio" name="plants" /> Water (H2O)
                <br />
                <input type="radio" name="plants" /> Gas <br />
                <input type="radio" name="plants" /> Air
                <br />
                <br />
                <button className="btn btn-primary" onClick={handleShowLoginEleven}>
                  Next
                </button>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}
       {quizEleven && (
        //Submission
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                {/* <h1 className="text-center">Great Job!</h1> */}
                <div className="box bg-primary text-light p-5 text-center" width={"15em"} height={"15em"}>
<h6>Great Job!</h6>
                </div>
                
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quizapp;
