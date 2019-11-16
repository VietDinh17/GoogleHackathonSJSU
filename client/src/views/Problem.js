import React, { Component } from 'react'

import styled from 'styled-components';

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
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
    }
    handleSubmitBtn(event){
        console.log("handleSubmitBtn clicked");
        this.setState({value: event.target.value});

        var userSols = []
        for(var i = 0; i < currProblem.code.length - 1; i++){
            var inputName = 'blank' + i;
            userSols.push(document.getElementById(inputName).value)
        }
        
        for(var j = 0; j < userSols.length; j++){
            var str1 = userSols[j];
            var str2 = currProblem.ans[j];
            var n = str1.localeCompare(str2);
            if(n === 0){
                alert('Correct!!')
                return;
            }else{
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
                    {currProblem.code.map((value, index) => {
                        return (
                            <span key={index}>{value}<input id={'blank'+index}></input></span>
                            
                        )
                        
                    })}


                </pre> 
                
               </CodeBox>
               <NextBtn type={'submit'} onClick={this.handleNextBtn}>Next</NextBtn>
               <SubmitBtn type={'submit'} onClick={this.handleSubmitBtn}>Submit</SubmitBtn>

            </div>
            
        )
    
    }


}



const currProblem = {
    "id" : "1",
    
    "code":[ `int[] array = new array[]{1, 2, 3, 4, 5};
for(int i = 0; i < `,
     `; i++) {	
    int temp = array[i];
    array[i]   = array[array.length - i - 1]; 	
    array[array.length - i - `,
    ` ] = temp; 
}`],
    "ans": ['array.length', '1']

}


   

export default Problem
