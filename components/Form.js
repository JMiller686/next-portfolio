import formStyles from '../styles/Form.module.scss'

const Form = ({handleSubmit, values, handleChange, errors}) => {
    return (
        <form method="post" onSubmit={handleSubmit} className={formStyles.contactForm}>
              <div className={`${formStyles.formControl} ${formStyles.nameWrap}`}>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className={`${formStyles.input} ${values.name.length ? formStyles.hasInput : null}`} 
                    value={values.name}
                    onChange={handleChange} />
                <label htmlFor="name" className={formStyles.label}>Name*</label>
                {errors.name && <p className={formStyles.error}>{errors.name}</p>}
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
                {errors.email && <p className={formStyles.error}>{errors.email}</p>}
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
                {errors.subject && <p className={formStyles.error}>{errors.subject}</p>}
              </div>

              <div className={`${formStyles.formControl} ${formStyles.messageWrap}`}>
                <textarea 
                    name="message"
                    className={`${formStyles.input} ${values.message.length ? formStyles.hasInput : null}`} 
                    rows={8}
                    value={values.message}
                    onChange={handleChange}/>
                <label htmlFor="message" className={formStyles.label}>Message*</label>
                {errors.message && <p className={formStyles.error}>{errors.message}</p>}
              </div>

              <div className={`${formStyles.formControl} ${formStyles.submitWrap}`}>
                <input type="submit" value="Submit"  className={formStyles.submit}/>
              </div>
            </form>
    )
}
export default Form;
