import React, { Component, Fragment } from 'react';
import { Document, Page, } from 'react-pdf';

export default class RuleBook extends Component {

  state = {
    numPages: null,
    pageNumbers: [],
  }

  onDocumentLoad = ({ numPages }) => {
    //create array with the page numbers extracted from PDF
    let pageNumbers = [];
    for(let i = 1; i < numPages + 1; i++) {
      pageNumbers.push(i);
    }

    this.setState({
      numPages,
      pageNumbers,
    });
  }

  render() {
    const { pageNumbers } = this.state;
    
    const renderPages = pageNumbers.map( pageNumber => 
      <Page
        className="rulebook__page"
        scale={1.2}
        pageNumber={pageNumber} />
    );

    return (
      <Fragment>
        <a className="rulebook__link" target="_blank" rel="noopener noreferrer" href="http://www.yugioh-card.com/oc/gameplay/detail.php?id=789">Click here to visit official website</a>

        <hr />

        <Document 
          className="rulebook"
          file={ require('../../assets/yugioh-official-rulebook.pdf') } 
          onLoadSuccess={this.onDocumentLoad}
          loading="loading... please wait."
          error="an error has occurs, please refresh." >

          {renderPages}
        </Document>
      </Fragment>
    );
  }
}