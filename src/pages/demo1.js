import React from "react";
import { Input, Button, Select } from "antd";
import "antd/dist/antd.css";
import "./../scss/demo1.scss";

const { Search } = Input;
const { Option } = Select;

class App extends React.Component {
  state = {
    val: "",
    list: [],
  };
  handleInput = (event) => {
    this.setState({
      val: event.target.value,
    });
  };
  handleAdd = () => {
    const { list, val } = this.state;
    list.push(val);
    this.setState({
      list,
    });
  };
  handleSearch = (value) => {
    const list = this.state.list;
    list.push(value);
    this.setState({
      list,
    });
  };
  render() {
    const val = this.state.val;
    const arr = this.state.list;
    const lisItem = [];
    const options = [];
    arr.map((item, index) => {
      options.push(<Option key={index}>{item}</Option>);
      return lisItem.push(<li key={index}>{item}</li>);
    });

    return <div className="wrapper">
        <div>
          <h1>hello world!</h1>
          <p>今天是第一次使用脚手架，很神奇呢~</p>
          <Input
            type="text"
            value={val}
            onChange={this.handleInput}
            style={{width: 300}}
          />
          <Button type="primary" onClick={this.handleAdd}>
            添加
          </Button>
        </div>
        <ul>{lisItem}</ul>
        <div>
          <Search
            placeholder="input search text"
            enterButton="添加"
            size="large"
            style={{ width: 360 }}
            onSearch={this.handleSearch}
          />
        </div>
        <div>
          <Select style={{ width: 200,marginTop:'15px'}}>
            {options}
          </Select>
        </div>
      </div>
  }
}
export default App;
