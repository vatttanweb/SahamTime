import React from "react";
import FinishUi from './components'
import { useHistory } from 'react-router-dom';

export default function Index() {
  const { push } = useHistory();

  const sendLogin = ()=>{
    push({
      pathname: "/login",
    });
  }

  
  return (
    <>
      <FinishUi sendLogin={sendLogin} />
    </>
  );
}
