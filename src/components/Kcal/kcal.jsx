import React, { useState } from "react";
import "./kcal.css";
const KCAL = () => {
  const [PM, setPM] = useState({
    SPM: "",
    CPM: "",
  });
  const [form, setform] = useState({
    plec: "",
    waga: "",
    wzrost: "",
    wiek: "",
    praca: "",
    km: "",
  });
  const handlerFormInput = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const CalcKCAL = (e) => {
    e.preventDefault();
    if (form.plec === "m") {
      let reasult =
        66.5 +
        13.75 * Number(form.waga) +
        5.003 * Number(form.wzrost) -
        6.775 * Number(form.wiek);

      setPM({
        SPM: reasult.toFixed(),
        CPM: (reasult * Number(form.tryb)).toFixed(),
      });
    } else if (form.plec === "k") {
      let reasult =
        655.1 +
        9.563 * Number(form.waga) +
        1.85 * Number(form.wzrost) -
        4.676 * Number(form.wiek);

      setPM({
        SPM: reasult.toFixed(),
        CPM: (reasult * Number(form.tryb)).toFixed(),
      });
    }
  };

  return (
    <div className="kcal">
      <h2>Kalkulator kalorii</h2>
      <form className="form_kcal" onSubmit={CalcKCAL}>
        <div>
          <label htmlFor="plec">Płeć:</label>
          <select name="plec" id="plec" onChange={handlerFormInput}>
            <option>Wybierz płeć</option>
            <option value="m">Mężczyzna</option>
            <option value="k">Kobieta</option>
          </select>
        </div>
        <div>
          <label htmlFor="waga_cal">Waga:</label>
          <input
            type="number"
            id="waga_cal"
            name="waga"
            required
            value={form.waga}
            placeholder="(kg)"
            onChange={handlerFormInput}
          />
        </div>
        <div>
          <label htmlFor="wzrost_cal">Wzrost:</label>
          <input
            type="number"
            id="wzrost_cal"
            name="wzrost"
            required
            value={form.wzrost}
            placeholder="(cm)"
            onChange={handlerFormInput}
          />
        </div>
        <div>
          <label htmlFor="wiek_cal">Wiek:</label>
          <input
            type="number"
            id="wiek_cal"
            name="wiek"
            required
            value={form.wiek}
            placeholder="(lat)"
            onChange={handlerFormInput}
          />
        </div>
        <div>
          <label htmlFor="tryb">Tryb życia:</label>
          <select name="tryb" id="tryb" onChange={handlerFormInput}>
            <option>Wybierz rodzaj pracy</option>
            <option value="1.2">Siedzący tryb życia</option>
            <option value="1.375">Lekko aktywny tryb życia</option>
            <option value="1.55">Umiarkowanie aktywny tryb życia</option>
            <option value="1.725">Bardzo aktywny tryb życia</option>
            <option value="1.9">Bardzo aktywny tryb życia</option>
          </select>
        </div>
        <div>
          <label htmlFor="rmr_cal">Spoczynkowa Przemiana Materii:</label>
          <input type="text" id="rmr_cal" disabled value={PM.SPM + " kcal"} />
        </div>
        <div>
          <label htmlFor="CPM_cal">Całkowita przemiana materii:</label>
          <input type="text" id="CPM_cal" disabled value={PM.CPM + " kcal"} />
        </div>
        <div>
          <button>Oblicz</button>
        </div>
      </form>
    </div>
  );
};

export default KCAL;
