import { useState, useEffect } from "react";
import BackendUrl from "../Config/BackendUrl";
import axios from "axios";

const Total = () => {
  const [totalFees, setTotalFees] = useState(0);

  const loadData = async () => {
    try {
      let api = `${BackendUrl}display`;
      const response = await axios.get(api);

      const total = response.data.reduce((sum, item) => {
        return sum + Number(item.fees || 0);
      }, 0);

      setTotalFees(total);
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h2>Total Sallary: {totalFees}</h2>
    </>
  );
};

export default Total;
