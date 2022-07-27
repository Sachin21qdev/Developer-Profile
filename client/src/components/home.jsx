import Developers from "../components/Developers";
import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Head from "../components/Header";
import SearchIcon from "../Images_Icons/Profile/search-24px.svg";
import axiosInstance from "../config";

function Home(props) {
  const [developers, setDevelopers] = useState([]);
  const [constDevelopers, constSetDevelopers] = useState([]);
  const [NewDeveloperAdded, setNewDeveloperAdded] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  const DeveloperAdded = () => {
    setNewDeveloperAdded(true);
  };
  const HandleClick = (status) => {
    setIsAddDevClicked(status);
    setShow(status);
    document.querySelector(".homeBody").style.opacity = 0.2;
  };

  const WordMatch = () => {
    if (searchWord === "") {
      setDevelopers(constDevelopers);
    } else {
      let newDevelopers = [];
      newDevelopers = constDevelopers.filter((developer) => {
        return developer["id"]
          .toLocaleLowerCase()
          .includes(searchWord.toLocaleLowerCase());
      });
      setDevelopers(newDevelopers);
    }
  };
  const fetchAvailableDevelopers = () => {
    axiosInstance
      .get("https://sachin-developer-profile.herokuapp.com/api/developers/")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setDevelopers(data);
        constSetDevelopers(data);
      });
  };
  useEffect(() => {
    fetchAvailableDevelopers();
  }, [NewDeveloperAdded]);
  useEffect(() => {
    WordMatch();
  }, [searchWord]);
  const [isAddDevClicked, setIsAddDevClicked] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div>
        <div class="homeBody">
          <Head />
          <div className="explore">
            <h3>Explore Developer Profiles</h3>
            <hr></hr>
          </div>

          <div className="search">
            <input
              type="text"
              className="searchBox"
              placeholder="Search For Developer"
              value={searchWord}
              onChange={(event) => setSearchWord(event.target.value)}
            />
            <button
              className="searchBtn"
              onClick={(event) => {
                WordMatch(event);
              }}
            >
              <img src={SearchIcon} alt="search" />
            </button>
          </div>

          <Developers developers={developers} />
          <hr></hr>
          <p>Could not find what you are looking for ?</p>
          <button
            onClick={() => {
              HandleClick(true);
            }}
            className="addDevBtn"
          >
            Add developer Info
          </button>
        </div>
        {isAddDevClicked && <Form show={show} />}
      </div>
    </React.Fragment>
  );
}

export default Home;
