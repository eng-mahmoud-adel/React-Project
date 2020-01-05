import Styled from 'styled-components';

export const ContactSection= Styled.div`
    padding: 50px 0;
    text-align: center
    `

    export const ContactTitle= Styled.h2`
    font-size: 60px;
    margin-bottom: 30px
    `

export const Span= Styled.span`
    font-weight: normal
    `

export const Form= Styled.form`
    width: 70%;
    margin: auto;
    `

export const Input= Styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
    `

export const FormInput= Styled.div`
    overflow: hidden
    `

export const InputText= Styled(Input)`
    width: 49%;
    float: left;
    `

export const InputEmail= Styled(Input)`
    float: right;
    width: 49%;
    `

export const InputExp= Styled(Input)`
    width: 100%;
    `

export const TextArea= Styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc
    `

export const InputSubmit= Styled(Input)`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
    `