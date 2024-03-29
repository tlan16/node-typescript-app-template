import assert from "node:assert";
import {describe, it} from "node:test";
import {getWelcomeMessage} from "../getWelcomeMessage.js";
import * as getWelcomeMessageLib from "../getWelcomeMessage.js";

void describe('getWelcomeMessage', () => {
  void it("SHOULD return non-empty string", () => {
    const actual = getWelcomeMessage();
    assert.strictEqual(actual.length > 0, true)
  })

  /**
   * Skip until find a way to mock with just node
   */
  void describe.skip("GIVEN mocked welcome message", () => {
    void it("SHOULD return mocked welcome message", (t) => {
      const expected = "Hello, World!";

      const fn = t.mock.method(getWelcomeMessageLib, "getWelcomeMessage");
      fn.mock.mockImplementation(() => expected);

      const actual = getWelcomeMessage();
      assert.strictEqual(actual, expected)
    })
  })
});
