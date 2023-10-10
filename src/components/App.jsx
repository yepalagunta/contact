import React, { useState } from "react";
import "./App.css";
import Contacts from './contacts/Contacts';
import Notepad from './notepad/notepad'
import Music from "./music/Music";
import Mail from './mail/mail'
export default function App() {
//Contact button 

const [cshow, CsetShow] = useState(false);
const Contacts_button = () => {
  CsetShow(true)
  MsetShow(false)
  NsetShow(false)
  MasetShow(false)
};

// Music button
const [mshow, MsetShow] = useState(false);
const Music_button = () => {
  MsetShow(true)
  CsetShow(false)
  NsetShow(false)
  MasetShow(false)};

// Notepad button
const [nshow, NsetShow] = useState(false);
const Notepad_button = () => {
  NsetShow(true)
  CsetShow(false)
  MsetShow(false)
  MasetShow(false)};

// Mail button
const [mashow, MasetShow] = useState(false);
const Mail_button = () => {
  MasetShow(true)
  CsetShow(false)
  MsetShow(false)
  NsetShow(false)
  };

return (
    <div>
      <header>
        <h1>Main page</h1>
            <a><button className="button button-primary" onClick={Contacts_button}>Contacts_button</button></a>

            <a><button className="button button-success" onClick={Music_button}>Music_button</button></a>
            
            <a><button className="button button-warning" onClick={Notepad_button}>Notepad_button</button></a>
            
            <a><button className="button button-danger" onClick={Mail_button}>Mail_button</button></a>
       
      </header>
      {mashow && <Mail/>}
      {cshow && <Contacts />}
      {mshow && <Music/>}
      {nshow && <Notepad/>}
    </div>
  );
}
