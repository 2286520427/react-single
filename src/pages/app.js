import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./../scss/App.scss";
import "antd/dist/antd.css";

// 函数式组件
export default function App() {
  const [count, setCount]= useState(10);
  useEffect(()=>{
    console.log('执行了useEffect');
    // setCount(100);
  },[])
  return <div className="container">
      <h1>this is App</h1>
      <div className="box">
        <p>这是Link方式跳转：</p>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="box">
          <p>Ract Hooks案例：</p>
          <h3>当前count次数：{count}</h3>
          <Button onClick={()=>{setCount(count+1)}}>
            更新次数
          </Button>
        </div>
    </div>
}

// 有状态组件
/* export default class App extends React.Component {
  handleJump=()=>{
    this.props.history.push('/antd')
  }
  render() {
    return <div className="container">
        <h1>this is Login</h1>
        <div className="box">
          <p>这是Link方式跳转：</p>
          <Link to="/antd">Antd</Link>
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className="box">
          <p>这是button方式跳转：</p>
          <Button type="primary" onClick={this.handleJump}>
            Antd
          </Button>
        </div>
      </div>
  }
}
 */