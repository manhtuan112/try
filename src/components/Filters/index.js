import { Col, Input, Radio, Row, Select, Tag, Typography } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { priorityFilterChange, searchFilterChange, statusFilterChange } from './filtersSlice';
import { useSelector } from 'react-redux';
import { searchTextSelector, filterStatusSelector, filterPrioritySelector } from './../../redux/selectors';

const { Search } = Input;


export default function Filters() {

  const dispatch = useDispatch()
  const searchText = useSelector(searchTextSelector)
  const filterStatus = useSelector(filterStatusSelector)
  const filterPriority = useState(filterPrioritySelector)


  const handleChangeSearch = (e) =>{
    dispatch(searchFilterChange(e.target.value))
  }

  
  const handleStatusChange = (e) =>{
    dispatch(statusFilterChange(e.target.value))
  } 

  const handlePriorityChange = (e) => {
    dispatch(priorityFilterChange(e))
  }
  
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={(e)=>handleChangeSearch(e)}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={(e)=>handleStatusChange(e)}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriority}
          onChange={handlePriorityChange}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
