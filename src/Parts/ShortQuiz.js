import React from "react";
import Quiz from "../Images/task-list_4861139.png";

function ShortQuiz() {
  return (
    <div
      className="full-width flex-center flex-column"
      style={{ width: "90%", padding: "20px" }}
    >
      <h1 className="overview-title">
        <a
          href="https://www.freepik.com/icon/task-list_4861139#fromView=family&page=1&position=16&uuid=637bfeb8-9ac3-4d03-90bc-13055505bdd7"
          target="_black"
        >
          <img
            src={Quiz}
            alt="Short Quiz"
            width={"50px"}
            height={"50px"}
            style={{ paddingRight: "15px" }}
          />
        </a>
        What to Check!
      </h1>
      <div className="card" style={{ margin: "20px" }}>
        <h4>Scenario:</h4>
        <p className="overview-intro">
          Now that you’ve explored the contents and activities of this lesson,
          it’s time to reflect on what you’ve learned. Answer this short quiz to
          assess your understanding of user access level configurations, their
          classifications, proper selection, and implementation in a network
          environment. Apply what you’ve learned and carefully consider each
          question. Good luck!
        </p>
        <div className="card">
          <br />
          <div className="flex-center flex-column">
            <h4>How to Access the Short Quiz: </h4>
            <br />
            <a className="tab-btns" href="https://forms.gle/X313QwAnMtbHLn1CA">
              <button>Click Here</button>
            </a>
          </div>
        </div>
      </div>

      <br />
      <hr className="col-line" />
      <br />

      <h1 className="overview-title">
        <a
          href="https://www.freepik.com/icon/task-list_4861139#fromView=family&page=1&position=16&uuid=637bfeb8-9ac3-4d03-90bc-13055505bdd7"
          target="_black"
        >
          <img
            src={Quiz}
            alt="Short Quiz"
            width={"50px"}
            height={"50px"}
            style={{ paddingRight: "15px" }}
          />
        </a>
        What I have learned?
      </h1>
      <div className="card" style={{ margin: "20px" }}>
        <p className="overview-intro">
          Reflect on the activities and discussions from this lesson about
          setting user access and network security. Think about how these
          concepts make you feel and why you believe they are important, not
          just from a technical perspective, but also from a personal and
          ethical standpoint.
        </p>
      </div>
      <div className="topic-container">
        <h3>
          <b>Guide Questions:</b>
        </h3>
        <p className="overview-intro">
          <i>
            1. Why do you think it’s important to assign the correct access
            level to each role? Consider how your own values of responsibility,
            trust, and respect for others’ privacy influence your view on this
            topic.
          </i>
        </p>
        <p className="overview-intro">
          <i>
            2. How do network policies, such as authentication and data
            security, impact your sense of responsibility and commitment to
            protecting resources? Reflect on how these practices make you feel
            about your role in safeguarding data and maintaining smooth
            operations, whether in a personal, professional, or organizational
            context.
          </i>
        </p>
        <p className="overview-intro">
          <i>
            3. Share examples from the activities or real-life situations where
            you felt strongly about the importance of these practices. How did
            these experiences shape your understanding of security and the
            ethical responsibility it involves?
          </i>
        </p>
      </div>
    </div>
  );
}

export default ShortQuiz;
