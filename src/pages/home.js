import React from "react";
import {Table} from "antd";
import { Link } from "react-router-dom";

export default function Home() {
  const columns = [
    {
      title: '地区',
      dataIndex: 'area',
    },{
      title: 'Java',
      dataIndex: 'java',
    },{
      title: 'PHP',
      dataIndex: 'php',
    },{
      title: 'Node',
      dataIndex: 'node',
    },{
      title: 'JS',
      dataIndex: 'js',
    },{
      title: 'Python',
      dataIndex: 'python',
    },
  ];
  const data = [];
  return <div className="home">
    <h1>语言大数据报告</h1>  
    <div className="wrap">
      <nav>
        <a className="active">语言动态</a>
        <a>语言地图</a>
        <a>语言热搜</a>
        <a>语言播报</a>
      </nav>
      <p>数据纯属虚构</p>
      <Table columns={columns} dataSource={data} bordered/>
      <Link to="/" className="nav-link">回首页</Link>
    </div>
  </div>;
}
