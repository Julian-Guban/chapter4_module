import React, { useState } from "react";
import Modal from "../Components/Modal";
const quizAnswers = JSON.parse(process.env.REACT_APP_PRETEST_ANSWERS || "[]");

const quizData = [
  {
    question:
      "A hacker has gained unauthorized access to the network. What should the IT team do immediately?",
    choices: [
      "Shut down the company permanently",
      "Address security threats with immediate countermeasures",
      "Inform users but take no action",
      "Increase user access permissions",
    ],
  },
  {
    question: "What is included in pre-deployment security checking?",
    choices: [
      "Documenting network errors",
      "Reviewing firewall and encryption settings",
      "Assigning user access levels",
      "Configuring add-ons",
    ],
  },
  {
    question:
      "The IT team wants to verify that the network runs efficiently under heavy load. What type of testing should be conducted?",
    choices: [
      "User access testing",
      "Performance testing",
      "Security testing",
      "Physical hardware testing",
    ],
  },
  {
    question: "What is the first step in setting up a computer server?",
    choices: [
      "Perform testing and documentation",
      "Set up user access",
      "Pre-deployment procedures",
      "Configure network services",
    ],
  },
  {
    question:
      "An IT manager wants to ensure the network meets user expectations. What should be checked?",
    choices: [
      "Verify compliance with end-user needs",
      "Remove all user restrictions",
      "Limit network access to administrators",
      "Block user feedback reports",
    ],
  },
  {
    question: 'What does "end-user requirements" refer to?',
    choices: [
      "The technical needs and expectations of the people using the system",
      "The legal policies for server setup",
      "The physical location of the servers",
      "The cost of the networking equipment",
    ],
  },
  {
    question:
      "A network that allows direct communication between computers without a central server is called:",
    choices: [
      "Domain-based network",
      "Enterprise network",
      "Peer-to-peer network",
      "VPN",
    ],
  },
  {
    question: "What should be done after testing and documentation?",
    choices: [
      "Shut down the server permanently",
      "Deploy the server for user access",
      "Delete all testing logs",
      "Disable security settings",
    ],
  },
  {
    question:
      "A newly configured server must comply with company testing policies. What should be done?",
    choices: [
      "Skip testing to save time",
      "Follow enterprise testing procedures",
      "Deploy the server immediately",
      "Change the network provider",
    ],
  },
  {
    question: "What does enterprise policy and procedures for testing ensure?",
    choices: [
      "Network services operate without proper documentation",
      "Security and performance testing follows company guidelines",
      "Only the administrator has access to the server",
      "The system works without testing",
    ],
  },
  {
    question:
      "The IT administrator is experiencing a network outage. What should be done first?",
    choices: [
      "Ignore the issue",
      "Perform troubleshooting and identify the root cause",
      "Restart all computers without checking",
      "Delete all server data",
    ],
  },
  {
    question: "Why is documentation important in server setup?",
    choices: [
      "It ensures there is a backup for all hardware components",
      "It allows administrators to record configurations and troubleshooting steps",
      "It helps speed up the internet connection",
      "It prevents unauthorized users from accessing the internet",
    ],
  },
  {
    question:
      "A company requests specific access rights for different employees. What should the administrator do?",
    choices: [
      "Configure user access levels",
      "Increase network bandwidth",
      "Disable all security restrictions",
      "Create additional user accounts",
    ],
  },
  {
    question: "What is the purpose of server modules?",
    choices: [
      "They improve the physical security of the server",
      "They add extra functionality to the server",
      "They slow down the system",
      "They reduce the number of users",
    ],
  },
  {
    question:
      "A business is experiencing frequent network security breaches. What is the best approach to fix this issue?",
    choices: [
      "Restart the server daily",
      "Review security logs and firewall settings",
      "Give all employees administrator access",
      "Disconnect the network permanently",
    ],
  },
  {
    question: "What is the main purpose of network policies?",
    choices: [
      "Restrict all users from accessing the network",
      "Define rules for network access and security",
      "Create a backup of all files",
      "Increase internet speed",
    ],
  },
  {
    question:
      "A company requires a highly secure network before launching operations. What security measure should be implemented?",
    choices: [
      "Disable all firewall settings",
      "Enable encryption and firewall protection",
      "Reduce network security to improve speed",
      "Allow guest users to access the network",
    ],
  },
  {
    question:
      "What component is commonly installed to add more functions to a server?",
    choices: ["RAM", "Server modules and add-ons", "Monitor", "Printer"],
  },
  {
    question:
      "Users report slow performance when using the network. What should be done?",
    choices: [
      "Ignore user complaints",
      "Analyze network traffic and bandwidth usage",
      "Restart the server randomly",
      "Disable network security",
    ],
  },
  {
    question: "Network policies are implemented to:",
    choices: [
      "Restrict user access entirely",
      "Define how the network should be used and secured",
      "Allow free access to all users",
      "Slow down the network speed",
    ],
  },
  {
    question:
      "A technician is troubleshooting an error that keeps recurring on the server. What is the most effective step?",
    choices: [
      "Reset the server without checking logs",
      "Perform root cause analysis and troubleshooting",
      "Disable network access temporarily",
      "Delete all server files",
    ],
  },
  {
    question:
      "A critical server module is outdated and causing errors. What should the administrator do?",
    choices: [
      "Ignore the issue and continue operations",
      "Check and update server modules",
      "Disable the affected module permanently",
      "Reduce server security",
    ],
  },
  {
    question:
      "Which testing phase ensures that server security measures are working?",
    choices: [
      "Pre-deployment security checking",
      "Peer-to-peer testing",
      "Network access configuration",
      "Managing unexpected incidents",
    ],
  },
  {
    question:
      "An administrator needs to maintain a record of all network configurations. What is the best action?",
    choices: [
      "Write configurations on a notepad",
      "Memorize all settings",
      "Record server setup, configurations, and issues",
      "Change the settings regularly",
    ],
  },
  {
    question: "Pre-deployment procedures ensure that:",
    choices: [
      "The network is tested and meets the end-user requirements",
      "Users can access the server without restrictions",
      "The server runs without security configurations",
      "Any device can connect to the network automatically",
    ],
  },
  {
    question: "What should be done when an unexpected network issue occurs?",
    choices: [
      "Ignore the issue and hope it resolves itself",
      "Identify and troubleshoot the problem",
      "Restart all computers without checking",
      "Delete all server data",
    ],
  },
  {
    question:
      "A company wants to revise its network security rules for employees. What should be evaluated?",
    choices: [
      "Server performance reports",
      "Enterprise network speed",
      "Network policies and settings",
      "Employee work schedules",
    ],
  },

  {
    question: "Which of the following is an example of network service?",
    choices: [
      "File sharing",
      "Painting software",
      "Word processing",
      "Video editing",
    ],
  },
  {
    question:
      "Which of the following is NOT part of network services operations?",
    choices: [
      "Managing unexpected incidents",
      "Configuring firewall settings",
      "Addressing end-user requirements",
      "Assigning IP addresses",
    ],
  },
  {
    question:
      "The IT team needs to manage unexpected incidents. What is the best approach?",
    choices: [
      " Monitor server logs and troubleshoot errors",
      "Ignore minor security threats",
      " Allowing unrestricted user access",
      " Disabling network security settings",
    ],
  },
];

const letters = ["A.) ", "B.) ", "C.) ", "D.) "];

function PreTest({ successChange }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  // Handle answer selection
  const handleChange = (questionIndex, choiceIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: choiceIndex });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let correctCount = 0;
    quizData.forEach((q, index) => {
      if (selectedAnswers[index] === quizAnswers[index]) {
        correctCount++;
      }
    });

    setScore(correctCount); // Update score
    setModalOpen(true);
    console.log("Submitted Answers:", selectedAnswers);
  };

  const handleClick = () => {
    successChange(score);
  };

  return (
    <div className="pretest flex-column">
      <h1>Pre-Test:</h1>
      <br/>
      <h4>
        Multiple Choice: Choose the best answer that will satisfy each questions
        or statement.
      </h4>
      <br/>
      <form onSubmit={handleSubmit}>
        {quizData.map((q, index) => (
          <div key={index} style={{padding: "10px"}}>
            <p>
              {index + 1}.) {q.question}
            </p>
            <ul className="grid col-2 g-2" style={{padding: "10px"}}>
              {q.choices.map((choice, i) => (
                <li key={i}>
                  <label >
                    <input
                      type="radio"
                      name={`question-${index}`} // Group radios by question
                      value={i}
                      checked={selectedAnswers[index] === i} // Check selected
                      onChange={() => handleChange(index, i)} // Update state
                      required
                    />
                    {letters[i]} {choice}
                  </label>
                </li>
              ))}
            </ul>
            <hr/>
            </div>
        ))}
        <button className="pretest-btn" type="submit">Submit Answers</button>
        </form>
      <Modal
        message={score}
        subtitle="Your action was completed!"
        icon="✅"
        state={modalOpen}
        onClose={() => setModalOpen(false)}
      >
      <button onClick={handleClick} className="pretest-btn"> save </button> 
      </Modal>
    </div>
  );
}

export default PreTest;
