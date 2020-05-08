
import React , {Component} from 'react'
import {Button , Card,Table,message,Modal} from 'antd';
import {PlusOutlined ,SwapRightOutlined} from '@ant-design/icons';
import {getCategory} from '../../request'
import AddForm from './add-form'

class Category extends Component{
    state={
        loading:false,
        category:[], // 二级分类列表
        parendId:0,
        parentName:'',
        subCategorys:[], //二级分类列表
        visible:0 //模态框是否显示 0 都不显示  1 显示添加模态框 2 显示修改模态框
    }
    render (){

        const {loading,category,subCategorys,parendId,parentName,visible}=this.state
        const title= parendId===0 ? '一级分类列表' : (
            <span>
             <Button onClick={()=>{this.showFirstCategorys()}}  type="link" size="small">一级分类列表</Button>
             <SwapRightOutlined style={{margin:'0 10px'}} />
                {parentName}
            </span>
        )
        const extra=<Button type="primary" onClick={ ()=>{this.showModal(1)} } ><PlusOutlined />添加</Button>
        return (
            <div className='Category'>
                <Card title={title}  extra={extra} >
                    <Table
                        bordered
                        loading={loading}
                        rowKey='id'
                        size="middle"
                        dataSource={parendId===0 ? category : subCategorys}
                        columns={this.columns}
                        pagination={{defaultPageSize:8}}  /* 默认为10 */
                    />
                </Card>
                <Modal
                    title="添加分类"
                    visible={visible===1}
                    onOk={this.addCategory}
                    onCancel={this.handleCancel}
                >
                    <AddForm />
                </Modal>
                <Modal
                    title="修改分类"
                    visible={visible===2}
                    onOk={this.modifyCategory}
                    onCancel={this.handleCancel}
                >
                </Modal>
            </div>
        )
    }
    componentWillMount() {
        this.getColumns()
    }

    componentDidMount() {
        this.getCategoryData()
    }
    getColumns=()=>{
        this.columns=[
            {

                title: '分类名',
                dataIndex: 'title',
                key: 'title',
            },
            {

                title: '作者',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '操作',
                width:300,
                dataIndex: '',
                key: 'x',
                render: (item) => (
                    <div>
                        <Button onClick={ ()=>{this.showModal(2)} } style={{marginRight:'10px'}} type="link" size="small">修改</Button>
                        {this.state.parendId===0 ?   <Button onClick={()=>{this.showSubCategorys(item)}} type="link"   size="small">查看子分类</Button> : ''}
                    </div>
                ),
            },
        ];
    }
    getCategoryData= async ()=>{
      this.setState({
            loading:true
      })
      const {parendId} =this.state
      let result=await  getCategory(parendId)
        if(parendId===0){
          this.setState({
              category:result.data,
              loading:false
          })
      } else {
          this.setState({
              subCategorys:result.data,
              loading:false
          })
      }
    }
    modify=(item)=>{
        let {title}=item
        message.info(title);
    }
    showSubCategorys=(item)=>{
        this.setState({
            parendId:item.categoryId,
            parentName:item.title
        },()=>{
            this.getCategoryData()
        })

    }
    showFirstCategorys(){
        this.setState({
            parendId:0,
            parentName:'',
            subCategorys:[]
        })
    }
    showModal=(visible)=>{
        this.setState({
            visible: visible
        })
    }

    addCategory=()=>{

    }
    modifyCategory=()=>{

    }
    handleCancel=()=>{
        this.setState({
            visible: 0
        })
    }
}

export  default  Category
