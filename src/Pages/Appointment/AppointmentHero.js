import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";

const AppointmentHero = ({ date, setDate }) => {
  return (
    <section>
      <div className="hero lg:min-h-[80vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20 h-full lg:p-0">
          <img src={chair} className="rounded-lg h-full" alt="" />
          <div className="shadow-2xl rounded-lg">
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              className="p-2 lg:p-8 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentHero;
