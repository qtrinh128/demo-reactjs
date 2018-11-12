import React, { Component } from 'react';
import Edit from './FormEdit';
class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayName: [],
      btnEdit: false,
      objEdit: {
        index: null,
        element: null
      }
    }
    this.clickXoa = this.clickXoa.bind(this);
    this.clickSua = this.clickSua.bind(this);
  }
  clickXoa(index) {
    let { arrayName } = this.state;
    arrayName.splice(index, 1);
    this.setState({
      arrayName
    });
  }

  clickSua(index, element){
    this.setState({
      btnEdit: !this.state.btnEdit,
      objEdit: {
        index,
        element
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    let { arrayName } = this.state;
    arrayName.push(nextProps.name);
  }

  getName = (value)=>{
    let {arrayName} = this.state;
    arrayName[this.state.objEdit.index] = value;
    this.setState({
      arrayName,
      btnEdit:!this.state.btnEdit
    });
  }

  render() {
    let listName = this.state.arrayName.map((e, index) => {
      return (
        <li key={index} className="list-group-item">{e}
          <input type="button" className="btn btn-danger ml-5" defaultValue="Xoa" onClick={() => this.clickXoa(index)} />
          <input type="button" className="btn btn-danger ml-5" defaultValue="Sua" onClick={() => this.clickSua(index, e)} />
        </li>
      );
    });
    return (
      <div>
        <ul className="list-group">
          {listName}
        </ul>
        {this.state.btnEdit ? <Edit obj = {this.state.objEdit} getName = {this.getName}/>: ''}
      </div>
    );
  }
}

export default List;
