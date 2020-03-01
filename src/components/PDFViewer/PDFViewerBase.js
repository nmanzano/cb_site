import React from "react";
import PDFViewer from './PDFViewer';
import PDFJSBackend from '../../backends/pdfjs';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string'

class PDFViewerBase extends React.Component {

    UNSAFE_componentWillMount (){
      this.pdfSource = queryString.parse(this.props.location.search).q;
    }

    render() {
      return (
        <div>
          <PDFViewer
            backend={PDFJSBackend}
            src= {this.pdfSource}
           />
        </div>
      );
    }
  }

export default withRouter(PDFViewerBase);
