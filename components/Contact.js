import SectionTitle from './SectionTitle'
import ContentBox from '../components/ContentBox'
import Form from '../components/Form';
import FormSuccess from '../components/FormSuccess'


import {useState} from 'react';




const Contact = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    //const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    //const firstRender = useRef(true);
    

    const onHandleChange = (e) => {
        const { name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    // useEffect(() => {
    //   if(firstRender) {
    //     firstRender.current = true;
    //     return;
    //   }

    //   setErrors(validateInputs(values));
    //   if(Object.keys(errors).length === 0 && isSubmitting) {
    //     try {
    //       sendMail()
    //     }
    //     catch(err) {
    //       console.log(err);
    //     }
    //   }
    // }, [errors])

    // const validateInputs = (values) => {
    //   let errors = {}

    //   if(!values.name.trim()) {
    //     errors.name = "Name is required"
    //   }

    //   if(!values.email) {
    //     errors.email = "Email is required"
    //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //     errors.email = 'Email address is invalid';
    //   }

    //   if(!values.subject.trim()) {
    //     errors.subject = "Subject is required"
    //   }

    //   if(!values.message) {
    //     errors.message = "Message is required"
    //   }

    //   return errors;
    // }

    async function handleOnSubmit(e) {
      e.preventDefault();
      
      setIsSubmitting(true);
      
      await sendMail();
    }

    function sendMail() {
      fetch("https://formsubmit.co/ajax/2853d3939e651af324ee6383fa44416f", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(values)
        })
      .then(response => response.json())
      .then(setIsSubmitted(true))
      .catch(error => console.log(error));
      // fetch('api/mail',
      //   {
      //     method: 'post',
      //     body: JSON.stringify(values)
      //   }
      // ).then(setIsSubmitted(true))
      // .catch(err => {console.log(err)})
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
