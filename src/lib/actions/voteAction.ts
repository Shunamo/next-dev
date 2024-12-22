export const voteAction = async (teamId: number, token: string) => {
  const response = await fetch(`/votes/demo/${teamId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Access: `Bearer ${token}`,
    },
    body: JSON.stringify({
      teamId,
    }),
  });
  return response;
};

export const LeaderVoteAction = async (memberId: number, token: string) => {
  const response = await fetch(`/votes/leader/${memberId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Access: `Bearer ${token}`,
    },
    body: JSON.stringify({
      memberId,
    }),
  });
  return response;
};

export const voteResult = async (token: string) => {
  const response = await fetch(`/votes/demo`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Access: `Bearer ${token}`,
    },
  });
  return response;
};

export const candiateList = async (token: string) => {
  const response = await fetch(`/votes/leader`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Access: `Bearer ${token}`,
    },
  });
  return response.json();
};
