/**
 * @jest-environment jsdom
 */
import {  screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('tests for posts', () => {
  it('should find a button prev', () => {
    expect(
      screen.queryByRole('button', {
        name: /previous page/i,
      }),
    );
  });
  it('should find a button next', () => {
    expect(
      screen.queryByRole('button', {
        name: /next page/i,
      }),
    );
  });

  it('should find a list of pages', () => {
    expect(screen.queryByRole('list'));
  });

  it('should find a logo', () => {
    expect(
      screen.queryByRole('img', {
        name: /logo/i,
      }),
    );
  });

  it('should find a button named posts', () => {
    expect(
      screen.queryByRole('link', {
        name: /posts/i,
      }),
    );
  });

  it('should find a button named users', () => {
    expect(
      screen.queryByRole('link', {
        name: /users/i,
      }),
    );
  });
});
