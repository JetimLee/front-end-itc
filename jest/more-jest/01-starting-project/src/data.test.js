import { generateReportData } from "./data";
//the jest object would be imported instead of vi
import { describe, it, expect, vi } from "vitest";

describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    //can add behavior like this
    const logger = vi.fn(() => {});
    generateReportData(logger);
    expect(logger).toBeCalled();
    expect(logger).toBeCalledTimes(1);
  });
});
