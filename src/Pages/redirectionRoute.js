import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function Redirect() {
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    navigate("/"); // Go back to the previous page in history
  }, [navigate]);

  return null; // No UI needed, just perform the redirect
}

export default Redirect;
