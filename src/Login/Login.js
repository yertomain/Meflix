import React, { useState } from "react";
import Title from "./Title";
import Label from "./Label";
import Input from "./Input";
import "./Login.css";



function Login({ usuario }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [hasError, setHasError] = useState(false);

  function handleChange(name, value) {
    if (name === "usuario") {
      setUser(value);
      setHasError(false);
    } else {
      if (value.length <= 6) {
        setPasswordError(true);
        setHasError(false);
      } else {
        setPasswordError(false);
        setPassword(value);
        setHasError(false);
      }
    }
  }

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === "yertomain" && param.password === "h123456") {
        window.location.href = "./Menu";

      } else {

        setHasError(true);
      }
    } else {

      setHasError(true);
    }
  }

  function handleSubmit() {
    let account = { user, password };
    if (account) {
      ifMatch(account);
    }
  }
  return (
    <div className="div__container-l">
      <img className="img__me" src="https://play-lh.googleusercontent.com/erMcluL9SIKSOkqlr5LcOHB9qBPjWXK_vSmCMoK2KygtBCNLqgtp9EWmktbxmGcMhaM=w220-rw" alt="no img" />
      <div className="div__container-co">
        <div className="co__container">
          <Title text="Binvenido" />
          <div className="co__label">
            {hasError && (
              <label>
                Su usuario o contraseña son incorrectos.
              </label>
            )}
          </div>
          <Label text="Usuario" />
          <Input
            attribute={{
              id: "usuario",
              name: "usuario",
              type: "text",
              placeholder: "Ingresar usuario",
            }}
            handleChange={handleChange}
          />
          <Label text="Contraseña" />
          <Input
            attribute={{
              id: "contraseña",
              name: "contraseña",
              type: "password",
              placeholder: "Ingresar contraseña",
            }}
            handleChange={handleChange}
            param={passwordError}
          />
          <div className="con__in">
            {passwordError && <label className="label__in">Contraseña invalida o incompleta</label>}
          </div>
          <div className="button__ingreso">
            <button className="button__in" onClick={handleSubmit}>Ingresar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
