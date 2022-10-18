import React from "react";
import "antd/dist/antd.min.css";
import {
  Button,
  Input,
  Select,
  Form,
  Table,
  message,
  Alert,
  DatePicker,
  Spin,
  Progress,
  Modal,
  Tag,
  Space,
  Typography,
  
} from "antd";
import Icon, {
  PoweroffOutlined,
  UserOutlined,
  PieChartOutlined,
  LogoutOutlined,
  EditOutlined,
  DeleteOutlined,
  SmileFilled
} from "@ant-design/icons";
import { useState } from "react";
import { useEffect } from "react";
import Upload from "antd/lib/upload/Upload";
const {Title, Text, Paragraph,Link} = Typography;

const App = () => {
  // const [isEditing, setIsEditing] = useState(false);
  // const [editingStudent, setEditingStudent] = useState(null);

  // const heartIcon = ((props) =>{
  //   return <Icon component = {() =>{
  //     return <svg></svg>
  //   }}
  //     {...props}
  //   />
  // })

  // const [showAlert, setShowAlert] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const [dataSource, setDataSource] = useState([]);
  // const [loading, setLoading] = useState(false);

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

  // const columns = [
  //   {
  //     title: "Student ID",
  //     datIndex: 'id',
  //   },
  //   {
  //     title: "Student Name",
  //     datIndex: 'name',
  //   },
  //   {
  //     title: "Student Grade",
  //     datIndex: 'grade',
  //   },
  // ]

  // const dataSource = [
  //   {
  //     key:'1',
  //     id: 1,
  //     name: "Student name 1",
  //     grade: 'A+'
  //   },
  //   {
  //     key:'2',
  //     id: 2,
  //     name: "Student name 2",
  //     grade: 'C+'
  //   },
  //   {
  //     key:'3',
  //     id: 3,
  //     name: "Student name 3",
  //     grade: 'B+'
  //   },
  //   {
  //     key:'4',
  //     id: 4,
  //     name: "Student name 4",
  //     grade: 'AB+'
  //   },
  // ]

  //   const [dataSource, setDataSource] = useState([
  //     {
  //       id: 1,
  //       name: 'John',
  //       email: 'john@gmail.com',
  //       address: "John Address"
  //     },{
  //       id: 2,
  //       name: 'Harry',
  //       email: 'harry@gmail.com',
  //       address: "Harry Address"
  //     },
  //     {
  //       id: 3,
  //       name: 'Marry',
  //       email: 'marry@gmail.com',
  //       address: "Mary Address"
  //     },
  //   ])

  //   const columns = [{
  //     key:'1',
  //     title: 'ID',
  //     dataIndex: 'id'
  //   },
  //   {
  //     key:'2',
  //     title:'Name',
  //     dataIndex: 'name'
  //   },
  //   {
  //     key:'3',
  //     title:'Email',
  //     dataIndex: 'email'
  //   },
  //   {
  //     key:'4',
  //     title:'Address',
  //     dataIndex: 'address'
  //   },
  //   {
  //     key:'5',
  //     title: "Actions",
  //     render : (record) =>{
  //        return (
  //         <>
  //           <EditOutlined onClick={() =>{
  //             onEditStudents(record)
  //             }}/>
  //           <DeleteOutlined
  //               onClick={() => {
  //                 onDeleteStudent(record);
  //               }}
  //               style={{ color: "red", marginLeft: 12 }}
  //             />
  //         </>
  //        )
  //     }
  //   }
  // ];

  // const onAddStudent = () =>{
  //   const randomNumber = parseInt(Math.random()*1000);
  //   const newStudent = {
  //     id: randomNumber,
  //     name: "Name" + randomNumber,
  //     email: randomNumber + '@gmail.com',
  //     address: "Address"+ randomNumber,
  //   }
  //       setDataSource((pre)=>{
  //         return [...pre, newStudent]
  //       })
  // }

  // const onDeleteStudent = (record) =>{
  //   Modal.confirm({
  //     title: "Are you sure, you want to delete a student records? ",
  //     okType: 'danger',
  //     onOk: () =>{
  //       setDataSource((pre) => {
  //         return pre.filter((student) => student.id !== record.id);
  //       });
  //     }

  //   })

  // const onEditStudent = (record) =>{
  //   setIsEditing(true);
  //   setEditingStudent({ ...record });
  // }

  // }
  // const [dataSource, setDataSource] = useState([]);
  // const [editingRow, setEditingRow] = useState(null);
  // const [form] = Form.useForm();

  // useEffect(() => {
  //   const data = [];
  //   for (let index = 0; index < 7; index++) {
  //     data.push({
  //       key: `${index}`,
  //       name: `Name ${index}`,
  //       address: `Address ${index}`,
  //     });
  //   }
  //   setDataSource(data);
  // }, []);

  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     render: (text,record)=>{
  //       if(editingRow === record.key){
  //         return(
  //           <Form.Item name="name"
  //           rules={[{
  //             required: true,
  //             message: "Please enter your name"
  //           }]}>
  //             <Input/>
  //           </Form.Item>
  //         )
  //       }else{
  //         return <p>{text}</p>
  //       }
  //     }
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //     render: (text,record)=>{
  //       if(editingRow === record.key){
  //         return(
  //           <Form.Item name="address"
  //           rules={[{
  //             required: true,
  //             message: "Please enter your address"
  //           }]}>
  //             <Input/>
  //           </Form.Item>
  //         )
  //       }else{
  //         return <p>{text}</p>
  //       }
  //     }
  //   },
  //   {
  //     title: "Actions",
  //     render: (_, record) => {
  //       return (
  //         <>
  //           <Button
  //             type="link"
  //             onClick={() => {
  //               setEditingRow(record.key);
  //               form.setFieldValue({
  //                 name: record.name,
  //                 address: record.address,
  //               });
  //             }}
  //           >
  //             Edit
  //           </Button>
  //           <Button type="link" htmlType="submit">Save</Button>
  //         </>
  //       );
  //     },
  //   },
  // ];
  // const onFinish = (values) =>{
  //   const updatedDataSource = [...dataSource];
  //   updatedDataSource.splice(editingRow, 1, {...values, key: editingRow})
  //   setDataSource(updatedDataSource);
  //   setEditingRow(null);
  // }

  const [text, setText] = useState("Code with amir");
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

      {/* 
    <Table columns={columns} dataSource={dataSource}>

    </Table> */}

      {/* ICONS */}

      {/* <PieChartOutlined style={{color:'purple', fontSize: '100'}} /> */}
      {/* <Button icon={<LogoutOutlined style={{color: 'purple'}}/>}> Button with icon </Button> */}

      {/* <Button onClick={onAddStudent}>Add a New Student</Button>
    <Table dataSource={dataSource}
    columns={columns}
    ></Table>
    <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.email}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.address}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          />
        </Modal> */}

      {/* File Upload */}
      {/* <Upload
        multiple={true}
        listType="picture"
        action={"http://localhost:3000/"}
        showUploadList={{ showRemoveIcon: true }}
        accept='.png'
        beforeUpload={(file)=>{
          console.log({file});
          return false;
        }}

        defaultFileList={[{
          uid: "abc",
          name: "abc.png",
          status: "uploading",
          percent: 100,
          url: "https://www.google.com"
        }]}
        iconRender={()=>{
          return <Spin></Spin>
        }
        }
        progress={{
          strokeWidth: 3,
          strokeColor: {
            "0%": "#f0f",
            "100%": "#ff0"
          },
          style:{
            top:12
          }
        }}
      >
        Drag and files here OR
        <br />
        <Button>Upload</Button>
      </Upload> */}

      {/*************************************************  Tags *********************************/}
      {/* <Space direction="vertical" size={2}>
        <Tag>Tag 1 </Tag>
        <Tag>Tag 2 </Tag>
        <Tag
          closable
          onClose={() => {
            console.log("Tag closed!");
          }}
        >
          Tag 2{" "}
        </Tag>

        <Tag
          closable
          onClose={() => {
            console.log("Tag closed!");
          }}
          color="error"
          closeIcon={
            <Button danger type="text">X</Button>
          }
        >
          Tag 3{" "}
        </Tag>

        <Tag
          closable
          onClose={() => {
            console.log("Tag closed!");
          }}
          color="error"
          closeIcon={
           <DeleteOutlined/>
          }
        >
          Tag 3{" "}
        </Tag>
      </Space> */}

      {/* **********************************End of Tag********************************* */}

      {/* **********************************Editable of table cell********************************* */}
      {/* <Form form={form} onFinish={onFinish}>
        <Table columns={columns} dataSource={dataSource}></Table>
      </Form> */}
      <Title level={3}>Code with Avinash</Title>
      <Title level={5}>Code with Avinash</Title>
      <Text>Code with Avinash</Text>
      <Text strong>Code with Avinash</Text><br/>
      <Text mark>Code with Avinash</Text><br/>
      <Text disabled>Code with Avinash</Text><br/>
      <Text type="success">Code with Avinash</Text><br/>
      <Link href="http://google.com">Code with Avinash</Link>
      <Paragraph strong>Code with avinash</Paragraph>
      <Paragraph editable={{onChange: (value)=>{
        setText(value)
      },
        triggerType: "icon|text",
        tooltip: "Click to Edit",
        icon: <SmileFilled/>
      }}>Code with Amir</Paragraph>
      <Paragraph copyable={{tooltips:["Click To copy", "Done"]}}>Code with Avinash</Paragraph>

      {/* **********************************End of Editable of table cell********************************* */}
    </>
  );
};

export default App;
