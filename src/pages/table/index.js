import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Card, Table } from 'antd';
import './index.less';
import './store'

class Tables extends Component{
  componentWillMount(){
    console.log(this.props.msg)
  }
  render(){
    const {list}=this.props;
    const dataSource = list; 
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    return(
      <div className="card-main">
          <Card title="基本展示">
          <Table dataSource={dataSource} rowSelection={rowSelection} columns={columns} />
          </Card>
      </div>
    )
  }
}

//connect方法引入store
const mapStateToProps=(state)=>{
  return {
    // 测试store数据
    msg:state.tables.msg,
    //table数据
    list:state.tables.list

  }
}

const mapDispathToProps=(dispatch)=>{
  return{

  }
}


export default connect(mapStateToProps,mapDispathToProps)(Tables);