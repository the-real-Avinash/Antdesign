import React from 'react'
import 'antd/dist/antd.min.css';
import { Button, Input, Select, Form,Table,message,Alert, DatePicker, Spin, Progress } from 'antd';
import {PoweroffOutlined, UserOutlined} from '@ant-design/icons'
import { useState } from 'react';
import { useEffect } from 'react';


const App = () => {

  // const [showAlert, setShowAlert] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(()=>{
  //   setLoading(true)
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res)=>res.json())
  //     .then((data)=>{
  //       setDataSource(data);
  //     })
  //     .catch((err)=>{
  //       console.log(err.message);
  //     }).finally(()=>{
  //       setLoading(false); 
  //     })
  // },[])

  // const columns = [
  //   {
  //     key: "1",
  //     title: "ID",
  //     dataIndex: 'id',
  //   },
  //   {
  //     key: "2",
  //     title: "User-ID",
  //     dataIndex: 'userId',
  //     sorter: (record1, record2)=>{
  //       return record1.userId - record2.userId
  //     }
  //   },
  //   {
  //     key: "3",
  //     title: "Status",
  //     dataIndex: 'completed',
  //     render: (completed) =>{
  //       return <p>{completed ? "Completed": "In progress"}</p>
  //     },
  //     filters: [
  //       {text: 'complete', value: true},
  //       {text: 'In Progress', value: false}
  //     ],
  //     onFilter: (value, record) =>{
  //       return record.completed === value
  //     }
  //   },
  // ]

  // const HandleClick = () =>{
    
  // }

  // const sayHello = () =>{
  //   console.log("Hello");
  // }
  // const onFinish = (e) =>{
  //   setTimeout(() => {
  //     // message.success("Login success");
  //     setShowAlert(true);
  //   }, 2000);
  // }
  // const city = ['nagar', 'pune', 'bombay'];

  // const source = [
  //   {
  //     name: 'Name 1',
  //     age: 20,
  //     address: 'Address 1'
  //   },
  //   {
  //     name: 'Name 2',
  //     age: 23,
  //     address: 'Address 2'
  //   },
  //   {
  //     name: 'Name 3',
  //     age: 21,
  //     address: 'Address 2'
  //   },
  // ]

  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: 'name',
  //     key: 'key'
  //   },

  //   {
  //     title: "Age",
  //     dataIndex: 'age',
  //     key: 'key',
  //     sorter: (a,b) => a.age -b.age
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: 'address',
  //     key: 'key'
  //   },
  //   {
  //     title: "Graduated? ",
  //     key: 'key',
  //     render: payload =>{
  //       return <p>{payload.age > 20 ? "True": "False" }</p>
  //     }

  //   },
  // ]

  const columns = [
    {
      title: "Student ID",
      datIndex: 'id',
    },
    {
      title: "Student Name",
      datIndex: 'name',
    },
    {
      title: "Student Grade",
      datIndex: 'grade',
    },
  ]

  const dataSource = [
    {
      key:'1',
      id: 1,
      name: "Student name 1",
      grade: 'A+'
    },
    {
      key:'2',
      id: 2,
      name: "Student name 2",
      grade: 'C+'
    },
    {
      key:'3',
      id: 3,
      name: "Student name 3",
      grade: 'B+'
    },
    {
      key:'4',
      id: 4,
      name: "Student name 4",
      grade: 'AB+'
    },
  ]

  
  return (
   <>
   {/* Button */}
   {/* <Button type="primary" onClick={sayHello} icon={<PoweroffOutlined />}
    style={{background:'orange',color:'red'}}>Primary Button</Button> */}

    {/* Input */}
    {/* <Input.Search placeholder='Name' maxLength={10} type='password' prefix={<UserOutlined />} allowClear></Input.Search> */}
    

    {/* Select */}
        {/* <p>Select Cities</p>
          <Select placeholder="select city" mode='multiple' maxTagCount={2} allowClear style={{width:'50%'}}>
            {city.map((city, index)=>{
                return <Select.Option key={index}>{city}</Select.Option>
            })}
          </Select> */}

    {/* Form       */}
{/* 
    {showAlert && 
    <Alert type='error' message='error' description="there was an Error in login"/> 
    }

    <Form onFinish={onFinish}>
      <Form.Item label="Username" name='username'>
      <Input placeholder='User Name' required></Input>
      </Form.Item>

      <Form.Item label="Password" name='password' type="password">
      <Input.Password placeholder='password' required></Input.Password>
      </Form.Item>

      <Form.Item label="Username" name='username'>
      <Button block type='primary' htmlType='submit' onClick={HandleClick}>Log In</Button>
      </Form.Item>
    </Form> */}


    {/* Table
    <Table
    dataSource={source}
   columns={columns}
    ></Table>
       */}

       {/* DatePicker */}
    {/* <DatePicker picker='month'/> 
    <DatePicker.RangePicker picker='quarter'/>   */}

    {/* Spining */}

    {/* <Spin spinning={loading}></Spin>
    <Button onClick={()=>{setLoading((prev) =>!prev)}}>Toggle</Button>

    <Spin spinning={loading}>
      <p>P tag 1 </p>
      <p>P tag 2 </p>
      <p>P tag 3</p>
    </Spin> */}

    {/* <Progress percent={33}/>
    <Progress percent={33} type='circle'/>
    <Progress percent={33} type='line' strokeColor='red'/>
    <Progress percent={33} type='circle' strokeColor='red' status='success'/>
    <Progress percent={33} type='line' steps={3}/> */}

    {/* Table Pagination */}

    {/* <Table columns={columns} dataSource={dataSource} pagination={true}></Table> */}


    <Table columns={columns} dataSource={dataSource}>

    </Table>


    
   </>
  )
}

export default App