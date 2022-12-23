import React, {useState, useEffect} from 'react'

import { useDispatch } from 'react-redux';
function Profiles() {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <typography>Name</typography>
      <typography>Email</typography>
      <typography>Phone Number</typography>
      <typography>Technical Test Results</typography>
      <typography>Psychometric Test</typography>
      <typography>Overall Score</typography>

    </div>
  )
}

export default Profiles
