
/*
 * Human Readable Time
 *
 * Displays the first-most important sections only.
 */
export function secondsToString(seconds) {

  let num_years = Math.floor(seconds / 31536000);
  let num_days = Math.floor((seconds % 31536000) / 86400);
  let num_hours = Math.floor(((seconds % 31536000) % 86400) / 3600);
  let num_minutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  let num_seconds = (((seconds % 31536000) % 86400) % 3600) % 60;

  let result = '';

  result += num_years > 0 ? num_years + ' y ' : '';
  result += num_days > 0 ? num_days + ' d ' : '';
  if (num_years === 0) {
    result += num_hours > 0 ? num_hours + ' h ' : '';
    if (num_days === 0) {
      result += num_minutes > 0 ? num_minutes + ' m ' : '';
      if (num_hours === 0) {
        result += num_seconds > 0 ? Math.round(num_seconds * 100) / 100 + ' s' : '';
      }
    }
  }
  return result;
}
