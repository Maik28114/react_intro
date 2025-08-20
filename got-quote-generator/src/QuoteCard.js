import React from "react";


 const quoteStyle = {
    fontStyle: 'italic',
    color: '#6e4beaff',
    fontSize: '1.5em',
    marginBottom: '10px',
    borderLeft: '4px solid #F8C471',
    paddingLeft: '15px',
  };

  const characterStyle = {
    fontSize: '0.8em',
    color: '#c31d1dff',
    marginTop: '5px',
    display: 'block'
  };

function QuoteCard(props) {

    return (
        <blockquote style={quoteStyle}>
            "{props.quoteText}"
            <footer style={props.characterStyle}>
                - {props.characterName}
                {props.isQuoteEpic && <span style={{ marginLeft: '10px' }}>🌟</span>}
            </footer>
        </blockquote>
    )
}

export default QuoteCard;