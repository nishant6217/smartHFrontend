import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import Chart from '../chart/Chart';
import styled from 'styled-components'
import { getGroupedData as getGrouped } from "../redux/actions/smartHActions"

const MainDisplay = () => {

  const dispatch = useDispatch();

  const dataForChart = useSelector((state) => state.getGroupedData.data)

  const DivStyled = styled.div({
    background: '#ffffff',
    height: '50%',
    width: '60%',
    borderRadius: "39.55px",
    margin: "auto",
    marginLeft: "25%"
  });


  useEffect(() => {
    dispatch(getGrouped())
  }, [dispatch])

  return (
    <>

      <DivStyled>
        {dataForChart ? <Chart dataForChart={dataForChart} /> : ""}
      </DivStyled>
    </>

  );
};
export default MainDisplay;