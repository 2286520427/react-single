import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

// 函数式组件
/* export default function Home() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    return axios.get("./data.json").then((response) => {
      let res = response.data;
      if (res.code === 0) {
        setData(res.data);
      }
    });
  }, []);
  const columns = [
    {
      title: "地区",
      dataIndex: "area",
    },
    {
      title: "Java",
      dataIndex: "java",
    },
    {
      title: "PHP",
      dataIndex: "php",
    },
    {
      title: "Node",
      dataIndex: "node",
    },
    {
      title: "JS",
      dataIndex: "js",
    },
    {
      title: "Python",
      dataIndex: "python",
    },
  ];
  return (
    <div className="home">
      <h1>语言大数据报告</h1>
      <div className="wrap">
        <nav>
          <a className={index===0 ? 'active' : ''} onClick={()=>{setIndex(0)}}>语言动态</a>
          <a className={index===1 ? 'active' : ''} onClick={()=>{setIndex(1)}}>语言地图</a>
          <a className={index===2 ? 'active' : ''} onClick={()=>{setIndex(2)}}>语言热搜</a>
          <a className={index===3 ? 'active' : ''} onClick={()=>{setIndex(3)}}>语言播报</a>
        </nav>
        <p>数据纯属虚构</p>
        <Table columns={columns} dataSource={data} bordered pagination={false} />
        <Link to="/" className="nav-link">
          回首页
        </Link>
      </div>
    </div>
  );
}
 */

// class组定义组件
 export default class Home extends React.Component{
  state ={
    data : [],
    index : 0
  }
  componentDidMount(){
    axios.get("./data.json").then((response) => {
      let res = response.data;
      if (res.code === 0) {
        this.setState({
          data:res.data
        });
      }
    }) 
  }

  handleSwitch = (index)=>{
    this.setState({
      index
    })
  }

  render(){
    const columns = [
      {
        title: "地区",
        dataIndex: "area",
      },
      {
        title: "Java",
        dataIndex: "java",
      },
      {
        title: "PHP",
        dataIndex: "php",
      },
      {
        title: "Node",
        dataIndex: "node",
      },
      {
        title: "JS",
        dataIndex: "js",
      },
      {
        title: "Python",
        dataIndex: "python",
      },
    ]
    const index = this.state.index;
    return <div className="home">
        <h1>语言大数据报告</h1>
        <div className="wrap">
          <nav>
            <a className={index===0 ? 'active' : ''} onClick={()=>{this.handleSwitch(0)}}>语言动态</a>
            <a className={index===1 ? 'active' : ''} onClick={()=>{this.handleSwitch(1)}}>语言地图</a>
            <a className={index===2 ? 'active' : ''} onClick={()=>{this.handleSwitch(2)}}>语言热搜</a>
            <a className={index===3 ? 'active' : ''} onClick={()=>{this.handleSwitch(3)}}>语言播报</a>
          </nav>
          <p>数据纯属虚构</p>
          <Table columns={columns} dataSource={this.state.data} bordered pagination={false} />
          <Link to="/" className="nav-link">
            回首页
          </Link>
        </div>
      </div>
  };
 }