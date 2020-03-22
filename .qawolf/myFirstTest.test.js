const qawolf = require("qawolf");
const selectors = require("./selectors/myFirstTest.json");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("myFirstTest", async () => {
  await page.goto("http://todomvc.com/examples/react");
  await page.click(selectors["0_what_needs_to_b_input"]);
  await page.type(selectors["1_what_needs_to_b_input"], "create test!");
  await page.press(selectors["2_what_needs_to_b_input"], "Enter");
  await page.click(selectors["3_input"]);
  await page.click(selectors["4_button"]);
});
