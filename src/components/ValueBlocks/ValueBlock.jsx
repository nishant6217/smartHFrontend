import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from '../chart/Chart';
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { getTotalAndAvg } from '../redux/actions/smartHActions';

const ValueBlock = () => {
    const [totalSensorIds, setTotalSensorIds] = useState(null);
    const [avgCurrent, setAvgCurrent] = useState(null);
    const [avgVoltage, setAvgVoltage] = useState(null);
    const dispatch = useDispatch();

    const particluarBlockData = useSelector((state) => state.getTotalAndAvg.data[0])



    useEffect(() => {
        dispatch(getTotalAndAvg())
    }, [dispatch])




    const DivStyled = styled.div({
        margin: "auto",
        display: "flex",
        width: '70%',
        marginBottom: "8vh",
        marginTop: "5vh",
        marginLeft: "20%"
    });
    const DivForValues = styled.div({

        background: '#ffffff',
        height: '14vh',
        width: '20%',
        borderRadius: "20px",
        margin: "auto",
        textAlign: "left"
    })
    const StyledText = styled.h3({
        fontWeight: "400",
        marginLeft: "2vh",
        fontSize: "14px",
        marginTop: "2vh"
    })
    const StyledTextForValue = styled.h2({
        fontWeight: "bold",
        marginLeft: "2vh",
        fontSize: "18px",
        marginTop: "-2vh"
    })
    return (
        <>
            {particluarBlockData && <DivStyled>
                <DivForValues>
                    <StyledText>Total Number of Sensors</StyledText>
                    <StyledTextForValue>{Number(particluarBlockData.totalSensorId).toFixed()}</StyledTextForValue>
                </DivForValues>
                <DivForValues><StyledText>Average Current</StyledText>
                    <StyledTextForValue>{Number(particluarBlockData.avgCurrent).toFixed(2)}  mA</StyledTextForValue>
                </DivForValues>

                <DivForValues><StyledText>Average Voltage</StyledText>
                    <StyledTextForValue>{Number(particluarBlockData.avgVoltage).toFixed(2)} V</StyledTextForValue>
                </DivForValues>

            </DivStyled>}

        </>

    );
};
export default ValueBlock;