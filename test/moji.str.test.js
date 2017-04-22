const assert = require("assert");
let moji = require("../dist/moji");

if(typeof window !== "undefined") {
    moji = window.moji;
}

describe("moji.str", () => {
    it("trim", function() {
        assert.strictEqual(
            moji("　あ　あ　あ　").trim().convert("HG", "KK").toString(),
            "ア　ア　ア");
    });
});
