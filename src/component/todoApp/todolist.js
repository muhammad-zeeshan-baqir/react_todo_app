import react from "react";
import { Card } from "antd";

const MyTodoList = ({ task }) => {
  return task.length ? (
    task.map((item, index) => <Card key={index}>{item}</Card>)
  ) : (
    <h6>No Task</h6>
  );
};
export default MyTodoList;
