import React, { useEffect, useState } from "react";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4200/subscriber")
      .then((res) => res.json())
      .then((data) => setSubscribers(data));
  }, []);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="text-center border-b">
              <th className="bg-primary text-white border-r">No</th>
              <th className="bg-accent text-white">Subscribers</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber, index) => (
              <tr className="text-center">
                <td className="text-white bg-primary border-r">{index + 1}</td>
                <td className="bg-accent text-white">{subscriber.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscribers;
