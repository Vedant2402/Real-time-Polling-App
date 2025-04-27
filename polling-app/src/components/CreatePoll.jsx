import { useState } from 'react';
import { usePoll } from '../context/PollContext';

function CreatePoll() {
  const { createPoll } = usePoll();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPoll(question, options.filter((opt) => opt.trim() !== ''));
    setQuestion('');
    setOptions(['', '']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Poll Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
        required
      />
      {options.map((option, idx) => (
        <input
          key={idx}
          type="text"
          placeholder={`Option ${idx + 1}`}
          value={option}
          onChange={(e) => handleOptionChange(idx, e.target.value)}
          style={{ display: 'block', width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
          required
        />
      ))}
      <button type="button" onClick={addOption} style={{ marginBottom: '1rem', background: '#6200ea', color: 'white', padding: '0.5rem' }}>
        Add Option
      </button>
      <br />
      <button type="submit" style={{ background: '#03dac5', color: 'black', padding: '0.5rem' }}>
        Create Poll
      </button>
    </form>
  );
}

export default CreatePoll;
