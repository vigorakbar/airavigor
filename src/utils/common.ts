export function getInvitationName() {
  const url = new URL(window.location.href);
  const queryParams = new URLSearchParams(url.search);
  return queryParams.get('to') || '';
}
