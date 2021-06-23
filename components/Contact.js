import SectionTitle from './SectionTitle'
import ContentBox from '../components/ContentBox'
import Form from '../components/Form';
import FormSuccess from '../components/FormSuccess'

import formStyles from '../styles/Form.module.scss'


import {useState, useEffect} from 'react';




const Contact = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onHandleChange = (e) => {
        const { name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    async function handleOnSubmit(e) {
      e.preventDefault();
      fetch('api/mail',
        {
          method: 'post',
          body: JSON.stringify(values)
        }
      ).then(setIsSubmitted(true)).catch(err => alert(err))
      
    }



    return (
        <section id="contact">
          <SectionTitle eyebrow='Get in touch' title='Contact' />

          <ContentBox>
              {!isSubmitted ? <Form 
                handleSubmit={handleOnSubmit} 
                values={values} 
                handleChange={onHandleChange}
                errors={errors}/> : <FormSuccess />}
          </ContentBox>
        </section>
    )
}

export default Contact;
