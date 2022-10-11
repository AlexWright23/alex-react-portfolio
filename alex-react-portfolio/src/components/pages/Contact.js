import React from 'react';
export default function Contact() {

  const handleFormSubmit = (e) => {
    const Name = document.getElementById('inputName')
    const Email = document.getElementById('inputEmail')
    
    Name.value = '';
    Email.value = '';
  }

  const checkEmail = (e) => {
    const checkEmail = document.getElementById('inputEmail').value;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (validateEmail.match(mailformat)) {
      document.form1.text1.focus();
      handleFormSubmit()
      return true;
    }
    else {
      alert("Please enter valid email");
      document.form1.text1.focus();
      return false;
    }
  }

  return (
    <div>
      <form name="form" className='contact' method="post" action="mailto:alexwright45177@gmail.com">
      <h1 className='conText'>Contact Me</h1>
        <div className="row mb-3">
          <label for="inputName" className="col-sm-2 col-form-label">Name</label>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="inputName" placeholder='Name'></input>
        </div>
        <div className="row mb-3">
          <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
        </div>
        <div className="col-sm-4">
          <input name="text1" type="email" className="form-control" id="inputEmail" placeholder='example@email.com'></input>
        </div>
        <button type="submit" className="col-sm-1 btn" onClick={checkEmail}>Email Me</button>
      </form>
    </div>
  );
}









