const formatDate = isoDateString => {
  if (!isoDateString) return 'N/A';
  const date = new Date(isoDateString);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const formatTrackTime = millis => {
  if (!millis) return 'N/A';
  const totalSeconds = Math.floor(millis / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export {formatDate, formatTrackTime};
