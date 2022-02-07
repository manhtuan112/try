import { Checkbox, Row, Tag } from 'antd';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../TodoList/TodoSlice';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ id, name, prioriry, completed }) {
  
  const dispatch = useDispatch()
  
  const toggleCheckbox = () => {
    dispatch(changeStatus(id))    
    
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(completed ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={completed} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
