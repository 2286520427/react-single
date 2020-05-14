import React from "react";
import { useParams,useHistory } from "react-router-dom";
import { Button } from "antd";
// 函数式组件
export default function Detail() {
  const params = useParams();
  const history = useHistory();
  return (
    <div className="container">
      <div className="box">
        <h1>this is detail.{params.id}</h1>
        <h3>打印下看看useParams是什么{JSON.stringify(params)}</h3>
      </div>
      <div className="box">
        <h1>this is useHistory</h1>
        <Button onClick={()=>{
          history.push('/')
        }}>
          跳转首页
        </Button>
      </div>
    </div>
  );
}

// 有状态组件
/* export default class App extends React.Component {
  render() {
    return <div className="container">
      <h1>当前的参数ID值为：{this.props.match.params.id}</h1>
      </div>;
  }
}
 */