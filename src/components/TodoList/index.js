import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {todoUsingReselect} from "../../redux/selectors";
import { addTodo } from "./todoSlice";

export default function TodoList() {
  const [todoName, setTodoName] = useState();
  const [priority, setPriority] = useState("Medium");

  const dispatch = useDispatch();
  const inputRef = useRef();
  //Lay du lieu todo
  // const todoList = useSelector(selector.todoListSelector);//theo selector bth
  const todoList = useSelector(todoUsingReselect)

  

  const handleAddBtnClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );

    setTodoName("");
    setPriority("Medium");
    inputRef.current.focus();
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((item) => (
          <Todo key={item.id} id={item.id} name={item.name} prioriry={item.priority} completed={item.complete} />
        ))}
      </Col>
      {/* Nhap du lieu */}
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todoName}
            ref={inputRef}
            onChange={(e) => setTodoName(e.target.value)}
          />
          {/* voi Select thi moi option co 1 value nen chi can truyen value khong can truyen e.target.value nhu input */}
          <Select value={priority} onChange={(value) => setPriority(value)}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddBtnClick} type="primary">
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
