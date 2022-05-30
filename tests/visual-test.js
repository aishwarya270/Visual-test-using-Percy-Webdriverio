describe("Visual compare", () => {
  it("First example", async () => {
    await browser.url("https://duckduckgo.com");

    const inputElem = await browser.$("#search_form_input_homepage");
    await inputElem.setValue("WebdriverIO");

    const submitBtn = await browser.$("#search_button_homepage");
    await submitBtn.click();

    // the browser object is required in standalone mode
    await percySnapshot(browser, "WebdriverIO at DuckDuckGo");

    await browser.deleteSession();
  });
});
