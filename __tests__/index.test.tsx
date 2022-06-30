import Header from '@layouts/Header';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../pages/index';

function isFiredEvent(name) {
  if ((window as any).firedEvents[name]) {
    delete (window as any).firedEvents[name];
    return true;
  } else {
    return false;
  }
}

describe('Home', () => {
  it('モーダルのトーグルテスト', async () => {
    render(<Home {...({} as any)} />);
    const openModalBtn = screen.getByRole('button', {
      name: '탑배너 CTA 문구',
    });
    await userEvent.click(openModalBtn);
    expect(screen.getByTestId('modal').textContent).toBe('내용');
    const closeModalBtn = screen.getByTestId('modal-close-btn');
    await userEvent.click(closeModalBtn);

    expect(isFiredEvent('Click Banner')).toBeTruthy();

    setTimeout(() => {
      expect(screen.getByTestId('modal')).not.toBeInTheDocument();
    }, 3000);
  });

  it('GNBメニューのリンクテスト', async () => {
    render(<Header />);
    const button = screen.getAllByRole('button');
    const anchor = screen.getAllByRole('link');
    for (let i = 0; i < anchor.length; i++) {
      if (anchor[i].textContent === 'nav.blog') {
        expect(anchor[i]).toHaveAttribute('href', 'https://blog.doda.app/');
      }
      if (anchor[i].textContent === 'nav.aboutDoda') {
        expect(anchor[i]).toHaveAttribute(
          'href',
          'https://blog.doda.app/career'
        );
      }
      if (anchor[i].textContent === 'nav.pricing') {
        expect(anchor[i]).toHaveAttribute('href', '/pricing');
      }
    }
    for (let i = 0; i < button.length; i++) {
      await userEvent.click(button[i]);
      expect(
        screen.getByRole('heading', {
          name: `header.${i === 0 ? 'feature' : 'resource'}.0.title`,
        })
      ).toBeTruthy();
      expect(
        isFiredEvent(i === 0 ? 'Open Feature Menu' : 'Open Resource Menu')
      ).toBeTruthy();
    }
  });
});
