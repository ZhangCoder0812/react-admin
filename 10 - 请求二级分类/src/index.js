import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import 'antd/dist/antd.css'

import memoryUtils from './utils/memoryUtils'
import storageUtils from './utils/storageUtils'
memoryUtils.user.name=storageUtils.getUser('name')

ReactDOM.render(<App/> , document.getElementById('root'))
