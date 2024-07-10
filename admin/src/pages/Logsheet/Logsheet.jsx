import { useState, useEffect } from 'react'
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
        logs.push({ name: log['username'], message: 'clocked in.', time: log['timein'] })
        logs.push({ name: log['username'], message: 'clocked out.', time: log['timeout'] })
      });
      setLogs(logs)
    })
  }

  useEffect(() => {
    fetchLogs()
  }, [])
  return (
    <div id='logsheet'>
      <div className='logsheet-header'>
        <h1 className="logsheet-date">{ date }</h1>
        {/* <div className="logsheet-up"></div>
        <div className="logsheet-down"></div> */}
      </div>
      <div className="logsheet-layout">

        <div className="logsheet-wrapper">

          {/* <h1 className="logsheet-time-stamp">08:00 AM</h1> */}

          { 
            logs && 
            logs.map((log, index) => {
              return <div className="logsheet-log" key={index}>
              <h1 className="log-time">{log.time}</h1>
              <p className="log-info">{log.name} {log.message}</p>
            </div>
            })  
          }

        </div>

      </div>
    </div>
  )
}

export default Logsheet