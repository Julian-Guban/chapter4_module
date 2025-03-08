import React from 'react'
import Icon from '../Images/026ce97c-a078-4245-8743-c871498add29-removebg-preview.png'
import Plan from '../Images/474454065_1335968427755931_8617461186670355990_n.jpg'

function blueprint() {
  return (
    <div className="full-width flex-column flex-center">
      <div className="about-texts">
        <div className="about-title-border">
          <h1 className="about-title flex-center">
          <img src={Icon} alt="Instructional Blueprint" width={"50px"} height={"50px"} style={{paddingRight: "15px"}} />
            Instructional Blueprint</h1>
        </div>
        <img src={Plan} alt='Instructional Blueprint' width={"100%"} height={"100%"} />
      </div>
    </div>
  )
}

export default blueprint