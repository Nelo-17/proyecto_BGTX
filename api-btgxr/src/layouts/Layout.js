import React from 'react';
import {Menu} from "../components"

export function Layout(props) {
  const {accesorios}=props;
  return (
    <>
    <div>
      <Menu/>
    </div>
    <div>
      {accesorios}
    </div>
    </>
  )
}
