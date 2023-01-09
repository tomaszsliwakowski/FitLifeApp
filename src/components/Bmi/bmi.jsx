import React, { useEffect, useState } from "react";
import "./bmi.css";
const BMI = () => {
  const [inputData, setinputData] = useState({
    weight: "",
    height: "",
  });
  const [weightFail, setweightFail] = useState(false);
  const [heightFail, setheightFail] = useState(false);

  const [BMI, setBMI] = useState(0);
  const [BMIinfo, setBMIinfo] = useState("");
  const HandleInput = (e) => {
    setinputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const submitform = (e) => {
    e.preventDefault();
    if (inputData.weight !== "" && Number(inputData.weight) > 10) {
      setweightFail(false);
    } else {
      setweightFail(true);
    }
    if (inputData.height !== "" && Number(inputData.height) > 80) {
      setheightFail(false);
    } else {
      setheightFail(true);
    }

    if (inputData.weight !== "" && inputData.height !== "") {
      setBMI(
        (
          (Number(inputData.weight) /
            (Number(inputData.height) * Number(inputData.height))) *
          10000
        ).toFixed(2)
      );
      setinputData({
        weight: "",
        height: "",
      });
    }
  };

  useEffect(() => {
    switch (true) {
      case BMI < 16:
        setBMIinfo("Wygłodnienie");
        break;
      case BMI > 16 && BMI < 17:
        setBMIinfo("Wychudzenie");
        break;
      case BMI >= 17 && BMI < 18.5:
        setBMIinfo("Niedowaga");
        break;
      case BMI >= 18.5 && BMI < 25:
        setBMIinfo("Waga prawidłowa");
        break;
      case BMI >= 25 && BMI < 30:
        setBMIinfo("Nadwaga");
        break;
      case BMI >= 30 && BMI < 35:
        setBMIinfo("Otyłość");
        break;
      case BMI >= 35 && BMI < 40:
        setBMIinfo("Zawansowana otyłość");
        break;
      case BMI >= 40:
        setBMIinfo("Skrajna otyłość");
        break;
      default:
        setBMIinfo("xd");
        break;
    }
  }, [BMI]);

  return (
    <div className="bmi">
      <form onSubmit={submitform}>
        <span>
          <h2>Oblicz swoje BMI</h2>
        </span>
        <span>
          <input
            type="number"
            placeholder="Waga (kg)"
            onChange={HandleInput}
            name="weight"
            value={inputData.weight}
          />
          {weightFail ? <p>Błędnie podana waga</p> : null}
        </span>
        <span>
          <input
            type="number"
            placeholder="Wzrost (cm)"
            onChange={HandleInput}
            name="height"
            value={inputData.height}
          />
          {heightFail ? <p>Błędnie podany wzrost</p> : null}
        </span>
        <button>Oblicz</button>
      </form>
      {BMI > 0 ? (
        <div className="bmi_reasult">
          <span>
            <label>
              <p>Twój wskaźnik masy ciała wynosi:</p>
              <p>{BMI}</p>
            </label>
            <label>
              <p>Twoje BMI wskazuje na:</p>
              <p>{BMIinfo}</p>
            </label>
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default BMI;
