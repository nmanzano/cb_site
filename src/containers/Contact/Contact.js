import React, { Component } from "react";
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import PDFJSBackend from '../../backends/pdfjs';

class Contact extends Component {

  render() {
    return (
      <div>
        <PDFViewer
          backend={PDFJSBackend}
          src='/somefile.pdf'
         />
      </div>
    );
  }
}

export default Contact;
