import React from 'react'

export default function Card() {
  return  (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "370px" }}>
              <img src="https://http.cat/images/100.jpg"   alt="Card" className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat   eligendi ad id non at architecto labore magnam incidunt iure, eos deleniti quisquam magni quos voluptatem aut molestias enimaspernatur ratione.  </p>
                <a href="#" className="btn btn-primary">Find out more!</a>
              </div>
            </div>
          </div>
        </div>
    </div>
 )
};


