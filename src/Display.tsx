import React,{useContext} from 'react';
import { NameContext } from './hooks/Context';

export default function Display() {

    const {name}= useContext(NameContext)
  return (
    <div>This is made by {name}</div>
  )
}
