import React from "react";
import CardTopics from "../Components/CardTopics";

function topics() {
  return (
    <div className="full-width flex-center">
      <div className="cabinet">
        <CardTopics
          title={"Set-Up User Access"}
          num={1}
          info={
            "In this lesson, you will learn about understanding user access levels and network policies, configuring user permissions and security settings, and managing user accounts and access control to ensure proper user access."
          }
        />
        <CardTopics
          title={"Configure Network"}
          num={2}
          info={
            "This lesson focuses on setting up and managing network services, configuring network modules and add-ons, and ensuring network security while addressing potential incidents to maintain a secure and efficient network environment."
          }
        />
        <CardTopics
          title={"Perform Testing and Documentation"}
          num={3}
          info={
            "In this lesson, you will gain knowledge on conducting pre deployment testing and checking requirements, documenting findings and Information Communication Technology Computer Systems Servicing (CSS) – Set-Up Computer Servers creating reports, and ensuring end-user security and operational readiness for a smooth deployment process."
          }
        />
        <CardTopics
          title={"Pre-Deployment Procedures"}
          num={4}
          info={
            "This final lesson covers finalizing server configurations and network settings, conducting peer-to-peer (P2P) network checks, and preparing for enterprise-level deployment while addressing any unexpected issues to ensure a successful deployment."
          }
        />
      </div>
    </div>
  );
}

export default topics;
