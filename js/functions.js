const MINUTES_IN_HOUR = 60;

function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

function isPalindrome(string) {
  const cleanString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = cleanString.length - 1; i >= 0; i--) {
    reversedString += cleanString[i];
  }
  if (cleanString === reversedString) {
    return true;
  }
  return false;
}

function convertTimeToMinutes(time) {
  const timeParts = time.split(':');
  const hours = Number(timeParts[0]);
  const minutes = Number(timeParts[1]);

  return hours * MINUTES_IN_HOUR + minutes;
}

function checkMeetingTime(workStart, workEnd, meetingStart, meetingDuration) {
  const workStartMinutes = convertTimeToMinutes(workStart);
  const workEndMinutes = convertTimeToMinutes(workEnd);
  const meetingStartMinutes = convertTimeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  if (meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes) {
    return true;
  }

  return false;
}

checkStringLength('проверяемая строка', 20);
isPalindrome('топот');
checkMeetingTime('08:00', '17:30', '14:00', 90);
