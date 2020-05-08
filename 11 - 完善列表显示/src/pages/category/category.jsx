
import React , {Component} from 'react'
import {Button , Card,Table,message} from 'antd';
import {PlusOutlined ,SwapRightOutlined} from '@ant-design/icons';
import {getCategory} from '../../request'

class Category extends Component{
    state={
        loading:false,
        category:[], // 二级分类列表
        parendId:0,
        parentName:'',
        subCategorys:[] //二级分类列表
    }
    render (){

        const {loading,category,subCategorys,parendId,parentName}=this.state
        const title= parendId===0 ? '一级分类列表' : (
            <span>
             <Button onClick={()=>{this.showFirstCategorys()}}  type="link" size="small">一级分类列表</Button>
             <SwapRightOutlined style={{margin:'0 10px'}} />
                {parentName}
            </span>
        )
        const extra=<Button type="primary"><PlusOutlined />添加</Button>
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

                title: '图书名',
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
                        <Button onClick={()=>{this.modify(item)}} style={{marginRight:'10px'}} type="link" size="small">修改</Button>
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
            parendId:item.id,
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
}

export  default  Category
