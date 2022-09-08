import React from "react";
import team1 from "../../assets/team/team_1.png";
import team2 from "../../assets/team/team_2.png";
import team3 from "../../assets/team/team_3.png";
import team4 from "../../assets/team/team_4.png";
import AboutMember from "./AboutMember";
const AboutTeam = () => {
  const teams = [
    { _id: 1001, name: "Julian Jameson", title: "Doctor", img: team1 },
    { _id: 1002, name: "Julian Jameson", title: "Doctor", img: team2 },
    { _id: 1003, name: "Julian Jameson", title: "Doctor", img: team3 },
    { _id: 1004, name: "Julian Jameson", title: "Doctor", img: team4 },
  ];
  return (
    <section>
      <div className="container mx-auto py-20 px-3 lg:px-0">
        <div class="mb-20 text-center">
          <h4 className="font-bold text-[#8D5CF6]">MEET OUR TEAM</h4>
          <h1 class="text-4xl font-bold mb-4 text-gray-900">
            Helping you smile.
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {teams.map((team) => (
            <AboutMember key={team._id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
