import logo from './logo.svg';
import './App.css';
import emailjs from 'emailjs-com';


function Email() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_0ibm0mk', 'template_teqxnw7', e.target, 'user_siGbzxiEs3uWn5N8MXAjQ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <>
      <div className='container-fluid mt-5'>
        <div className='row '>
          <div className='col-6 mx-auto '>
            <div className='size'>
              <form onSubmit={sendEmail}>
                <label>Name</label>
                <input className="w-50 form-control mb-5" type="text" name="user_name" />
                <label>Email</label>
                <input className="w-50 form-control mb-5" type="email" name="user_email" />
                <label>Message</label>
                <textarea className="w-50 form-control mb-5" name="message" />
                <button type="submit" class="btn btn-outline-primary">Submit</button>
              </form>
            </div>

          </div>

        </div>
      </div>

    </>


  );
}
export default Email;
