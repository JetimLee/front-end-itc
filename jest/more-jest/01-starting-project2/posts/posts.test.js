import { describe, expect, it } from "vitest";
import { extractPostData } from "./posts";

describe("testing extractPostData()", () => {
  it("should extract title and content from the provided form data", () => {
    const testTitle = "my title";
    const testContent = "some content in the form";
    const testFormData = {
      title: testTitle,
      content: testContent,
      get(key) {
        return this[key];
      },
    };

    const data = extractPostData(testFormData);
    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});
