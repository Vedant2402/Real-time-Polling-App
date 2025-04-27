import { useState } from 'react';
import { usePoll } from '../context/PollContext';
import PollOption from './PollOption';
import PollResults from './PollResults';

function Poll({ poll }) {
  const { vote } = usePoll();
  const [voted, setVoted] = useState(false);

  const handleVote = (optionId) => {
    vote(poll.id, optionId);
    setVoted(true);
  };

  return (
    <div style={{ background: 'white', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
      <h2>{poll.question}</h2>
      {!voted ? (
        poll.options.map((option) => (
          <PollOption key={option.id} option={option} onVote={() => handleVote(option.id)} />
        ))
      ) : (
        <PollResults options={poll.options} />
      )}
    </div>
  );
}

export default Poll;
