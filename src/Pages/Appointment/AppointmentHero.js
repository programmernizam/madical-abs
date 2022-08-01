import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";

const AppointmentHero = ({ date, setDate }) => {
  return (
    <section>
      <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse gap-20">
          <img src={chair} class="lg:max-w-2xl rounded-lg shadow-2xl" alt="" />
          <div className="shadow-2xl rounded-lg">
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              className="p-8 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentHero;
