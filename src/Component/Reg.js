import React, { useState } from "react";

function Content2() {
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    rollNo: "",
    ownerEmail: "",
    accessCode: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://104.211.219.98/train/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        setFormData({
          companyName: "",
          ownerName: "",
          rollNo: "",
          ownerEmail: "",
          accessCode: ""
        }); 
      } else {
        throw new Error("API request failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="companyName" className="form-label">
          Company Name
        </label>
        <input
          type="text"
          className="form-control"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          aria-describedby="companyNameHelp"
        />
        <div id="companyNameHelp" className="form-text"></div>
      </div>

      <div className="mb-3">
        <label htmlFor="ownerName" className="form-label">
          Owner Name
        </label>
        <input
          type="text"
          className="form-control"
          id="ownerName"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          aria-describedby="ownerNameHelp"
        />
        <div id="ownerNameHelp" className="form-text"></div>
      </div>

      <div className="mb-3">
        <label htmlFor="rollNo" className="form-label">
          Roll No
        </label>
        <input
          type="text"
          className="form-control"
          id="rollNo"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
          aria-describedby="rollNoHelp"
        />
        <div id="rollNoHelp" className="form-text"></div>
      </div>

      <div className="mb-3">
        <label htmlFor="ownerEmail" className="form-label">
          Owner Email
        </label>
        <input
          type="email"
          className="form-control"
          id="ownerEmail"
          name="ownerEmail"
          value={formData.ownerEmail}
          onChange={handleChange}
          aria-describedby="ownerEmailHelp"
        />
        <div id="ownerEmailHelp" className="form-text"></div>
      </div>

      <div className="mb-3">
        <label htmlFor="accessCode" className="form-label">
          Access Code
        </label>
        <input
          type="text"
          className="form-control"
          id="accessCode"
          name="accessCode"
          value={formData.accessCode}
          onChange={handleChange}
          aria-describedby="accessCodeHelp"
        />
        <div id="accessCodeHelp" className="form-text"></div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Content2;
