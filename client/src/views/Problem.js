import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const ContainerTitle = styled.h2`
    font-size: 23px;
`;

const CodeBox = styled.div`
    font-size: 20px;
`;

const SubmitBtn = styled.button`
    type: submit;
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
            str1 = str1.replace(/\s/g, '');
            console.log(str1)
            var str2 = this.state.problem.val.ans[j];
            str2 = str2.replace(/\s/g, '');
            console.log(str2)
            var n = str1.localeCompare(str2);
            if (n !== 0) {
                alert('Incorrect!!!!')
                return;
            } 
        }

        alert("Correct!!!")

    }
    
    render() {

        return (

            <div>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item xs={4}>
                        <ContainerTitle>
                            {this.state.problem.val.title}
                        </ContainerTitle>
                    </Grid>

                    <Grid>
                        <button style={{ color: 'green', fontSize: '16px'}}>Java</button>&nbsp;
                        <button style={{ color: 'green', fontSize: '16px' }}>&nbsp;|&nbsp;C++</button>&nbsp;
                        <button style={{ color: 'green', fontSize: '16px' }}>&nbsp;|&nbsp;Python</button>&nbsp;
                        <button style={{ color: 'green', fontSize: '16px' }}>&nbsp;|&nbsp;Javascript</button>&nbsp;
                        <button style={{ color: 'green', fontSize: '16px'}}>&nbsp;|&nbsp;GO</button>&nbsp;
                        <button style={{ color: 'green', fontSize: '16px'}}>&nbsp;|&nbsp;Ruby</button>&nbsp;
                    </Grid>

                    <Grid item xs={8}>
                    <CodeBox className='codebox'>

                        <pre id={'displayCode'}>
                            {this.state.problem.val.code.map((value, index) => {
                                if (index < this.state.problem.val.code.length - 1) {
                                    return (
                                        <span key={index}>{value}<input id={'blank' + index}></input></span>

                                    )
                                } else {
                                    return (
                                        <span key={index}>{value}</span>
                                    )
                                }

                            })}

                        </pre>
                    </CodeBox>
                    </Grid>
                    <Grid item xs={2}>
                        <SubmitBtn type={'submit'} onClick={this.handleSubmitBtn}>Submit</SubmitBtn>
                    </Grid>
                </Grid>
            </div>

        )

    }


}



export default Problem
