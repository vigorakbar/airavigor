export function getInvitationName() {
  const url = new URL(window.location.href);
  const queryParams = new URLSearchParams(url.search);
  return queryParams.get('to') || '';
}

export const loadRemoteImage = (url: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = (): void => resolve(true);
    img.onerror = (err): void => reject(err);
    img.src = url;
  });
};
