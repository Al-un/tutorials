const vueTest = require("@vue/test-utils");
const buttons = require("./buttons");

let wrapper;

describe("ButtonCounter", () => {
  beforeEach(() => {
    wrapper = vueTest.shallowMount(buttons.ButtonCounter);
  });

  test("is a Vue component", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("has a button tag", () => {
    const btn = wrapper.find("button");
    expect(btn.exists()).toBeTruthy();
  });
});
