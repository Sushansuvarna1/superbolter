import {React,useState,useEffect} from "react";
 import '../App.css';
 import {Card,Modal} from 'antd'
 import { CommentOutlined,LikeOutlined } from '@ant-design/icons'
 import {AiFillLike} from 'react-icons/ai'
 import Form from './Form'


const Container=()=>{
    const[count,setCount]=useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const[lists,setLists]=useState([])
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const handleChange=()=>{
   setCount(count+1)
    }

    const formSubmission=(data)=>{
      setLists([...lists,data])
      
    }

 useEffect(()=>{
  localStorage.setItem('lists',JSON.stringify(lists))
 },[lists])
    
 return(
    
       <div >
        <div className="textStyle">
        <Card
    style={{
      width: 400,
      borderRadius: '4px',
    
    }}
    cover={
      <img
      
        alt="example"
        src='https://sbcdn1.superbolter.com/atom/themes/8gQcUa4_MFDt-UT_C3f9DA/medium_F_38__1_.jpg'
        id="1"
      />
    }
    actions={[
      <div>
        <AiFillLike  key="1" onClick={handleChange}  />   
        {
    count>0 && count
        }
   
        </div>,
        <div>
        <CommentOutlined key="edit" onClick={showModal} />
        
        <Modal title="Comments" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <Form formSubmission={formSubmission}/>
      </Modal>
      {
        lists.map((ele,i)=>{
          return<p>{ele.comments}</p>
        })
      }
      </div>
        
      ]}
   
  >
   
  </Card>
  <Card
    style={{
      width: 400,
    }}
    cover={
      <img
        alt="example"
        src= "https://sbcdn1.superbolter.com/atom/themes/ppVgaTAdU-l_pbfZXHqw7w/medium_23F__1_.jpg"
        id="2"
      />
    }
    actions={[
        <AiFillLike key="2" onClick={handleChange}  />,
        <CommentOutlined key="edit" />,
        
      ]}
   
  >
   
  </Card>
  <Card
    style={{
      width: 400,
     
    }}
    cover={
      <img
        alt="example"
        src= "https://sbcdn1.superbolter.com/atom/themes/tohQXzghpooKZVMmmH04hA/medium_22F__1_.jpg"
      />
    }
    actions={[
        <AiFillLike key="like" />,
        <CommentOutlined key="edit" />,
        
      ]}
   
  >
   
  </Card>
  </div>
  <div className="textStyle">
  <Card
    style={{
      width: 400,
    }}
    cover={
      <img
        alt="example"
        src= "https://sbcdn1.superbolter.com/atom/themes/ppVgaTAdU-l_pbfZXHqw7w/medium_23F__1_.jpg"
      />
    }
    actions={[
        <AiFillLike key="like" />,
        <CommentOutlined key="edit" />,
        
      ]}
   
  >
   
  </Card>
  <Card
    style={{
      width: 400,
      
    }}
    cover={
      <img
      
        alt="example"
        src= "https://sbcdn1.superbolter.com/atom/themes/qL7gPESavDrrRf6Ogdndmw/medium_19F__1_.jpg"
      />
    }
    actions={[
        <AiFillLike key="like" />,
        <CommentOutlined key="edit" />,
        
      ]}
   
  >
   
  </Card>

  <Card
    style={{
      width: 400,
    }}
    cover={
      <img
        alt="example"
        src= "https://sbcdn1.superbolter.com/atom/themes/8Yopql2EZmSztJBASV7WzA/medium_16F__1_.jpg"
      />
    }
    actions={[
        <LikeOutlined key="like" />,
        <CommentOutlined key="edit" />,
        
      ]}
   
  >
   
  </Card>
  </div>
  
       </div>
    
 )
}

export default Container