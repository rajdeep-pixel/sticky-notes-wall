export function formatTime(dateVal) {
  const d = new Date(dateVal);
  const day = String(d.getDate()).padStart(2, '0');
  const month = d.toLocaleString('en-US', { month: 'short' });
  const year = d.getFullYear();
  const time = d.toLocaleString('en-US', {
    hour: '2-digit', minute: '2-digit', hour12: true
  });
  return `Added: ${day} ${month} ${year}, ${time}`;
}
