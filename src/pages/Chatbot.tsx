// import React, { useState } from "react";
// import axios from "axios";

// interface Message {
//   text: string;
//   sender: "user" | "bot";
// }

// const Chatbot: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState("");

//   const projectId = "YOUR_PROJECT_ID";
//   const accessToken = "YOUR_ACCESS_TOKEN";

//   const sendMessageToDialogflow = async (message: string) => {
//     try {
//       const response = await axios.post(
//         `https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/default:detectIntent`,
//         {
//           queryInput: {
//             text: {
//               text: message,
//               languageCode: "en",
//             },
//           },
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = response.data.queryResult;
//       const botMessage: Message = {
//         text: result.fulfillmentText,
//         sender: "bot",
//       };
//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//     } catch (error) {
//       console.error("Error sending message to Dialogflow:", error);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (input.trim() !== "") {
//       const userMessage: Message = { text: input, sender: "user" };
//       setMessages((prevMessages) => [...prevMessages, userMessage]);
//       sendMessageToDialogflow(input);
//       setInput("");
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chatbot-window">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.sender}`}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default Chatbot;
