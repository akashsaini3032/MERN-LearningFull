

import { useEffect, useState } from "react";
import axios from "axios";
import BackEndUrl from "../config/BackendUrl";

const AdminSubmittedTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchSubmittedTasks = async () => {
      try {
        const res = await axios.get(`${BackEndUrl}/admin/submitted-tasks`);
        setTasks(res.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    fetchSubmittedTasks();
  }, []);

  return (
    <div>
      <h2>✅ Submitted Tasks by Users</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Completion Time</th>
            <th>Submitted By</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.compday} days</td>
              <td>{task.userid?.name} ({task.userid?.email})</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminSubmittedTasks;
