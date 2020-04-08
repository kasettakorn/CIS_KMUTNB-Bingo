import React, { Component } from 'react';
import './styles/App.css';
import _ from 'lodash';
import circle from './image/red-1618916_1280.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardClickStatus: _.fill(Array(25), false)
    }
    this.state.boardClickStatus[12] = true
    this.handleClick = this.handleClick.bind(this);

  }
  updateArray() {
    this.props.updateArray(this.state)
  }
  handleClick = value => {
    const { boardClickStatus } = this.state;
    const newState = _.cloneDeep(boardClickStatus);
    newState[value] = !newState[value];
    this.setState({
      boardClickStatus: newState
    })



  }


  render() {
    const { boardClickStatus } = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1 className="heading">CIS KMUTNB BINGO</h1>
          <div className="bingoBoard">
            <table>
              <tbody>
                <tr>
                  <td onClick={() => this.handleClick(0)}>
                    {boardClickStatus[0] && <img className="circle" src={circle} alt="circle" />}
                    <button>ผ่านอัลกอในครั้งเดียว</button></td>
                  <td onClick={() => this.handleClick(1)}>
                    {boardClickStatus[1] && <img className="circle" src={circle} alt="circle" />}
                    <button>เรียน Discrete Math กับ อ.สุรชาติ</button></td>
                  <td onClick={()=>this.handleClick(2)}>
                    {boardClickStatus[2] && <img className="circle" src={circle} alt="circle" />}
                    <button>Compro 1 ทำเกม Bingo</button></td>
                  <td onClick={()=>this.handleClick(3)}>
                    {boardClickStatus[3] && <img className="circle" src={circle} alt="circle" />}
                    <button>เรียน SA กับ TVC</button></td>
                  <td onClick={()=>this.handleClick(4)}>
                    {boardClickStatus[4] && <img className="circle" src={circle} alt="circle" />}
                    <button>เคยได้ A วิชาภาค</button></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td onClick={()=>this.handleClick(5)}>
                    {boardClickStatus[5] && <img className="circle" src={circle} alt="circle" />}
                    <button>One Night miracle วิชาภาค</button></td>
                  <td onClick={()=>this.handleClick(6)}>
                    {boardClickStatus[6] && <img className="circle" src={circle} alt="circle" />}
                    <button>เคยโดน อ. พูดคำว่า "อ่อน" ใส่หน้า</button></td>
                  <td onClick={()=>this.handleClick(7)}>
                    {boardClickStatus[7] && <img className="circle" src={circle} alt="circle" />}
                    <button>แอบก๊อปโค้ดตอน Quiz</button></td>
                  <td onClick={()=>this.handleClick(8)}>
                    {boardClickStatus[8] && <img className="circle" src={circle} alt="circle" />}
                    <button>เข้าเรียน Compro 1 ของ AWS สาย</button></td>
                  <td onClick={()=>this.handleClick(9)}>
                    {boardClickStatus[9] && <img className="circle" src={circle} alt="circle" />}
                    <button>เรียนกับ อ. ครบ 3 เทพ</button></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td onClick={()=>this.handleClick(10)}>
                    {boardClickStatus[10] && <img className="circle" src={circle} alt="circle" />}
                    <button>เป็น Staff งานรับน้อง</button></td>
                  <td onClick={()=>this.handleClick(11)}>
                    {boardClickStatus[11] && <img className="circle" src={circle} alt="circle" />}
                    <button>เคยบนกับศาลยีราฟ</button></td>
                  <td><button disabled style={{ cursor: "default", backgroundColor: "whitesmoke" }}>FREE</button></td>
                  <td onClick={()=>this.handleClick(13)}>
                    {boardClickStatus[13] && <img className="circle" src={circle} alt="circle" />}
                    <button>เคยเจอเต่าในมหาลัย</button></td>
                  <td onClick={()=>this.handleClick(14)}>
                    {boardClickStatus[14] && <img className="circle" src={circle} alt="circle" />}
                    <button>ร่วมงาน 3K</button></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td onClick={()=>this.handleClick(15)}>
                    {boardClickStatus[15] && <img className="circle" src={circle} alt="circle" />}
                    <button>เคยแข่งกีฬา<br />วิทยาฯ</button></td>
                  <td onClick={()=>this.handleClick(16)}>
                    {boardClickStatus[16] && <img className="circle" src={circle} alt="circle" />}
                    <button>เคยเป็นสแตนด์</button></td>
                  <td onClick={()=>this.handleClick(17)}>
                    {boardClickStatus[17] && <img className="circle" src={circle} alt="circle" />}
                    <button>พี่รหัสพาไปเลี้ยงสาย</button></td>
                  <td onClick={()=>this.handleClick(18)}>
                    {boardClickStatus[18] && <img className="circle" src={circle} alt="circle" />}
                    <button>เคยเป็นพี่เนียนงานรับน้อง</button></td>
                  <td onClick={()=>this.handleClick(19)}>
                    {boardClickStatus[19] && <img className="circle" src={circle} alt="circle" />}
                    <button>เปิด-ปิดประตูห้องเรียนผิดด้าน</button></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td onClick={()=>this.handleClick(20)}>
                    {boardClickStatus[20] && <img className="circle" src={circle} alt="circle" />}
                    <button>เคยหลับวิชา SE</button></td>
                  <td onClick={()=>this.handleClick(21)}>
                    {boardClickStatus[21] && <img className="circle" src={circle} alt="circle" />}
                    <button>เคยเซ็นยอมแพ้โปรเจค OOP</button></td>
                  <td onClick={()=>this.handleClick(22)}>
                    {boardClickStatus[22] && <img className="circle" src={circle} alt="circle" />}
                    <button>เคยสอบมิดเทอมได้ 0 คะแนน</button></td>
                  <td onClick={()=>this.handleClick(23)}>
                    {boardClickStatus[23] && <img className="circle" src={circle} alt="circle" />}
                    <button>แบกคอมไปเล่นวิชา Physics</button></td>
                  <td onClick={()=>this.handleClick(24)}>
                    {boardClickStatus[24] && <img className="circle" src={circle} alt="circle" />}
                    <button>เคยกลัวพี่เพลง</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
