import React, { Component, } from 'react';
import { Document, Page, } from 'react-pdf';

export default class RuleBook extends Component {

  state = {
    numPages: null,
    pageNumbers: [],
  }

  onDocumentLoad = ({ numPages }) => {
    //create array with the page numbers extracted from PDF
    let pages = [];
    for(let i = 1; i < numPages + 1; i++) {
      pages.push(i);
    }

    this.setState({
      numPages, //numPages: NumPages
      pageNumbers: pages,
    });
  }

  render() {
    const { pageNumbers } = this.state;
    
    const renderPages = pageNumbers.map( numOfPage => (
      <Page
        className="rulebook-page"
        scale={1.3}
        pageNumber={numOfPage} />
    ));

    return (
      <div>
        <Document 
          className="rulebook-container"
          file={ require('../../assets/yugioh-official-rulebook.pdf') } 
          //capture the number of pages after loading
          onLoadSuccess={this.onDocumentLoad}
          loading="loading... please wait."
          error="an error has occurs, please refresh" >

          {renderPages}

        </Document>
      </div>
    );
  }
}
