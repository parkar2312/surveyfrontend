import React, { useEffect, useState } from "react";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

import "survey-core/defaultV2.css";
import "./index.css";
import { json } from "./json";
// import { json } from "./delthis";

import $ from "jquery";
import "nouislider/distribute/nouislider.min.css";

import * as SurveyCore from "survey-core";
import * as widgets from "surveyjs-widgets";
import BodyChart from "./bodyChart";
window["$"] = window["jQuery"] = $;

StylesManager.applyTheme("defaultV2");
widgets.nouislider(SurveyCore);

function App() {
  const [name, setName] = useState("");
  // place name here to make changes
  const survey = new Model(json);
  var storageName = "SurveyJS_LoadState";
  var timerId = 0;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:3001/postsnew`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const user = await response.json();

      setName(user);
      console.log(Object.values(user)[0][0]);
    };

    fetchUser();
  }, []);

  function loadState(survey) {
    //Here should be the code to load the data from your database
    var storageSt = window.localStorage.getItem(storageName) || "";
    var res = {};
    if (storageSt) res = JSON.parse(storageSt);
    //Create the survey state for the demo. This line should be deleted in the real app.

    //Set the loaded data into the survey.
    if (res.currentPageNo) survey.currentPageNo = res.currentPageNo;
    if (res.data) survey.data = res.data;
  }
  function saveState(survey) {
    var res = { currentPageNo: survey.currentPageNo, data: survey.data };
    console.log(res.data);
    //Here should be the code to save the data into your database
    window.localStorage.setItem(storageName, JSON.stringify(res));
  }
  survey.onCurrentPageChanged.add(function (survey, options) {
    saveState(survey);
  });
  survey.onComplete.add(function (sender, options) {
    //kill the timer
    clearInterval(timerId);
    //save the data on survey complete. You may call another function to store the final results
    saveState(sender);
  });
  //Load the initial state
  loadState(survey);
  //save the data every 10 seconds, it is a good idea to change it to 30-60 seconds or more.
  // timerId = window.setInterval(function () {
  //   saveState(survey);
  // }, 10000);

  return (
    <div>
      <Survey model={survey} />
      <BodyChart />
    </div>
  );
}

export default App;
