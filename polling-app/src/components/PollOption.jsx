function PollOption({ option, onVote }) {
    return (
      <button
        onClick={onVote}
        style={{
          display: 'block',
          width: '100%',
          margin: '0.5rem 0',
          padding: '0.75rem',
          fontSize: '1rem',
          borderRadius: '6px',
          border: '1px solid #6200ea',
          backgroundColor: 'white',
        }}
      >
        {option.text}
      </button>
    );
  }
  
  export default PollOption;
  