import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./../scss/App.scss";

// 函数式组件
export default function App(){

  return <div className="container">
      <h2>欢迎进行第一次React综合练习</h2>
        <Link to="/login">去登录</Link>
        <br/>
        <Link to="/home">去首页</Link>
    </div>
}
