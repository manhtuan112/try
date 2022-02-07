import { Col, Input, Radio, Row, Select, Tag, Typography } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { actions } from '../../redux';
import { useSelector } from 'react-redux';
import { filterPrioritySelector, filterStatusSelector, searchTextSelector } from '../../redux/selectors';

const { Search } = Input;


export default function Filters() {

  const dispatch = useDispatch()
  
  const searchText = useSelector(searchTextSelector)
  const filterStatus = useSelector(filterStatusSelector)
  const filterPriority = useSelector(filterPrioritySelector)


  const handleChangeSearch = (e) =>{
    dispatch(actions.searchTodo(e.target.value))
  }

  
  const handleStatusChange = (e) =>{
    dispatch(actions.statusFilterChange(e.target.value))
  } 

  const handlePriorityChange = (e) => {
    dispatch(actions.priorityFilterChange(e))
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
