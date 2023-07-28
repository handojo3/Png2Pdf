import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './Pdfimg.css';

const Pdfimg = () => {
  const [photo, setPhoto] = useState(null);

  const onChangephoto = (e) => {
    setPhoto(e.target.files[0]);
  };

  const pdfGenerate = () => {
    if (!photo) return;

    const doc = new jsPDF('p', 'pt', 'a4');
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
    const img = URL.createObjectURL(photo);
    doc.addImage(img, 'PNG', 0, 0, width, height, null, 'FAST');
    doc.save(`${photo.name}.pdf`);
  };

  return (
    <div className="container-mt-5">
      <div className="header">
        <img
          src="https://img.icons8.com/external-others-justicon/48/000000/external-image-photography-others-justicon-2.png"
          alt="icon"
          className="icon1"
        />
        <h2 className="title">IMG2PDF</h2>
        <img src="https://img.icons8.com/cute-clipart/50/000000/pdf.png" alt="icon" className="icon2" />
      </div>

      <div className="row-mt-5">
        <div className="col-lg-3">
          {photo && (
            <div className="image-container">
              <img alt="not found" className="image-fit" width="200" height="230" className = "result" src={URL.createObjectURL(photo)} />
            </div>
          )}
        </div>

        <div className="col-lg-4">
          <div className="form-group-mt-5">
            <label className="file-input">
              Upload Image
              <input
                type="file"
                name="photo"
                accept="image/png, image/jpeg, image/jpg"
                onChange={onChangephoto}
              />
            </label>
          </div>
        </div>

        <div className="col-lg">
          <button className="btn-pdf" onClick={pdfGenerate} disabled={!photo}>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pdfimg;
