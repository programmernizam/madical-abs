import React from "react";
import bg from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";

const MakeAppointment = () => {
  return (
    <section className="lg:mt-[100px]" style={{ background: `url(${bg})` }}>
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="lg:flex-1 hidden lg:inline-block">
            <img className="mt-[-150px]" src={doctor} alt="" />
          </div>
          <div className="flex-1 p-5 lg:p-0">
            <h3 className="text-xl text-[#19D3AE] font-bold">Appointment</h3>
            <h2 className="text-4xl text-white font-semibold mt-5">
              Make an appointment Today
            </h2>
            <p className="text-white my-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn border-0 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
