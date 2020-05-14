import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./../scss/App.scss";
import "antd/dist/antd.css";

// 函数式组件
// export default function App() {
//   return <div className="container">
//       <h1>this is Login</h1>
//       <div className="box">
//         <p>这是Link方式跳转：</p>
//         <Link to="/home">Home</Link>
//         <Link to="/login">Login</Link>
//       </div>
//     </div>
// }

// 有状态组件
export default class App extends React.Component {
  handleJump=()=>{
<<<<<<< HEAD
    this.props.history.push('/antd')
=======
    this.props.history.push('/home')
>>>>>>> ace6724ef7be5223bb12aba8adb11da7533053cb
  }
  render() {
    return <div className="container">
        <h1>this is Login</h1>
        <div className="box">
          <p>这是Link方式跳转：</p>
<<<<<<< HEAD
          <Link to="/antd">Antd</Link>
=======
>>>>>>> ace6724ef7be5223bb12aba8adb11da7533053cb
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className="box">
          <p>这是button方式跳转：</p>
          <Button type="primary" onClick={this.handleJump}>
<<<<<<< HEAD
            Antd
=======
            Home
>>>>>>> ace6724ef7be5223bb12aba8adb11da7533053cb
          </Button>
        </div>
      </div>
  }
}
