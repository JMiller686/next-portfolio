import SectionTitle from './SectionTitle'
import ContentBox from '../components/ContentBox'

import formStyles from '../styles/Form.module.scss'


import {useState, useEffect} from 'react';




const Contact = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    console.log(values)


    return (
        <section id="contact">
          <SectionTitle eyebrow='Get in touch' title='Contact' />

          <ContentBox>
            <form className={formStyles.contactForm}>
              <div className={`${formStyles.formControl} ${formStyles.nameWrap}`}>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className={`${formStyles.input} ${values.name.length ? formStyles.hasInput : null}`} 
                    value={values.name}
                    onChange={handleChange} />
                <label htmlFor="name" className={formStyles.label}>Name*</label>
              </div>

              <div className={`${formStyles.formControl} ${formStyles.emailWrap}`}>
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    className={`${formStyles.input} ${values.email.length ? formStyles.hasInput : null}`} 
                    value={values.email}
                    onChange={handleChange} />
                <label htmlFor="email" className={formStyles.label}>Email*</label>
              </div>

              <div className={`${formStyles.formControl} ${formStyles.subjectWrap}`}>
                <input 
                    type="subject" 
                    id="subject" 
                    name="subject"
                    className={`${formStyles.input} ${values.subject.length ? formStyles.hasInput : null}`} 
                    value={values.subject}
                    onChange={handleChange} />
                <label htmlFor="subject" className={formStyles.label}>Subject*</label>
              </div>

              <div className={`${formStyles.formControl} ${formStyles.messageWrap}`}>
                <textarea 
                    name="message"
                    className={`${formStyles.input} ${values.message.length ? formStyles.hasInput : null}`} 
                    rows={8}
                    value={values.message}
                    onChange={handleChange}/>
                <label htmlFor="message" className={formStyles.label}>Message*</label>
              </div>

              <div className={`${formStyles.formControl} ${formStyles.submitWrap}`}>
                <input type="submit" value="Submit"  className={formStyles.submit}/>
              </div>
            </form>
          </ContentBox>
        </section>
    )
}

export default Contact;
