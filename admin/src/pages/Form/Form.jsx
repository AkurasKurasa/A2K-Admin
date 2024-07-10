import './Form.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../../config/supabase'
import { Link } from 'react-router-dom'

const Form = () => {

  const { id } = useParams()
    const [ formData, setFormData ] = useState()
    const fetchForm = async () =>  {
        const { data, error } = await supabase.from('forms').select().eq('form_id', id).single()
        setFormData(data)
    }

    useEffect(() => {
      fetchForm()
    }, [id])

  return (
    <div id='form'>
      <div className="form-layout">
        { formData && <h1 className="form-header">{formData.form_name}</h1> }
        <div className="form-wrapper">
          <div className='form-image-container'>
            { formData && <div className="form-image" style={{ backgroundImage: `url(${formData.image})`}}></div> }
          </div>
          <div className="form-info-container">
            <div className="form-info">

              <div className="form-param-container">
                {
                  formData &&
                  formData.form_parameters.map((params, index) => {
                    return <>
                      <h1 className='form-param-header'>{params.name}</h1>
                      <input type={params.type} className="form-param-input" />
                    </>
                  })
                }

              </div>

            </div>
            <div className="form-control-container">
              <button>RESET</button>
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form