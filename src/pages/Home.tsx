// Home.tsx

import Features from "../components/home/Features";
import Intro from "../components/home/Intro";
import Working from "../components/home/Working";
import PublicLayout from "../components/layout/PublicLayout";
import ScrollToTop from "../components/reusable/ScrollToTop";

// Define the function to handle the button click
const handleChatbotButtonClick = () => {
  // Redirect the user to the chatbot page
  window.location.href = "https://mind-mate-wellness.vercel.app/message";
};

function Home() {
  return (
    <PublicLayout>
      <Intro />
      <Working />
      <Features />
      {/* Add the button for the chatbot */}
      <button
        className="fixed bottom-8 right-8 bg-white flex items-center justify-center rounded-full p-3 shadow-md transition duration-300 hover:ring-4 hover:ring-blue-500"
        onClick={handleChatbotButtonClick}
        style={{ width: "100px", height: "100px", overflow: "hidden" }}>
        <img
          src="/icons/bot.png"
          alt="Chatbot"
          style={{
            backgroundColor: "transparent",
            objectFit: "cover",
          }}
        />
      </button>

      <ScrollToTop />
    </PublicLayout>
  );
}

export default Home;
