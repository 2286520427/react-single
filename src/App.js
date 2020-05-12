import React from "react";
import "./App.scss";
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
  render() {
    const val = this.state.val;
    const arr = this.state.list;
    const lisItem = [];
    arr.map((item, index) => {
      var li = <li key={index}>{item}</li>;
      lisItem.push(li);
    });

    return (
      <div className="wrapper">
        <div>
          <h1>hello world!</h1>
          <p>今天是第一次使用脚手架，很神奇呢~</p>
          <input type="text" value={val} onChange={this.handleInput} />
          <button onClick={this.handleAdd}>添加</button>
        </div>
        <ul>{lisItem}</ul>
      </div>
    );
  }
}
export default App;
