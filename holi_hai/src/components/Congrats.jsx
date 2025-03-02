

import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";


const Congrats = () => {
  const { sender, recipient } = useParams();
  return (
    <div className="p-5 text-center">
      <h1 className="text-3xl font-bold">
        🎉 Congratulations {decodeURIComponent(recipient)}! 🎉
      </h1>
      <h2>On This Auspicious Occasion of Holi </h2>
      <h2 className="text-lg mt-2">From: {decodeURIComponent(sender)}</h2>
      <div className="content-center">
        <center>

        <img
          src="https://images.indianexpress.com/2022/03/holi-02.jpg?w=640"
          alt=""
          srcset=""
          loading="lazy" 
          />
          </center>
      </div>
    </div>
  );
};

export default Congrats