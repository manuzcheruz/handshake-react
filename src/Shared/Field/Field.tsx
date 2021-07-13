import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { UserCats, PropsField } from '../interfaces';

import './Field.css'

/**
 * the different categories of users
 */
const userCat = [
    {
        name: 'Please select one of these',
        value: 'none'
    },
    {
        name: 'student',
        value: 'student'
    },
    {
        name: 'career center',
        value: 'center'
    },
    {
        name: 'company',
        value: 'company'
    }
]

/**
 * this returns a checkbox field based on props recieved
 * @param props 
 * @returns 
 */
export const checkBox: (props: PropsField) => JSX.Element = (props) => {
    return (
        <div className="field-item" style={{ padding: '0px' }}>
            <input
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                id={props.name}
                type={props.elementType}
                placeholder={props.placeholder}
                style={{ height: '15px', width: '15px' }}
            />
            <label htmlFor={props.name} className="label1" style={{ marginLeft: '10px', fontSize: '0.8rem', color: 'grey' }}>
                {props.label}
            </label>
        </div>
    );
}

/**
 * this returns an input field based on props recieved
 * @param props
 * @returns
 */
export const normalInput: (props: PropsField) => JSX.Element = (props) => {
    return (
        <div className="field-item">
            <div className="label">
                {props.label}
            </div>
            <input
                name={props.name}
                type={props.elementType}
                placeholder={props.placeholder}
                style={{ height: `${props.height}`, width: `${props.width}`, border: `${props.border}` }}
                value={props.name === 'password1' ? (event: any) => props.onPasswordChange(event) : props.value}
                onChange={props.onChange}
            />
            {(props.touched[props.name] && props.errors[props.name]) && <small style={{ fontSize: '0.6rem', color: 'red' }}>{props.errors[props.name]}</small>}
        </div>
    );
}

/**
 * this returns a file upload input field based on props recieved
 * @param props
 * @returns
 */
export const fileUpload: (props: PropsField) => JSX.Element = (props) => {
    return (
        <div className="field-item">
            <div className="label">
                {props.label}
            </div>
            <input
                name={props.name}
                type={props.elementType}
                // placeholder={props.placeholder}
                style={{ height: `${props.height}`, width: `${props.width}`, border: 'none', borderRadius: '0px' }}
                value={props.value}
                // onChange={event => props.onFileChange(event)}
                onChange={event => props.name === 'resume' ? props.handlePdfChange(event) : props.onFileChange(event)}
            />
            {(props.touched[props.name] && props.errors[props.name]) && <small style={{ fontSize: '0.6rem', color: 'red' }}>{props.errors[props.name]}</small>}
        </div>
    );
}

/**
 * this returns a select input based on props recieved
 * @param props
 * @returns
 */
export const select: (props: PropsField, userCats: UserCats[]) => JSX.Element = (props, userCats) => {
    return (
        <div className="field-item">
            <div className="label">
                {props.label}
            </div>
            <select
                name={props.name}
                style={{ height: '45px', width: '420px', border: '2px solid grey', borderRadius: '5px', backgroundColor: 'white' }}
            >
                {props.signup ?
                    userCats.map((item, i) => <option key={i} value={item.value}>{item.name}</option>)
                    : ''
                }
            </select>
            {(props.touched[props.name] && props.errors[props.name]) && <small style={{ fontSize: '0.6rem', color: 'red' }}>{props.errors[props.name]}</small>}
        </div>
    );
}

/**
 * this returns a rich text editor based on props recieved
 * @param props
 * @returns
 */
export const editor: (props: PropsField) => JSX.Element = (props) => {
    return (
        <div className="field-item-" style={{ marginRight: '-360px' }}>
            <div className="label">
                {props.label}
            </div>
            <Editor
                initialValue="<p>Describe yourself here</p>"
                init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                }}
                onEditorChange={props.handleEditorChange}
                apiKey="doh7uvi94w8ejme39aoeql00wr4wtwf5303k0o30lw2751ez"
            />
        </div>
    );
}

/**
 * this input function is shared accross the entire web app
 * and recieves this props to customize it
 * @param props 
 * @returns 
 */
function Field(props: PropsField): JSX.Element {
    let userCats: UserCats[] = [];
    if (props.signup){
        userCats = userCat;
    }

    if (props.elementName === 'input' && props.elementType === 'checkbox') {
        return checkBox(props);
    } else if (props.elementName === 'input' && props.elementType !== 'file') {
        return normalInput(props);
    } else if (props.elementType === 'file') {
        return fileUpload(props);
     } else if (props.elementName === 'select') {
        return select(props, userCats);
    } else {
        return editor(props);
    }
}

export default Field;
