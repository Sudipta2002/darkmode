import React,{useState} from 'react'

export default function TextForm(props) {
    const [myStyle, setmyStyle] = useState({
        color:'red',
        backgroundColor:'black'
    });
    const onChangeHandleInput=(event)=>{
        setText();
        setText(event.target.value);
    }
    const onClickUPHandleInput=()=>{
        console.log("onclickpressed");
        let NewText=text.toUpperCase();
        setText(NewText);
        props.showAlert(" Letter succesfully converted to uppercase","Success");
    }
    const onClickLOWHandleInput=()=>{
        console.log("onclickpressed");
        let NewText=text.toLowerCase();
        setText(NewText);
        props.showAlert(" Letter succesfully converted to lowercase","Success");
    }
    const onClickCopy=()=>{
        let textCopy=document.getElementById("myBox");
        textCopy.select();
        navigator.clipboard.writeText(textCopy.value);
        props.showAlert(" Letter succesfully copied","Success");
    }
    const [Btn, setBtn] = useState("Enable Light Mode");
    const onClickDarkMode=()=>{
        if(myStyle.color==='red'){
            setmyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtn("Enable Dark Mode");
            props.showAlert(" Light mode on textarea enabled","Success");
        }else{
            setmyStyle({
                color:'red',
                backgroundColor:'black'
            })
            setBtn("Enable Light Mode");
            props.showAlert(" Dark mode on textarea enabled","Success");
        }
    }
    const [text, setText] = useState("Delete and start writing");
    return (
        <div className="container" style={myStyle}>
            <div className="mb-3" >
                <label htmlFor="myBox" className="form-label">{props.heading}</label>
                <textarea className="form-control" style={myStyle} value={text} onChange={onChangeHandleInput} id="myBox" rows="15"></textarea>
            </div>
            <button className="btn btn-primary" onClick={onClickUPHandleInput}>Cover To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={onClickLOWHandleInput}>Cover To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={onClickDarkMode}>{Btn}</button>
            <button className="btn btn-primary mx-2" onClick={onClickCopy}>Copy</button>
        </div>
    )
}
