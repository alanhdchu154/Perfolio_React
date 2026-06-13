import { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

test('renders portfolio homepage', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  await act(async () => {
    root.render(<App />);
    await Promise.resolve();
  });

  expect(container.textContent).toContain('Alan Hwader Chu');
  expect(container.textContent).toContain('Selected Case Studies & Projects');

  await act(async () => {
    root.unmount();
  });
  document.body.removeChild(container);
});
