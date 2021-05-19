import React from "react";
import OurTeamPeople_BottomCard from "../../OurTeam/OurTeamComp/OurTeamPeople_BottomCard";
import PageTopsvg from "../../ReComp/PageTopsvg";
import "./SingleServiceTeam.css";

function SingleServiceTeam() {
  return (
    <div className="singleServiceTeam">
        <PageTopsvg Direction={{ transform: "rotate(180deg)" }} />
      <div className="singleServiceTeam_top">
        <p className="singleServiceTeam_topHeading">Meet Awesome Team</p>
        <p className="singleServiceTeam_topDetail">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa quae{" "}
        </p>
      </div>
      <div className="singleServiceTeamBottom">
        <OurTeamPeople_BottomCard
          Name="Jonathan Doe"
          Post="CEO / Founder"
          Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/bearded-young-hipster-standing-alone-against-a-gray-background.jpg"
        />
        <OurTeamPeople_BottomCard
          Name="Christian Doe"
          Post="UI/UX Designer"
          Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/portrait-of-a-elegant-young-woman-sitting-alone-outdoors.jpg"
        />
        <OurTeamPeople_BottomCard
          Name="Alexander Doe"
          Post="Creative Director"
          Image="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/07/motivated-cheerful-and-glad-pleasant-caucasian-adult-bearded-man-in-grey-sweater-smiling-with-1.jpg"
        />
      </div>
      <PageTopsvg />
    </div>
  );
}

export default SingleServiceTeam;
