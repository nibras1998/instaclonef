import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Header from '../header/header';
import axios from 'axios';
import './upload.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Upload = () => {
    const navigate = useNavigate();
    const [info,setInfo] = useState({
        name : '',
        location : '',
        description : "",
        upload_file : null,
        like : 1
    })
    const handleOnSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',info.name);
        formData.append('location',info.location);
        formData.append('description',info.description);
        formData.append('upload_file',info.upload_file);
        try{
           await axios.post("http://localhost:5000/upload",formData);
        }catch{
            console.log("not posted");
        }
        navigate('/post');
    }

    return (
        <>
            <Header />
            <div className='uploadmain'>
                <form onSubmit={handleOnSubmit}>

                    <input className='locationURI' type="file" name="upload_file" id="fileToUpload" onChange={(e)=>{setInfo({...info,upload_file:e.target.files[0]})}}/>
                    <input className='author' type="text" placeholder="Author"  name="name" value={info.name} onChange={(e)=>{setInfo({...info,name:e.target.value})}}/>
                    <input className='location' type="text" placeholder="Location" name='location' value={info.location} onChange={(e)=>{setInfo({...info,location:e.target.value})}}/>
                    <input className='description' type="text" placeholder="Description" name='description' value={info.description} onChange={(e)=>{setInfo({...info,description:e.target.value})}}/><br></br>
                    <button type="submit" className='post'>Post</button>
                </form>
            </div>
        </>
    );
}
export default Upload;