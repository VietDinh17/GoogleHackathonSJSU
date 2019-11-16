import React, { Component } from 'react'

import styled from 'styled-components';

import { problems } from '../constants/mockdata';
import { element } from 'prop-types';

const ContainerTitle = styled.h2`
    text-align: center;
    font-size: 23px;
`;

const CodeBox = styled.div`
    position: absolute;
    left: 20%;
    right: 20%;
    font-size: 20px;
`;

const SubmitBtn = styled.button`
    type: submit;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const NextBtn = styled.button`
    type: submit;
    position: relative;
    bottom: 0;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;


export class Problem extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', problem: this.props.location.state };

        this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
    }
    handleSubmitBtn(event) {
        console.log("handleSubmitBtn clicked");
        this.setState({ value: event.target.value });

        var userSols = []
        for (var i = 0; i < this.state.problem.val.code.length - 1; i++) {
            var inputName = 'blank' + i;
            userSols.push(document.getElementById(inputName).value)
        }

        for (var j = 0; j < userSols.length; j++) {
            var str1 = userSols[j];
            var str2 = this.state.problem.val.ans[j];
            var n = str1.localeCompare(str2);
            if (n === 0) {
                alert('Correct!!')
                return;
            } else {
                alert("Incorrect!!!")
                return;
            }
        }

    }
    render() {

        return (

            <div>
                <ContainerTitle>
                    Reverse an Array
            </ContainerTitle>


                <br></br>
                <br></br>
                <CodeBox className='codebox'>

                    <pre id={'displayCode'}>
                        {this.state.problem.val.code.map((value, index) => {
                            if(index <this.state.problem.val.code.length - 1){
                                return (
                                    <span key={index}>{value}<input id={'blank' + index}></input></span>
    
                                )
                            }else{
                                return(
                                    <span key={index}>{value}</span>
                                )
                            }

                        })}


                    </pre>

                </CodeBox>
                <SubmitBtn type={'submit'} onClick={this.handleSubmitBtn}>Submit</SubmitBtn>

            </div>

        )

    }


}



export default Problem
