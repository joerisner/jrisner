---
layout: '../../layouts/BlogPost.astro'
publishDate: 'November 19, 2022'
title: 'Migrating from Cypress to Playwright'
description: 'Why Playwright will be my first choice in end-to-end testing frameworks for new projects.'
heroImage: '/images/sweet_escape.webp'
tags: [cypress, playwright, testing]
draft: true
---

I've been using Cypress in my day job as an SDET for nearly two years now and have really enjoyed the experience. Coming from a background using Selenium, I've grown to really enjoy the developer experience with Cypress.

That being said, I've recently stumbled upon Playwright and, I have to say, I prefer it even over Cypress. There are some areas where Cypress still has the upper hand on Playwright, in my opinion, but for my personal projects that require end-to-end tests, I'll be switching to Playwright. Here are some of the reasons why.

### Running Tests

As much as I enjoy the developer experience provided by Cypress (see below), I usually find myself running the tests headlessly with the `cypress run` command. For an end-to-end test framework that runs tests headlessly, Playwright excels over Playwright.

### Parallelization (locally)

![Check this out](/images/blog/pw_output.png)

### Assertion Libraries

> Really cool blockquotes right out of the gate

### Cross-Origin Requests

It's no secret that Cypress has always struggled with cross-origin requests like logins. This feature has been requested since 2016. Out of the box, Playwright can easily handle cross-origin requests.

```js
test('navigates to each page successfully', async ({ page }) => {
  await page.goto('/');

  const expectedLinks = ['Home', 'Blog', 'About'];
  const allNavLinks = page.getByTestId('navLink');

  await expect(page.getByTestId('mobileNavToggle')).not.toBeVisible();
  await expect(allNavLinks).toHaveText(expectedLinks, { ignoreCase: false });

  for (const link of expectedLinks) {
    await page.locator('[data-testid=navLink]', { hasText: link }).click();

    if (link === 'Home') {
      await expect(page).toHaveTitle('Joseph Risner');
      await expect(page).toHaveURL('/');
    } else {
      await expect(page).toHaveTitle(`${link} | Joseph Risner`);
      await expect(page).toHaveURL(`/${link.toLowerCase()}`);
    }
  }
});
```

### What about some other elements?

Vivamus porttitor vel ligula tempor molestie. Nullam volutpat non `yarn install --saveDeps`. Ut pellentesque pretium aliquam. Pellentesque et tristique magna, eget faucibus lectus. Phasellus semper turpis ex. Vestibulum nec risus laoreet dui pellentesque aliquet. Cras aliquam diam eget arcu porttitor, eget tincidunt ex volutpat. Donec efficitur cursus nunc, sed rhoncus purus efficitur non. Duis quis eros nec ligula luctus facilisis id nec quam. Donec accumsan scelerisque massa, ac pharetra neque blandit non. Donec ac lacinia mauris. Ut finibus nisl sit amet tellus pretium, eget molestie dui molestie. Cras nec lorem aliquam, dignissim mi nec, pulvinar arcu. Cras sed sagittis justo.

#### This is a heading 4

Mauris vestibulum placerat massa, dignissim dignissim purus finibus a. Sed tempor ultricies porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nisl metus, dictum nec rutrum at, dignissim ac velit. Sed malesuada laoreet faucibus. Duis non diam eu dui posuere dictum. Ut et sapien mollis, convallis ex eget, vehicula eros. Aenean est mi, eleifend at lacinia et, gravida eget dolor.
