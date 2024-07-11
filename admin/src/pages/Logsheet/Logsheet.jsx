import { useState, useEffect } from 'react'
import moment from 'moment'
import './Logsheet.css'
import { supabase } from '../../config/supabase'

const Logsheet = () => {
  const d = new Date()

  const [ date, setDate ] = useState(d.toLocaleString('default', { month: 'long', day: '2-digit', year: 'numeric'})) 
  const [ logs, setLogs ] = useState()

  const fetchLogs = async () => {
    fetch("http://localhost:5000/logs")
    .then(response => response.json())
    .then(data => {
      const logs = []
      data.forEach(log => {

        if (log['timein'] != "00:00:00") {
          console.log(new moment(log['timein'], 'HH:mm:ss')._d)
          logs.push({ name: log['username'], message: 'clocked in.', time: log['timein'] })
        }

        if ( log['timeout'] != "00:00:00") {
          logs.push({ name: log['username'], message: 'clocked out.', time: log['timeout'] })
        }

        setLogs(logs)
      });
      
      const sorted_logs = logs.sort((a, b) => { 
        return new moment(a.time, 'HH:mm:ss')._d - new moment(b.time, 'HH:mm:ss')._d 
      })
      setLogs(sorted_logs)
    })
  }

  useEffect(() => {
    fetchLogs()
  }, [])
  return (
    <div id='logsheet'>
      <div className='logsheet-header'>
        <h1 className="logsheet-date">{ date }</h1>
      </div>
      <div className="logsheet-layout">

        <div className="logsheet-wrapper">

          { 
            logs && 
            logs.map((log, index) => {
              return <div className="logsheet-log" key={index}>
              <h1 className="log-time">{log.time}</h1>
              <h2 className='log-name'>{log.name}</h2>
              <p className="log-info">{log.message}</p>
            </div>
            })  
          }

        </div>

      </div>
    </div>
  )
}

export default Logsheet