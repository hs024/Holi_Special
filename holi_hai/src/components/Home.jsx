
import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";


const Home = () => {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [link, setLink] = useState("");

  const generateLink = () => {
    const encodedSender = encodeURIComponent(sender);
    const encodedRecipient = encodeURIComponent(recipient);
    const generatedLink = `${window.location.origin}/Holi_Special/#/congrats/${encodedSender}/${encodedRecipient}`;
    setLink(generatedLink);
  };

  return (
    <div className="p-5 text-center ">
      <h1 className="text-2xl font-bold mb-4">
        Generate a Congratulatory Link
      </h1>
      <input
        type="text"
        placeholder="Your Name"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        className="border p-2 m-2 rounded"
      />
      <br />
      <input
        type="text"
        placeholder="Recipient's Name"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="border p-2 m-2 rounded"
      />
      <br />
      <button
        onClick={generateLink}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Generate Link
      </button>
      {link && (
        <div className="mt-4">
          <p>Share this link:</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {link}
          </a>
        </div>
      )}
    </div>
  );
};


export default Home